import test from 'ava'
import assert from 'assert'
import { render, fireEvent, screen, cleanup, waitFor } from '@testing-library/preact'
import RemoveVideoEnhancerContainer, { INPUT_ALT } from '~src/components/remove-video-enhancer-container'

test.afterEach.always(() => {
  cleanup()
})

test.serial('RemoveVideoEnhancerContainer should have 99 as default inital value', (t) => {
  render(<RemoveVideoEnhancerContainer removeVideoHandler={() => {}} />)
  t.is((screen.getByAltText(INPUT_ALT) as HTMLInputElement).value, '99')
})

test.serial('RemoveVideoEnhancerContainer should be able to set input initial value', (t) => {
  render(<RemoveVideoEnhancerContainer initialValue={42} removeVideoHandler={() => {}} />)
  t.is((screen.getByAltText(INPUT_ALT) as HTMLInputElement).value, '42')
})

test.serial('RemoveVideoEnhancerContainer should have type number', (t) => {
  render(<RemoveVideoEnhancerContainer initialValue={42} removeVideoHandler={() => {}} />)
  t.is((screen.getByAltText(INPUT_ALT) as HTMLInputElement).type, 'number')
})

test.serial('RemoveVideoEnhancerContainer call removeVideoHandler when RemoveButton clicked', (t) => {
  t.plan(1)
  render(<RemoveVideoEnhancerContainer removeVideoHandler={() => t.pass()} />)
  fireEvent.click(screen.getByRole('button'))
})

test.serial('RemoveVideoEnhancerContainer call removeVideoHandler with inputValue when RemoveButton clicked', (t) => {
  t.plan(1)
  render(<RemoveVideoEnhancerContainer initialValue={99} removeVideoHandler={(value) => t.is(value, 99)} />)
  fireEvent.click(screen.getByRole('button'))
})

test.serial('RemoveVideoEnhancerContainer cannot set value < 0', (t) => {
  render(<RemoveVideoEnhancerContainer initialValue={99} removeVideoHandler={() => {}} />)
  const input = screen.getByAltText(INPUT_ALT) as HTMLInputElement
  fireEvent.change(input, { target: { value: -1 } })
  t.is(input.value, '99')
})

test.serial('RemoveVideoEnhancerContainer cannot set value > 100', (t) => {
  render(<RemoveVideoEnhancerContainer initialValue={99} removeVideoHandler={() => {}} />)
  const input = screen.getByAltText(INPUT_ALT) as HTMLInputElement
  fireEvent.change(input, { target: { value: 101 } })
  t.is(input.value, '99')
})

test.serial('RemoveVideoEnhancerContainer cannot set new valid value onChange', (t) => {
  render(<RemoveVideoEnhancerContainer initialValue={99} removeVideoHandler={() => {}} />)
  const input = screen.getByAltText(INPUT_ALT) as HTMLInputElement
  fireEvent.change(input, { target: { value: 42 } })
  t.is(input.value, '42')
})

test.serial('RemoveVideoEnhancerContainer cannot set non-number value, should set 0', (t) => {
  render(<RemoveVideoEnhancerContainer initialValue={99} removeVideoHandler={() => {}} />)
  const input = screen.getByAltText(INPUT_ALT) as HTMLInputElement
  fireEvent.change(input, { target: { value: 'invalid' } })
  t.is(input.value, '0')
})

test.serial('RemoveVideoEnhancerContainer should fall back on last valid value if valid number, invalid one', (t) => {
  render(<RemoveVideoEnhancerContainer initialValue={99} removeVideoHandler={() => {}} />)
  const input = screen.getByAltText(INPUT_ALT) as HTMLInputElement
  // Change with a new valid value
  fireEvent.change(input, { target: { value: 42 } })
  // Try to set an invalid value, should not alter the value
  fireEvent.change(input, { target: { value: -20 } })
  t.is(input.value, '42')
  fireEvent.change(input, { target: { value: 1e29 } })
  t.is(input.value, '42')
})

test.serial(
  'RemoveVideoEnhancerContainer should disable the button while awaiting for removeVideoHandler to finish',
  async (t) => {
    render(
      <RemoveVideoEnhancerContainer
        initialValue={99}
        removeVideoHandler={async () => {
          // wait for setDisabled to be dispatched
          t.is(((await screen.findByRole('button')) as HTMLButtonElement).disabled, true)
        }}
      />
    )
    const button = screen.getByRole('button') as HTMLButtonElement
    t.is(button.disabled, false)
    fireEvent.click(button)

    // wait for setDisabled to be dispatched
    await waitFor(() => assert.strictEqual((screen.getByRole('button') as HTMLButtonElement).disabled, false))
  }
)
