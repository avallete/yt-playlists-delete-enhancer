import { JSX } from 'preact'
import { useState } from 'preact/hooks'
import U from '~src/userscript'
import RemoveButton from '~components/remove-button'

interface Properties {
  removeVideoHandler: (watchTimeValue: number) => Promise<void> | void
  initialValue?: number
}

export const INPUT_ALT =
  'Input number between 0 and 100 to choose under how much percentage of watched time a video should be removed'

export const REMOVE_BUTTON_ALT = 'Remove button to start removing videos'

function validate(value: any): boolean {
  const numberValue = Number(value)
  if (Number.isSafeInteger(numberValue) && numberValue >= 0 && numberValue <= 100) {
    return true
  }
  return false
}

function RemoveVideoEnhancerContainer({ removeVideoHandler, initialValue = 99 }: Properties) {
  const [inputValue, setValue] = useState(initialValue)
  const [isReadyToRemove, setIsReadyToRemove] = useState(true)

  function onChange({ currentTarget }: JSX.TargetedEvent<HTMLInputElement, Event>) {
    if (validate(currentTarget.value)) {
      setValue(Number(currentTarget.value))
    } else {
      currentTarget.value = inputValue.toString()
    }
  }

  return (
    <div id={U.id} className='style-scope ytd-playlist-sidebar-renderer'>
      <div className='style-scope ytd-menu-service-item-renderer' role='option' aria-disabled='false'>
        <p>Remove all videos who has been watched at more or equal X percent</p>
        <input
          id='removeVideosEnhancerInput'
          type='number'
          value={inputValue}
          onChange={onChange}
          min='0'
          max='100'
          required
          alt={INPUT_ALT}
        />
        <RemoveButton
          alt={REMOVE_BUTTON_ALT}
          disabled={!isReadyToRemove}
          id='removeVideosEnhancerButton'
          onClick={async () => {
            setIsReadyToRemove(false)
            await removeVideoHandler(inputValue)
            setIsReadyToRemove(true)
          }}
        />
      </div>
    </div>
  )
}

export default RemoveVideoEnhancerContainer
