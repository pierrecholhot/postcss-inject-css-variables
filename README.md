# PostCSS Inject CSS Variables

Inject global CSS variables into your files via PostCSS

__Transform__

``` css
/* Your CSS */
```

__to__

``` css
:root {
  --colorAlpha: #000;
  --colorBeta: #111
}
/* Your CSS */
```

__using__

``` js
module.exports = {
  colorAlpha: '#000',
  colorBeta: '#111'
}
```
_and some PostCSS magic_

## Installation

``` bash
npm i -D postcss-inject-css-variables
```

## Usage

### with node

``` js
const postcss = require('postcss')
const injectVariables = require('postcss-inject-css-variables')

const fs = require('fs')

const mycss = fs.readFileSync('input.css', 'utf8')

const variables = {
  colorAlpha: '#000',
  colorBeta: '#111'
}

// Process your CSS with postcss-inject-css-variables
const output = postcss([
    injectVariables(variables)
  ])
  .process(mycss)
  .css

console.log(output)

// :root {
//   --colorAlpha: #000;
//   --colorBeta: #111
// }
// /* CSS content */
```

### with webpack

#### webpack.config.js

``` js
const variables = require('./variables.js')

const config = {
  postcss: function (webpack) {
    return [
      // plugins..
      require('postcss-inject-css-variables')(variables),
      // more plugins..
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
