// ==UserScript==
// @name         YT Watch Later Delete Enhancer
// @version      0.6
// @description  Add a button to remove videos watched with more than X percent from watch later playlist.
// @author       avallete
// @homepage     https://github.com/avallete/yt-watch-later-delete-enhancer
// @support      https://github.com/avallete/yt-watch-later-delete-enhancer/issues
// @updateURL    https://raw.githubusercontent.com/avallete/yt-watch-later-delete-enhancer/master/yt-watch-later-delete-enhancer.js
// @downloadURL  https://raw.githubusercontent.com/avallete/yt-watch-later-delete-enhancer/master/yt-watch-later-delete-enhancer.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.8.7/polyfill.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.15/lodash.min.js
// @grant        none
// @include      *//www.youtube.com/*
// @namespace    https://greasyfork.org/fr/users/70224-avallete
// @noframes     false
// @run-at       document-idle
// @licence      MIT
// ==/UserScript==


class GMScript {

    constructor(ytcfgdata, twoColumnBrowseResultsRenderer) {
        this.twoColumnBrowseResultsRenderer = twoColumnBrowseResultsRenderer;
        this.ytcfgdata = ytcfgdata;
        this.playlistVideos = [];
    }

    createUrlQueryString(queryDict) {
        let qs = [];
        for (const [key, value] of Object.entries(queryDict)) {
            qs.push(`${encodeURI(key)}=${encodeURI(value)}`);
        }
        return qs.join('&');
    }

    JSON_to_URLEncoded(element, key, list) {
        let dlist = list || [];
        if (typeof (element) == 'object') {
            for (let idx in element) {
                this.JSON_to_URLEncoded(element[idx], key ? key + '[' + idx + ']' : idx, dlist);
            }
        } else {
            dlist.push(key + '=' + encodeURIComponent(element));
        }
        return dlist.join('&');
    }

    enableRemoveButton() {
        const button = document.getElementById("removeVideosEnhancerButton");
        if (button) {
            button.disabled = false;
        }
    }

    disableRemoveButton() {
        const button = document.getElementById("removeVideosEnhancerButton");
        if (button) {
            button.disabled = true;
        }
    }

    getContinuationUrl(continuationData) {
        const {continuation} = continuationData;
        return `https://www.youtube.com/browse_ajax?${this.createUrlQueryString({
            ctoken: continuation,
            continuation: continuation
        })}`;
    }

    async getFirstPlaylistData() {
        const url = 'https://www.youtube.com/playlist?list=WL&pbj=1';
        let resp = await fetch(url, {
            "credentials": "include",
            "headers": {
                "X-YouTube-Client-Name": this.ytcfgdata["INNERTUBE_CONTEXT_CLIENT_NAME"],
                "X-YouTube-Client-Version": this.ytcfgdata["INNERTUBE_CONTEXT_CLIENT_VERSION"],
                "X-YouTube-Device": this.ytcfgdata["DEVICE"],
                "X-Youtube-Identity-Token": this.ytcfgdata["ID_TOKEN"],
                "X-YouTube-Page-CL": this.ytcfgdata["PAGE_CL"],
                "X-YouTube-Page-Label": this.ytcfgdata["PAGE_BUILD_LABEL"],
                "X-YouTube-Variants-Checksum": this.ytcfgdata["VARIANTS_CHECKSUM"],
            },
            "referrer": "https://www.youtube.com/playlist?list=WL",
            "method": "GET",
            "mode": "cors"
        });
        const jsondata = await resp.json();
        return _.get({jsondata}, 'jsondata[1].response.contents.twoColumnBrowseResultsRenderer');
    }

    async getAllPlaylistVideos() {
        if (!!this.twoColumnBrowseResultsRenderer) {
            // If the playlist data isn't already loaded into the page, load it
            this.twoColumnBrowseResultsRenderer = await this.getFirstPlaylistData();
        }
        let continuations = this.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents[0].itemSectionRenderer.contents[0].playlistVideoListRenderer.continuations;
        let playlistContent = this.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents[0].itemSectionRenderer.contents[0].playlistVideoListRenderer.contents;

        // If there is continuations, it mean that the playlist is not fully loaded,
        // Request additional data until not futher videos to fetch
        while (continuations && continuations.length > 0) {
            let resp = await fetch(this.getContinuationUrl(continuations[0].nextContinuationData), {
                "credentials": "include",
                "headers": {
                    "X-YouTube-Client-Name": this.ytcfgdata["INNERTUBE_CONTEXT_CLIENT_NAME"],
                    "X-YouTube-Client-Version": this.ytcfgdata["INNERTUBE_CONTEXT_CLIENT_VERSION"],
                    "X-YouTube-Device": this.ytcfgdata["DEVICE"],
                    "X-Youtube-Identity-Token": this.ytcfgdata["ID_TOKEN"],
                    "X-YouTube-Page-CL": this.ytcfgdata["PAGE_CL"],
                    "X-YouTube-Page-Label": this.ytcfgdata["PAGE_BUILD_LABEL"],
                    "X-YouTube-Variants-Checksum": this.ytcfgdata["VARIANTS_CHECKSUM"],
                },
                "referrer": "https://www.youtube.com/playlist?list=WL",
                "method": "GET",
                "mode": "cors"
            });
            if (resp.status === 200) {
                const respjson = await resp.json();
                const data = respjson[1].response.continuationContents.playlistVideoListContinuation.contents;
                playlistContent = playlistContent.concat(data);
                continuations = respjson[1].response.continuationContents.playlistVideoListContinuation.continuations;
            }
        }
        return playlistContent;
    }

    async removeVideosFromPlaylist(playlistId, videoIds) {
        const urlparams = {
            'sej': JSON.stringify({
                "commandMetadata": {
                    "webCommandMetadata": {
                        "url": "/service_ajax",
                        "sendPost": true,
                        "apiUrl": "/youtubei/v1/browse/edit_playlist"
                    }
                },
                "playlistEditEndpoint": {
                    "playlistId": playlistId,
                    "actions": videoIds.map((vid) => ({"setVideoId": vid, "action": "ACTION_REMOVE_VIDEO"})),
                    "params": "CAE%3D",
                    "clientActions": [
                        {
                            "playlistRemoveVideosAction": {
                                "setVideoIds": videoIds.map((vid) => vid)
                            }
                        }
                    ]
                }
            }),
            'csn': this.ytcfgdata["client-screen-nonce"],
            'session_token': this.ytcfgdata["XSRF_TOKEN"],
        };
        const params = {
            "credentials": "include",
            "headers": {
                "Content-Type": "application/x-www-form-urlencoded",
                "X-YouTube-Client-Name": this.ytcfgdata["INNERTUBE_CONTEXT_CLIENT_NAME"],
                "X-YouTube-Client-Version": this.ytcfgdata["INNERTUBE_CONTEXT_CLIENT_VERSION"],
                "X-YouTube-Device": this.ytcfgdata["DEVICE"],
                "X-Youtube-Identity-Token": this.ytcfgdata["ID_TOKEN"],
                "X-YouTube-Page-CL": this.ytcfgdata["PAGE_CL"],
                "X-YouTube-Page-Label": this.ytcfgdata["PAGE_BUILD_LABEL"],
                "X-YouTube-Variants-Checksum": this.ytcfgdata["VARIANTS_CHECKSUM"],
            },
            "referrer": "https://www.youtube.com/playlist?list=WL",
            "body": this.JSON_to_URLEncoded(urlparams),
            "method": "POST",
            "mode": "cors"
        };
        const resp = await fetch("https://www.youtube.com/service_ajax?name=playlistEditEndpoint", params);
        if (resp.status === 200) {
            return await resp.json();
        }
        return false;
    }

    getVideosIdsToDelete(watchTimeValue, playlistVideos) {
        const idsToDelete = playlistVideos
            .filter((itm) => !!_.get({itm}, 'itm.playlistVideoRenderer.thumbnailOverlays'))
            .filter(
                ({playlistVideoRenderer: {thumbnailOverlays: [overlay,]}}) => (
                    // If it's not the first element in array, the videos haven't been played yet
                    overlay.thumbnailOverlayResumePlaybackRenderer
                    && overlay.thumbnailOverlayResumePlaybackRenderer.percentDurationWatched >= watchTimeValue
                )
            )
            .map(({playlistVideoRenderer: {setVideoId: vid}}) => vid);
        return idsToDelete;
    }

    async handleRemoveVideosClickedEvent(watchTimeValue) {
        this.disableRemoveButton();
        let idsToDelete = this.getVideosIdsToDelete(watchTimeValue, this.playlistVideos);
        const respjson = await this.removeVideosFromPlaylist("WL", idsToDelete);
        if (respjson.code === "SUCCESS") {
            // TODO propagate the change directly to YT UI instead of reloading the all page
            location.reload();
        }
        this.enableRemoveButton();
    }

    constructDOM() {
        return document.createRange().createContextualFragment(`
            <div id="yt-remove-video-enhancer-container" class="style-scope ytd-playlist-sidebar-renderer">
                <div class="style-scope ytd-menu-service-item-renderer" role="option" tabindex="0" aria-disabled="false">
                    <p>Remove all videos who has been watched at more or equal X percent</p>
                    <input id="removeVideosEnhancerValue" type="number" min="0" max="100" value="99">
                    <button id="removeVideosEnhancerButton">Remove !</button>
                </div>
            </div>`
        );
    }

    createEventsListeners(DOMFragment) {
        const input = DOMFragment.getElementById("removeVideosEnhancerValue");
        const button = DOMFragment.getElementById("removeVideosEnhancerButton");
        button.addEventListener('click', () => this.handleRemoveVideosClickedEvent(input.value));
    }

    appendDOM(DOMFragment) {
        const container = document.evaluate('//ytd-playlist-sidebar-renderer/div[@id="items"]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        container.appendChild(DOMFragment);
    }

    run() {
        const domFragment = this.constructDOM();
        this.createEventsListeners(domFragment);
        this.appendDOM(domFragment);
        this.disableRemoveButton();
        this.getAllPlaylistVideos()
            .then((playlistContent) => {
                this.playlistVideos = playlistContent;
                this.enableRemoveButton();
            })
            .catch(console.error);
    }
}

function cleanupDOM() {
    // Destroy every DOM elements created by the script
    const extendedDOM = document.getElementById("yt-remove-video-enhancer-container");
    if (extendedDOM) {
        extendedDOM.parentNode.removeChild(extendedDOM);
    }
}


// The following conditions and check are here to mitigate the "virtual" navigation of youtube
// Without this fix, Tampermonkey fail to load our script on youtube without a full page reload.
if (window.location.pathname === '/playlist' && window.location.search === '?list=WL') {
    const script = new GMScript(window.ytcfg.data_, window.getPageData().data.response.contents.twoColumnBrowseResultsRenderer);
    script.run();
}

history.pushState = (f => function pushState() {
    let ret = f.apply(this, arguments);
    window.dispatchEvent(new Event('pushstate'));
    window.dispatchEvent(new Event('locationchange'));
    return ret;
})(history.pushState);

history.replaceState = (f => function replaceState() {
    let ret = f.apply(this, arguments);
    window.dispatchEvent(new Event('replacestate'));
    window.dispatchEvent(new Event('locationchange'));
    return ret;
})(history.replaceState);

window.addEventListener('popstate', () => {
    window.dispatchEvent(new Event('locationchange'))
});

window.addEventListener('yt-navigate-finish', () => {
    window.dispatchEvent(new Event('locationchange'))
});

window.addEventListener('locationchange', function () {
    if (window.location.pathname === '/playlist' && window.location.search === '?list=WL') {
        // TODO sometimes getPageData isn't included into the page, don't know why.
        // Use ytInitialData as fallback option.
        const pagedata = window.getPageData ? window.getPageData() : {data: {response: window.ytInitialData}}; // Prefetched initial datas present in the page
        const ytcfgdata = window.ytcfg.data_; // configuration of youtube app containing auth tokens
        const twoColumnBrowseResultsRenderer = pagedata.data.response.contents.twoColumnBrowseResultsRenderer; // 100 videos data from playlist loaded by youtube
        const script = new GMScript(ytcfgdata, twoColumnBrowseResultsRenderer);
        script.run();
    } else {
        cleanupDOM();
    }
});
