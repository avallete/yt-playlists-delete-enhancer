import { useState } from 'preact/hooks'

import IconButton from 'preact-material-components/IconButton'

function VideoItemQuickDeleteButton(properties: {
  setVideoId: string
  onClick: (setVideoId: string) => Promise<void>
}) {
  const [loading, setLoading] = useState(false)
  return (
    <IconButton
      // we use this order -1 to avoid the button sometimes being render AFTER the row menu when swtiching between playlist
      style={{ order: -1 }}
      onClick={async () => {
        setLoading(true)
        await properties.onClick(properties.setVideoId)
        setLoading(false)
      }}
      disabled={loading}
      title='Remove video'
    >
      <IconButton.Icon style={{ color: '#e10000' }}>delete</IconButton.Icon>
    </IconButton>
  )
}

export default VideoItemQuickDeleteButton
