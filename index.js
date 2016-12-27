const postcss = require('postcss')
const { name } = require('./package')

const fn = (vars = {}) => {
  return (css) => {
    const rule = postcss.rule({ selector: ':root' })
    const props = Object.keys(vars)
    const decls = props.map((prop) => {
      const propName = prop.indexOf('--') === 0 ? prop : `--${prop}`
      return postcss.decl({ prop: propName, value: vars[prop] })
    })
    css.prepend(rule.append(decls))
  }
}

module.exports = postcss.plugin(name, fn)
