chrome.browserAction.onClicked.addListener(IconClicked);
function IconClicked() {
    let msg = {
        txt : "hello"
    }
    chrome.tabs.sendMessage(tabs.id, msg);
}