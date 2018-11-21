const colors = {
  red: { open: '\x1b[31m', close: '\x1b[39m' },
  green: { open: '\x1b[32m', close: '\x1b[39m' }
}

for (const color in colors) {
  module.exports[color] = function (str) {
    return `${colors[color].open}${str}${colors[color].close}`
  }
}
