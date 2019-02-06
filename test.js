const m = require('.')

m('True is equals to true', async t => {
  t.is(true, true)
})

m('True is never equal to false', async t => {
  t.notEqual(true, false)
})

m('Objects are equal even tho properties are shuffled', async t => {
  t.is(
    { foo: 'bar', bar: 'foo' },
    { bar: 'foo', foo: 'bar' }
  )
})

m('This one throws', async t => {
  t.throws(_ => t.is(1, 2))
})

m('This will throw too', async t => {
  t.throws(_ => { throw new Error() })
})

m('Works with regex', async t => {
  t.regex('fooHellobar', /hello/i)
})

m('Works with regex mixing arguments', async t => {
  t.regex(/hello/i, 'fooHellobar')
})

m('Throws if no RegExp is present', async t => {
  t.throws(_ => t.regex('', ''))
})
