import { JSX } from 'preact'
import { useState } from 'preact/hooks'
import RemoveButton from './remove-button'

interface Properties {
  removeVideoHandler: (watchTimeValue: number) => void
  initialValue?: number
}

function validate(value: any): boolean {
  const numberValue = Number(value)
  if (Number.isSafeInteger(numberValue) && numberValue >= 0 && numberValue <= 100) {
    return true
  }
  return false
}

function RemoveVideoEnhancerContainer({ removeVideoHandler, initialValue = 99 }: Properties) {
  const [inputValue, setValue] = useState({ value: initialValue })

  const onChange = ({ currentTarget }: JSX.TargetedEvent<HTMLInputElement, Event>) => {
    if (validate(currentTarget.value)) {
      return setValue({ value: Number(currentTarget.value) })
    }
    return setValue({ value: inputValue.value })
  }

  return (
    <div id='yt-remove-video-enhancer-container' className='style-scope ytd-playlist-sidebar-renderer'>
      <div className='style-scope ytd-menu-service-item-renderer' role='option' aria-disabled='false'>
        <p>Remove all videos who has been watched at more or equal X percent</p>
        <input id='removeVideosEnhancerInput' value={inputValue.value} onChange={onChange} min='0' max='100' required />
        <RemoveButton id='removeVideosEnhancerButton' onClick={() => removeVideoHandler(inputValue.value)} />
      </div>
    </div>
  )
}

export default RemoveVideoEnhancerContainer
