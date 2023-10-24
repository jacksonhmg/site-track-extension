chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.url) {
        let sites = JSON.parse(localStorage.getItem('sites') || '[]');
        if (sites.indexOf(message.url) === -1) {
            sites.push(message.url);
            localStorage.setItem('sites', JSON.stringify(sites));
        }
    }
});
