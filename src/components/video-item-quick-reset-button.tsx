import { useState } from 'preact/hooks'

import IconButton from 'preact-material-components/IconButton'

function VideoItemQuickResetButton(properties: { videoId: string; onClick: (videoId: string) => Promise<void> }) {
  const [loading, setLoading] = useState(false)
  return (
    <IconButton
      // we use this order -1 to avoid the button sometimes being render AFTER the row menu when swtiching between playlist
      style={{ order: -1 }}
      onClick={async () => {
        setLoading(true)
        await properties.onClick(properties.videoId)
        setLoading(false)
      }}
      disabled={loading}
      title='Mark as unwatched'
    >
      <IconButton.Icon style={{ color: '#e10000' }}>refresh</IconButton.Icon>
    </IconButton>
  )
}

export default VideoItemQuickResetButton
