var toggleOnOff = false;

chrome.runtime.onMessage.addListener(getAllTab);

function getAllTab(request, sender, sendResponse) {
	if (toggleOnOff == true && (request.command == ">" || request.command == "<")) {
		chrome.tabs.query({ currentWindow: true }, FindCurrentTab);
	}
	else if (request.command == "toggleOnOff") {
		toggleOnOff = !toggleOnOff;
		if (toggleOnOff == true)
			chrome.runtime.sendMessage({ command: "toggleOn" });
		else
			chrome.runtime.sendMessage({ command: "toggleOff" });
	}
	else if (request.command == "GetStatus") {
		if (toggleOnOff == true)
			chrome.runtime.sendMessage({ command: "toggleOn" });
		else
			chrome.runtime.sendMessage({ command: "toggleOff" });
	}
	
	function FindCurrentTab(tabs) {
		if (chrome.runtime.lastError) {
			console.error(chrome.runtime.lastError);
			return;
		}
		
		var newTab = ((tabs.find(o => o.active == true).index // find tab index of tab that is active
					+ (request.command == ">" ? 1 : -1) // tab one up or down
					+ tabs.length) % tabs.length); // no negativ value
		chrome.tabs.update(tabs[newTab].id, { active: true }); // update tab
	}
}
