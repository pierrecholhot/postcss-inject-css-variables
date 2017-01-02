const postcss = require('postcss')
const assume = require('assume')

const { name } = require('./package')
const lib = require('./')

describe(name, () => {
  it('works', () => {
    assume(
      postcss([
        lib({ colorAlpha: '#000', colorBeta: '#111' })
      ]).process('/* code */').css
    )
    .equals(
      ':root {\n    --colorAlpha: #000;\n    --colorBeta: #111\n}\n/* code */'
    )
  })

  it('works with with variables defined with a double dash', () => {
    const variables = {
      '--colorAlpha': '#000',
      '--colorBeta': '#111'
    }

    assume(postcss([lib(variables)]).process('/* code */').css)
    .equals(
      ':root {\n    --colorAlpha: #000;\n    --colorBeta: #111\n}\n/* code */'
    )
  })
})
