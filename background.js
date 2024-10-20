chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url) {
    const url = new URL(tab.url);
    
    if ((url.hostname === 'x.com' || url.hostname === 'twitter.com') && (url.pathname === '/' || url.pathname === '')) {
      chrome.tabs.update(tabId, { url: "https://bsky.app/" });
    }
  }
});
