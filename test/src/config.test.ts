import test from 'ava'
import * as config from '~src/config'

test('config should export OPERATION_INTERVAL and OPERATIONS_EXTRA_TRIES variables', (t) => {
  t.is(typeof config.OPERATIONS_INTERVAL, 'number')
  t.is(typeof config.OPERATIONS_EXTRA_TRIES, 'number')
})
