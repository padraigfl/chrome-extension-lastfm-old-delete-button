chrome.browserAction.onClicked.addListener(function(tab) {
  if (tab.url.indexOf("https://www.last.fm/") != -1) { // Inspect whether the place where user clicked matches with our list of URL
      chrome.tabs.executeScript(tab.id, {
          "file": "./delete_code.js"
      }, function () { // Execute your code
          console.log("Script Executed .. "); // Notification on Completion
      });
  }
});
