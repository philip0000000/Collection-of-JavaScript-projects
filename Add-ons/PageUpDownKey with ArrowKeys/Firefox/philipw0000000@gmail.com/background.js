var toggleOnOff = false;

chrome.runtime.onMessage.addListener(
function(request, sender, sendResponse) {
		if (toggleOnOff == true && (request.command == ">" || request.command == "<")) {
			browser.tabs.query({ currentWindow: true }) // get all tabs
			.then((TabsArr) => {
				if (TabsArr.length <= 1) // can not change tab if not tabs, return
					return;
				
				var newTab = ((TabsArr.find(o => o.active == true).index // find tab index of tab that is active
				+ (request.command == ">" ? 1 : -1) // tab one up or down
				+ TabsArr.length)
				% TabsArr.length); // no negativ value
				browser.tabs.update(TabsArr[newTab].id, { active: true }); // update tab
			})
			.catch((err) => {
				console.error(err);
			});
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
    }
);


