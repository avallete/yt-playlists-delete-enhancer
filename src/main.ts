import { compose } from '@typed/compose'
import { environment, errors, log, userscripter } from 'userscripter'

import * as CONFIG from '~src/config'
import OPERATIONS from '~src/operations'
import * as SITE from '~src/site'
import STYLESHEETS from '~src/stylesheets'
import U from '~src/userscript'

const describeFailure = errors.failureDescriber({
  siteName: SITE.NAME,
  extensionName: U.name,
  location: document.location,
})

userscripter.run({
  id: U.id,
  name: U.name,
  initialAction: () => {
    log.log(`${U.name} ${U.version}`)

    // Show deprecation notice
    const deprecationNotice = `
🚨 DEPRECATION NOTICE: This userscript has been deprecated! 🚨

The yt-playlists-delete-enhancer functionality is now available 
in the ImprovedTube Chrome Extension with many more features.

Please install ImprovedTube instead:
• Chrome/Edge: https://chrome.google.com/webstore/detail/improve-youtube-open-sour/bnomihfieiccainjcjblhegjgglakjdd
• Firefox: https://addons.mozilla.org/en-US/firefox/addon/youtube-addon/
• GitHub: https://github.com/code-charity/youtube

This userscript will continue to work for now but will not receive updates.
`

    // Log to console
    console.warn(deprecationNotice)

    // Show user notification if we're on YouTube
    if (window.location.hostname === 'www.youtube.com') {
      setTimeout(() => {
        const notification = document.createElement('div')
        notification.innerHTML = `
          <div style="
            position: fixed;
            top: 20px;
            right: 20px;
            background: #ff4444;
            color: white;
            padding: 15px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            font-family: 'Roboto', sans-serif;
            font-size: 14px;
            max-width: 400px;
            z-index: 10000;
            line-height: 1.4;
          ">
            <div style="font-weight: bold; margin-bottom: 8px;">
              🚨 Userscript Deprecated
            </div>
            <div style="margin-bottom: 10px;">
              This functionality is now available in <strong>ImprovedTube</strong> extension with 200+ features!
            </div>
            <div style="margin-bottom: 10px;">
              <a href="https://chrome.google.com/webstore/detail/improve-youtube-open-sour/bnomihfieiccainjcjblhegjgglakjdd" 
                 target="_blank" 
                 style="color: #ffcccc; text-decoration: underline;">
                Install ImprovedTube →
              </a>
            </div>
            <button style="
              background: rgba(255,255,255,0.2);
              border: 1px solid rgba(255,255,255,0.3);
              color: white;
              padding: 5px 10px;
              border-radius: 4px;
              cursor: pointer;
              font-size: 12px;
            " onclick="this.parentElement.parentElement.remove()">
              Dismiss
            </button>
          </div>
        `
        document.body.appendChild(notification)

        // Auto-dismiss after 15 seconds
        setTimeout(() => {
          if (notification.parentElement) {
            notification.remove()
          }
        }, 15000)
      }, 2000)
    }
  },
  stylesheets: STYLESHEETS,
  operationsPlan: {
    operations: OPERATIONS,
    interval: CONFIG.OPERATIONS_INTERVAL,
    tryUntil: environment.DOMCONTENTLOADED,
    extraTries: CONFIG.OPERATIONS_EXTRA_TRIES,
    // eslint-disable-next-line unicorn/no-array-for-each
    handleFailures: (failures) => failures.forEach(compose(log.error, describeFailure)),
  },
})
