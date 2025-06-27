// Store request data
const requests = {}
const tabRequests = {}
const finishedRequests = {}
const blobs = []
// Listen for web requests
// chrome.webRequest.onBeforeRequest.addListener(
//   (details) => {
//     // Create a unique ID for the request
//     if ((details.url.endsWith('.yaml') || details.url.endsWith('.json') || details.url.endsWith('.yml')) && !finishedRequests[details.url]) {
//       const requestId = details.requestId
      
//       // Store basic request data
//       requests[requestId] = {
//         id: requestId,
//         url: details.url,
//         method: details.method,
//         type: details.type,
//         tabId: details.tabId,
//         timestamp: Date.now(),
//         size: -1, // Will be updated when completed
//         status: "pending",
//       }
  
//       // Organize requests by tab
//       if (!tabRequests[details.tabId]) {
//         tabRequests[details.tabId] = []
//       }
//       tabRequests[details.tabId].push(requestId)
  
//       // Limit stored requests per tab (keep last 100)
//       if (tabRequests[details.tabId].length > 100) {
//         const oldestRequestId = tabRequests[details.tabId].shift()
//         delete requests[oldestRequestId]
//       }
  
//       // Log to console
//       console.log(`Request started: ${details.method} ${details.url}`)
//     }
//   },
//   { urls: ["<all_urls>"] },
// )

// Update request data when completed
chrome.webRequest.onCompleted.addListener(
  (details) => {    
    if (details.type === "xmlhttprequest" && (details.url.endsWith('.yaml') || details.url.endsWith('.json') || details.url.endsWith('.yml')) && !finishedRequests[details.url]) {
      console.log('details', details);
      finishedRequests[details.url] = true
      // console.log('url', details.url);
      // Собрать ссылки сделать запрос - вернуть файл и скачать его
      
      fetch(details.url)
        .then(data => data.text())
        .then(blob => {      
          console.log('pushing to blobs', blobs.length);
          blobs.push({
            text: blob,
            type: details.url.endsWith('.json') ? 'json' : 'yaml'
          })
        })
        .catch(err => console.error(err));
    }
  },
  { urls: ["<all_urls>"] },
)

// Update request data when there's an error
chrome.webRequest.onErrorOccurred.addListener(
  (details) => {
    if (requests[details.requestId]) {
      requests[details.requestId].status = "error"
      requests[details.requestId].error = details.error

      // Log to console
      console.log(`Request error: ${details.error} ${details.url}`)
    }
  },
  { urls: ["<all_urls>"] },
)

// Listen for messages from popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log('message', message);
  
  if (message.action === "getRequests") {
    // Get active tab ID
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]) {
        const activeTabId = tabs[0].id

        // Get requests for active tab
        const activeTabRequestIds = tabRequests[activeTabId] || []
        const activeTabRequestsData = activeTabRequestIds.map((id) => requests[id]).filter(Boolean)

        // Sort by timestamp (newest first)
        activeTabRequestsData.sort((a, b) => b.timestamp - a.timestamp)
        console.log('blobs in runtime', blobs);
        
        sendResponse({ requests: blobs })
      } else {
        sendResponse({ requests: [] })
      }
    })
    return true // Required for async sendResponse
  } else if (message.action === "clearRequests") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]) {
        const activeTabId = tabs[0].id

        // Clear requests for active tab
        if (tabRequests[activeTabId]) {
          tabRequests[activeTabId].forEach((id) => {
            delete requests[id]
          })
          tabRequests[activeTabId] = []
        }

        sendResponse({ success: true })
      }
    })
    return true
  } else if (message.action === "parseRequests") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      sendResponse({ requests: blobs })
    })
    return true
  }
})

// Clean up old requests periodically (every 5 minutes)
setInterval(
  () => {
    const now = Date.now()
    const fiveMinutesAgo = now - 5 * 60 * 1000

    // Remove requests older than 5 minutes
    Object.keys(requests).forEach((id) => {
      if (requests[id].timestamp < fiveMinutesAgo) {
        delete requests[id]

        // Also remove from tabRequests
        Object.keys(tabRequests).forEach((tabId) => {
          tabRequests[tabId] = tabRequests[tabId].filter((requestId) => requestId !== id)
        })
      }
    })
  },
  5 * 60 * 1000,
)
