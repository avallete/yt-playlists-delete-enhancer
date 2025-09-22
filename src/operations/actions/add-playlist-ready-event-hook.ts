// Add playlist ready event hook
function addPlaylistReadyEventHook(callback: (reinit?: boolean | undefined) => void): void {
  document.addEventListener('yt-action', (event: Event) => {
    if ((event as CustomEvent).detail.actionName === 'yt-service-request') {
      const { target } = event

      if (target instanceof Element) {
        if ([...target.classList].includes('ytd-masthead')) {
          callback()
        }

        if ([...target.classList].includes('ytd-section-list-renderer')) {
          callback(true)
        }
      }
    }
  })
}

export default addPlaylistReadyEventHook
