chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ todos: [] });
});

chrome.runtime.onMessage.addListener((request) => {
  if (request.action === "updateSentences") {
    chrome.tabs.query({}, (tabs) => {
      tabs.forEach((tab) => {
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          files: ["content.js"],
        });
      });
    });
  }
});
