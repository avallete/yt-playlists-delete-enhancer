import test from 'ava'
import * as site from '~src/site'

test('site should export YT_LOCATION_CHANGE_EVENT variable', (t) => {
  t.is(typeof site.YT_LOCATION_CHANGE_EVENT, typeof Event.name)
})
