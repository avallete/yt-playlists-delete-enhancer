import test from 'ava'
import { XPATH } from '~src/selectors'

test('selectors XPATH should only contains valid xpath', (t) => {
  let xpath
  let key
  try {
    for ([key, xpath] of Object.entries(XPATH)) {
      document.evaluate(xpath, document, undefined, XPathResult.ANY_TYPE)
    }
    t.pass('all xpaths are valid')
  } catch (error) {
    t.fail(`${key}: ${xpath} :: ${error}`)
  }
})
