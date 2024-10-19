chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url) {
      if (tab.url.includes("x.com") || tab.url.includes("twitter.com")) {
        chrome.tabs.update(tabId, { url: "https://bsky.app/" });
      }
    }
  });
  