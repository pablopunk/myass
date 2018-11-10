# myass

<p align="center">
  <a href="https://travis-ci.org/pablopunk/myass"><img src="https://img.shields.io/travis/pablopunk/myass.svg" /> </a>
  <a href="https://packagephobia.now.sh/result?p=myass"><img src="https://packagephobia.now.sh/badge?p=myass" alt="Install size"></a>
  <a href="https://github.com/sindresorhus/xo"><img src="https://img.shields.io/badge/code_style-XO-5ed9c7.svg" /> </a>
  <a href="https://github.com/pablopunk/miny"><img src="https://img.shields.io/badge/made_with-miny-1eced8.svg" /> </a>
  <a href="https://www.npmjs.com/package/myass"><img src="https://img.shields.io/npm/dt/myass.svg" /></a>
</p>

<p align="center">
  <i>MY ASSertion framework. Magic free. 0 Dependencies.</i>
</p>

<p align="center">
  <img src="https://file-vggefwrhbk.now.sh" alt="screenshot">
</p>


## Install

```bash
npm install myass
```

## Features

* Totally synchronous
* Incredibly lightweight
* 0 dependencies
* No fancy features, focus on assertions
* Simple and beautiful output
* Fail fast

## Usage

You can use all the methods that the native `assert` has ([see docs](https://nodejs.org/api/assert.html)). Also, there are some shortcuts like `is()` to make deep equal assertions.

Create one of this entry points for your tests:

* `test.js`
* `tests.js`
* `test/index.js`
* `tests/index.js`

```js
const test = require('myass')

test('True is equals to true', async t => {
  t.is(true, true)
})

test('True is never equal to false', async t => {
  t.notEqual(true, false)
})

test('Objects are equal even tho properties are shuffled', async t => {
  t.is(
    { foo: 'bar', bar: 'foo' },
    { bar: 'foo', foo: 'bar' }
  )
})

test('This one throws', async t => {
  t.throws(() => t.is(1, 1))
})

test('This will throw too', async t => {
  t.throws(() => { throw new Error() })
})
```

`myass` is also a cli, so you can just call it like this:

```json
"scripts": {
  "test": "myass"
}
```

Another cool feature is that `myass` runs tests like a script, so you
can execute the file directly `node test.js` and it would still work.


## License

MIT


## Author

| ![me](https://gravatar.com/avatar/fa50aeff0ddd6e63273a068b04353d9d?size=100)           |
| --------------------------------- |
| [Pablo Varela](https://pablo.life)   |

