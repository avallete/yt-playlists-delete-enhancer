import { h, render } from 'preact'
import { useState, useEffect, useCallback } from 'preact/hooks'
import Button from 'preact-material-components/Button'
import Slider from 'preact-material-components/Slider'
import LinearProgress from 'preact-material-components/LinearProgress'
import getElementsByXpath from '~lib/get-elements-by-xpath'
import { XPATH } from '~src/selectors'
import VideoItemQuickResetButton from './video-item-quick-reset-button'
import VideoItemQuickDeleteButton from './video-item-quick-delete-button'

interface Properties {
  removeVideoWatchedPercentHandler: (watchTimeValue: number) => Promise<void> | void
  resetVideoHandler: (videoId: string) => Promise<void> | void
  removeVideoHandler: (videoId: string) => Promise<void> | void
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

function RemoveVideoEnhancerContainer({
  removeVideoWatchedPercentHandler,
  initialValue = 100,
  resetVideoHandler,
  removeVideoHandler,
}: Properties) {
  const [inputValue, setValue] = useState(initialValue)
  const [isReadyToRemove, setIsReadyToRemove] = useState(true)

  function onChange({ detail }: any) {
    // eslint-disable-next-line no-underscore-dangle
    const value = detail.foundation_.value_
    if (validate(value)) {
      setValue(value)
    }
  }

  const removeVideo = useCallback(async (videoId: string) => {
    await removeVideoHandler(videoId)
  }, [])

  const resetVideo = useCallback(async (videoId: string) => {
    await resetVideoHandler(videoId)
  }, [])

  useEffect(() => {
    const menus = getElementsByXpath(XPATH.YT_PLAYLIST_VIDEO_MENU) as HTMLElement[]
    for (const element of menus) {
      element.style.display = 'inline-flex'
      render(
        [
          h(VideoItemQuickResetButton, {
            // @ts-ignore element.data does not exists on types
            videoId: element.parentElement?.data.videoId,
            onClick: resetVideo,
          }),
          h(VideoItemQuickDeleteButton, {
            // @ts-ignore element.data does not exists on types
            videoId: element.parentElement?.data.videoId,
            onClick: removeVideo,
          }),
        ],
        element
      )
    }

    const sidebar = getElementsByXpath(XPATH.YT_SIDEBAR_CONTAINER) as HTMLElement[]
    if (sidebar.length > 0) {
      sidebar[0].style.overflow = 'visible'
    }
  }, [])

  return (
    <div className='style-scope ytd-playlist-sidebar-renderer'>
      <div className='style-scope ytd-menu-service-item-renderer' role='option' aria-disabled='false'>
        <p>Remove all videos that have been watched to at least {inputValue}%</p>
        <Slider min={0} max={100} step={5} value={inputValue} onChange={onChange} alt={INPUT_ALT} discrete />
        <Button
          raised
          ripple
          secondary
          alt={REMOVE_BUTTON_ALT}
          disabled={!isReadyToRemove}
          onClick={async () => {
            setIsReadyToRemove(false)
            await removeVideoWatchedPercentHandler(inputValue)
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
