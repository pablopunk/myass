const test = require('.')

test('True is equals to true', async (t) => {
  t.is(true, true)
})

test('True is never equal to false', async (t) => {
  t.notEqual(true, false)
})

test('Objects are equal even tho properties are shuffled', async (t) => {
  t.is({ foo: 'bar', bar: 'foo' }, { bar: 'foo', foo: 'bar' })
})

test('This one throws', async (t) => {
  t.throws((_) => t.is(1, 2))
})

test('This will throw too', async (t) => {
  t.throws((_) => {
    throw new Error()
  })
})

test('Works with regex', async (t) => {
  t.regex('fooHellobar', /hello/i)
})

test('Works with regex mixing arguments', async (t) => {
  t.regex(/hello/i, 'fooHellobar')
})

test('Throws if no RegExp is present', async (t) => {
  t.throws((_) => t.regex('', ''))
})
