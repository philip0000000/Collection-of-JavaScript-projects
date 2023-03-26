function ToggleActivation(e) {
    chrome.runtime.sendMessage({ command: "toggleOnOff" });
}
function ToggleActivationNandMKeys(e) {
    chrome.runtime.sendMessage({ command: "toggleOnOffNandMKeys" });
}
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('ToggleActivation').addEventListener('click', ToggleActivation);
	document.getElementById('ToggleActivationNandMKeys').addEventListener('click', ToggleActivationNandMKeys);
})

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if (request.command == "toggleOn") {
		document.getElementById("ToggleActivation").style.background = "#4CAF50BF";
		document.getElementById("ToggleActivation").innerHTML = "Active";
	}
	else if (request.command == "toggleOff") {
		document.getElementById("ToggleActivation").style.background = "#ff15048a";
		document.getElementById("ToggleActivation").innerHTML = "Deactive";
	}
	if (request.command == "toggleOnOffNandMKeysOn") {
		document.getElementById("ToggleActivationNandMKeys").style.background = "#4CAF50BF";
		document.getElementById("ToggleActivationNandMKeys").innerHTML = "Active N and M";
	}
	else if (request.command == "toggleOnOffNandMKeysOff") {
		document.getElementById("ToggleActivationNandMKeys").style.background = "#ff15048a";
		document.getElementById("ToggleActivationNandMKeys").innerHTML = "Deactive N and M";
	}
});

chrome.runtime.sendMessage({ command: "GetStatus" });



