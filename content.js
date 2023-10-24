// Send current page URL to background script
chrome.runtime.sendMessage({url: window.location.href});