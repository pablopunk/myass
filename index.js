const assert = require('assert')
const { red, green } = require('kleur')

const test = {
  ...assert,
  is: assert.deepStrictEqual
}

async function Myass (name, fn) {
  try {
    await fn(test)
    console.log(`${green('✔')} ${name}`)
  } catch (err) {
    console.log(`${red('✗')} ${name}`)
    console.log(`  ${red(err.message)}`)

    process.exit(1)
  }
}

module.exports = Myass
