import { useState } from 'preact/hooks'
import Button from 'preact-material-components/Button'
import Slider from 'preact-material-components/Slider'
import LinearProgress from 'preact-material-components/LinearProgress'
import U from '~src/userscript'

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

function RemoveVideoEnhancerContainer({ removeVideoHandler, initialValue = 100 }: Properties) {
  const [inputValue, setValue] = useState(initialValue)
  const [isReadyToRemove, setIsReadyToRemove] = useState(true)

  function onChange({ detail }: any) {
    // eslint-disable-next-line no-underscore-dangle
    const value = detail.foundation_.value_
    if (validate(value)) {
      setValue(value)
    }
  }

  return (
    <div id={U.id} className='style-scope ytd-playlist-sidebar-renderer'>
      <div className='style-scope ytd-menu-service-item-renderer' role='option' aria-disabled='false'>
        <p>Remove all videos who has been watched at more or equal {inputValue} %</p>
        <Slider min={0} max={100} step={5} value={inputValue} onChange={onChange} alt={INPUT_ALT} discrete />
        <Button
          raised
          ripple
          secondary
          alt={REMOVE_BUTTON_ALT}
          disabled={!isReadyToRemove}
          onClick={async () => {
            setIsReadyToRemove(false)
            await removeVideoHandler(inputValue)
            setIsReadyToRemove(true)
          }}
        >
          {!isReadyToRemove && <LinearProgress indeterminate />}
          {isReadyToRemove && <div>Remove!</div>}
        </Button>
      </div>
    </div>
  )
}

export default RemoveVideoEnhancerContainer
