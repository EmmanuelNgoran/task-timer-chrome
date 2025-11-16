// Service worker for Manifest V3

// The app has received a message
function onMessage(message, sender, sendResponse) {
	console.log(message + '\n' + sender + '\n' + sendResponse);
}

// An alarm went off!
async function onAlarm(alarm) {
	try {
		const result = await chrome.storage.local.get(['background-running', 'opened']);
		if (result['background-running'] === true && result['opened'] !== true) {
			chrome.tabs.create({ url: 'main.html' });
		}
	} catch (error) {
		console.error('Error handling alarm:', error);
	}
}

// The app was installed/updated, or Chrome was updated
async function onUpdate(details) {
	try {
		if (details.reason === 'update') {
			// Open the app if it isn't already open, we're on a new version, and update alerting is enabled
			const result = await chrome.storage.local.get(['opened', 'old-version', 'update-alert']);
			const manifest = chrome.runtime.getManifest();
			
			if (result['opened'] !== true) {
				if (result['old-version'] && result['old-version'] !== manifest.version) {
					if (result['update-alert'] === undefined || result['update-alert'] === true) {
						chrome.tabs.create({ url: 'main.html' });
					}
				}
			}
		} else if (details.reason === 'install') {
			// Open the app installed page
			chrome.tabs.create({ url: 'installed.html' });
		}
	} catch (error) {
		console.error('Error handling install/update:', error);
	}
}

// Register listeners
chrome.runtime.onMessage.addListener(onMessage);
chrome.runtime.onMessageExternal.addListener(onMessage);
chrome.alarms.onAlarm.addListener(onAlarm);
chrome.runtime.onInstalled.addListener(onUpdate);