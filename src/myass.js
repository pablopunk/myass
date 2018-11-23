const assert = require('assert')
const { red, green } = require('./colors')

const test = {
  ...assert,
  is: assert.deepStrictEqual,
  true: _ => assert(_ === true)
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