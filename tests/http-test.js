const test = require('tape')
const sandbox = require('@architect/sandbox')

/**
 * first we need to start the local http server
 */
test('sandbox.start', async t=> {
  t.plan(1)
  await sandbox.start({ quiet: true })
  t.ok(true, 'sandbox started on http://localhost:3333')
})


/**
 * finally close the server so we cleanly exit the test
 */
test('sandbox.end', async t=> {
  t.plan(1)
  await sandbox.end()
  t.ok(true, 'sandbox ended')
})