chrome.runtime.onInstalled.addListener(() => {
	chrome.action.setBadgeText({
		text: "OFF",
	});
});

const website = "https://www.biblegateway.com/passage/";

// When the user clicks on the extension action
chrome.action.onClicked.addListener(async (tab) => {
	if (tab.url.startsWith(website)) {
		const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
		const nextState = prevState === "ON" ? "OFF" : "ON";

		// Set the action badge to the next state
		await chrome.action.setBadgeText({
			tabId: tab.id,
			text: nextState,
		});

		if (nextState === "ON") {
			// Insert the CSS file when the user turns the extension on
			await chrome.scripting.executeScript({
				files: ["enhancements.js"],
				target: { tabId: tab.id },
			});
		} else if (nextState === "OFF") {
			// Remove the CSS file when the user turns the extension off
			console.log("IMPLEMENT ME");
			/*
      await chrome.scripting.removeCSS({
        files: ['focus-mode.css'],
        target: { tabId: tab.id }
      });
      */
		}
	}
});
