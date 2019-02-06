const assert = require('assert')
const { red, green } = require('./colors')

const test = {
  ...assert,
  is: assert.deepStrictEqual,
  true: _ => assert(_ === true),
  regex: (s, r) => {
    if (typeof s === 'string' && r instanceof RegExp) {
      if (s.match(r) === null) {
        throw new Error(`\n\nValue:\n${s}\nExpected to match:\n${r}\n`)
      }
    } else if (typeof r === 'string' && s instanceof RegExp) {
      if (r.match(s) === null) {
        throw new Error(`\n\nValue:\n${r}\nExpected to match:\n${s}\n`)
      }
    } else {
      throw new Error('Provide a string and a RegExp')
    }
  }
}

async function Myass (name, fn) {
  try {
    await fn(test)
    console.log(`${green('✔')} ${name}`)
  } catch (err) {
    console.log(`${red('✗')} ${name}`)
    console.log(`  ${red(err.stack)}`)

    process.exit(1)
  }
}

module.exports = Myass
