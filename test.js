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
  t.throws(() => t.is(1, 1))
})

m('This will throw too', async t => {
  t.throws(() => { throw new Error() })
})
