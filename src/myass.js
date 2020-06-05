const assert = require('assert')
const { red, green } = require('./colors')

const regexFn = (s, r, bool) => {
  if (typeof s === 'string' && r instanceof RegExp) {
    if (r.test(s) === bool) {
      throw new Error(`\n\nValue:\n${s}\nExpected to match:\n${r}\n`)
    }
  } else if (typeof r === 'string' && s instanceof RegExp) {
    if (s.test(r) === bool) {
      throw new Error(`\n\nValue:\n${r}\nExpected to match:\n${s}\n`)
    }
  } else {
    throw new Error('Provide a string and a RegExp')
  }
}

const test = {
  ...assert,
  is: assert.deepStrictEqual,
  true: (_) => assert(_ === true),
  false: (_) => assert(_ === false),
  regex: (s, r) => regexFn(s, r, false),
  notRegex: (s, r) => regexFn(s, r, true),
}

async function Myass(name, fn) {
  fn(test)
    .then(() => console.log(`${green('✔')} ${name}`))
    .catch((err) => {
      console.log(`${red('✗')} ${name}`)
      console.log(`  ${red(err.stack)}`)

      process.exit(1)
    })
}

module.exports = Myass
