import test from 'ava'
import OPERATIONS from '~src/operations'

test('OPERATIONS should be non-empty array', (t) => {
  t.true(OPERATIONS.length > 0)
})
