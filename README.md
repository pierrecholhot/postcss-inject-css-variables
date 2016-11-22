# PostCSS Inject CSS Variables [![Build Status](https://travis-ci.org/pierrecholhot/postcss-inject-css-variables.svg?branch=master)](https://travis-ci.org/pierrecholhot/postcss-inject-css-variables) [![GitHub tag](https://img.shields.io/github/tag/pierrecholhot/postcss-inject-css-variables.svg)]() [![GitHub issues](https://img.shields.io/github/issues/pierrecholhot/postcss-inject-css-variables.svg)]()  [![Licence](https://img.shields.io/npm/l/postcss-inject-css-variables.svg)]()

[![NPM](https://nodei.co/npm/postcss-inject-css-variables.png?downloads=true&stars=true)](https://nodei.co/npm/postcss-inject-css-variables/)

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

## License

```
Copyright © 2016 Pierre Cholhot <hello@pierre.cx>

This work is free. You can redistribute it and/or modify it under the
terms of the Do What The Fuck You Want To Public License, Version 2,
as published by Sam Hocevar. See the LICENSE file for more details.
```
