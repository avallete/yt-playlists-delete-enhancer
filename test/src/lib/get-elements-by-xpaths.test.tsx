import test from 'ava'
import { render, cleanup } from '@testing-library/preact'
import getElementsByXpath from '~lib/get-elements-by-xpath'

let container: Element

test.beforeEach(() => {
  const result = render(
    <div>
      <span>
        <ol>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </ol>
      </span>
      <div id='42'></div>
    </div>,
  )
  container = result.container
})

test.afterEach.always(() => {
  cleanup()
})

test.serial('getElementsByXpath: should return an empty array of Node if no match', (t) => {
  t.deepEqual(getElementsByXpath('//ul', container), [])
})
test.serial('getElementsByXpath: should return array with the matching nodes in it', (t) => {
  const result = getElementsByXpath('//li', container)
  const expectedSnap = render(
    <>
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
    </>,
  )
  const expected = [
    expectedSnap.container.childNodes.item(0),
    expectedSnap.container.childNodes.item(1),
    expectedSnap.container.childNodes.item(2),
  ]
  t.is(result.length, expected.length)
  t.true(expected[0].isEqualNode(result[0]))
  t.true(expected[1].isEqualNode(result[1]))
  t.true(expected[2].isEqualNode(result[2]))
})
test.serial('getElementsByXpath: should work without parent element and use document', (t) => {
  const result = getElementsByXpath('//li')
  const expectedSnap = render(
    <>
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
    </>,
  )
  const expected = [
    expectedSnap.container.childNodes.item(0),
    expectedSnap.container.childNodes.item(1),
    expectedSnap.container.childNodes.item(2),
  ]
  t.is(result.length, expected.length)
  t.true(expected[0].isEqualNode(result[0]))
  t.true(expected[1].isEqualNode(result[1]))
  t.true(expected[2].isEqualNode(result[2]))
})
