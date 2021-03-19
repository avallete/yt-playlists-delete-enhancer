import test from 'ava'
import { render, fireEvent, screen, cleanup } from '@testing-library/preact'
import RemoveVideoEnhancerContainer from '~src/remove-video-enhancer-container'

test.afterEach.always(() => {
  cleanup()
})

test.serial('RemoveVideoEnhancerContainer should have 99 as default inital value', (t) => {
  render(<RemoveVideoEnhancerContainer removeVideoHandler={() => {}} />)
  t.is((screen.getByRole('textbox') as HTMLInputElement).value, '99')
})

test.serial('RemoveVideoEnhancerContainer should be able to set input initial value', (t) => {
  render(<RemoveVideoEnhancerContainer initialValue={42} removeVideoHandler={() => {}} />)
  t.is((screen.getByRole('textbox') as HTMLInputElement).value, '42')
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
  const input = screen.getByRole('textbox') as HTMLInputElement
  fireEvent.change(input, { target: { value: -1 } })
  t.is(input.value, '99')
})

test.serial('RemoveVideoEnhancerContainer cannot set value > 100', (t) => {
  render(<RemoveVideoEnhancerContainer initialValue={99} removeVideoHandler={() => {}} />)
  const input = screen.getByRole('textbox') as HTMLInputElement
  fireEvent.change(input, { target: { value: 101 } })
  t.is(input.value, '99')
})

test.serial('RemoveVideoEnhancerContainer cannot set new valid value onChange', (t) => {
  render(<RemoveVideoEnhancerContainer initialValue={99} removeVideoHandler={() => {}} />)
  const input = screen.getByRole('textbox') as HTMLInputElement
  fireEvent.change(input, { target: { value: 42 } })
  t.is(input.value, '42')
})

test.serial('RemoveVideoEnhancerContainer cannot set non-number value', (t) => {
  render(<RemoveVideoEnhancerContainer initialValue={99} removeVideoHandler={() => {}} />)
  const input = screen.getByRole('textbox') as HTMLInputElement
  fireEvent.change(input, { target: { value: 'invalid' } })
  t.is(input.value, '99')
})

test.serial('RemoveVideoEnhancerContainer should fall back on last valid value', (t) => {
  render(<RemoveVideoEnhancerContainer initialValue={99} removeVideoHandler={() => {}} />)
  const input = screen.getByRole('textbox') as HTMLInputElement
  // Change with a new valid value
  fireEvent.change(input, { target: { value: 42 } })
  // Try to set an invalid value, should not alter the value
  fireEvent.change(input, { target: { value: 'invalid' } })
  t.is(input.value, '42')
  fireEvent.change(input, { target: { value: -20 } })
  t.is(input.value, '42')
  fireEvent.change(input, { target: { value: 1e29 } })
  t.is(input.value, '42')
})
