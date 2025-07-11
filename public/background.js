// Store request data
const requests = {}
const tabRequests = {}
const finishedRequests = {}
const blobs = []
// Listen for web requests
// Update request data when completed
chrome.runtime.onInstalled.addListener(function(details){
    if(details.reason == "install"){
        console.log("This is a first install!");
    }
});
chrome.webRequest.onCompleted.addListener(
  (details) => {    
    if (details.type === "xmlhttprequest" && (details.url.endsWith('.yaml') || details.url.endsWith('.json') || details.url.endsWith('.yml')) && !finishedRequests[details.url]) {
      finishedRequests[details.url] = true
      
      fetch(details.url)
        .then(data => data.text())
        .then(blob => {  
          if(blob.includes('openapi')) {
            console.log('blobbing');
            blobs.push({
              text: blob,
              type: details.url.endsWith('.json') ? 'json' : 'yaml'
            })
          }   
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
