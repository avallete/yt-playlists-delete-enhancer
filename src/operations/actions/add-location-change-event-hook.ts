import { YT_LOCATION_CHANGE_EVENT } from '~src/site'

// Add location change event hooks
function addLocationChangeEventHooks(callback: () => void): void {
  window.addEventListener(YT_LOCATION_CHANGE_EVENT, callback)
}

export default addLocationChangeEventHooks
