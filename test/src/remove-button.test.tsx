import test from 'ava'
import { render } from '@testing-library/preact'
import RemoveButton from '~src/remove-button'

test('RenderButton contain remove text', (t) => {
  const { container } = render(<RemoveButton />)
  t.is(container.textContent, 'Remove !')
})
