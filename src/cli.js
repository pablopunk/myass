#!/usr/bin/env node
const fs = require('fs')
const { spawn } = require('child_process')
const { green, red } = require('./colors')

const possibleFiles = ['test.js', 'tests.js', 'test/index.js', 'tests/index.js']

let run = false

possibleFiles.map((fileName) => {
  if (fs.existsSync(fileName)) {
    run = true
    const node = spawn('node', [fileName], { stdio: 'inherit' })

    node.on('close', (code) => {
      code === 0 ? console.log(green('\nPassed')) : console.log(red('\nFailed'))

      process.exit(code)
    })
  }
})

run || console.log('No test file found')
