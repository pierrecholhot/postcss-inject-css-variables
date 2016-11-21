# PostCSS Inject CSS Variables

Inject global CSS variables into your files via PostCSS

Transform

``` css
/* Your CSS */
```

to

``` css
:root {
  --colorAlpha: #000;
  --colorBeta: #111
}
/* Your CSS */
```

using

``` js
module.exports = {
  colorAlpha: '#000',
  colorBeta: '#111'
}
```

## Installation

``` bash
npm i -D postcss-inject-css-variables
```

## Usage

### with node

``` js
const postcss = require('postcss');
const injectVariables = require('postcss-inject-css-variables');

const fs = require('fs');

const mycss = fs.readFileSync('input.css', 'utf8');

const variables = {
  colorAlpha: '#000',
  colorBeta: '#111'
};

// Process your CSS with postcss-inject-css-variables
const output = postcss([
        injectVariables(variables)
    ])
    .process(mycss)
    .css;

console.log(output);

// :root {
//   --colorAlpha: #000;
//   --colorBeta: #111
// }
// /* CSS content */
```

### with webpack


#### webpack.config.js

``` js
const vars = require('./variables.js')

const config = {
  postcss: function (webpack) {
    return [
      require('postcss-inject-css-variables')(vars),
      ...,
      ...,
      ...,
    ]
  },
}
```

#### variables.js

``` js
module.exports = {
  colorAlpha: '#000',
  colorBeta: '#111'
}

```
