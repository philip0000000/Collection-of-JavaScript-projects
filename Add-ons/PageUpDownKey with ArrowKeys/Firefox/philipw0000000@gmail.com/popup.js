function ToggleActivation(e) {
    chrome.runtime.sendMessage({ command: "toggleOnOff" });
}
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('ToggleActivation').addEventListener('click', ToggleActivation);
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
});

chrome.runtime.sendMessage({ command: "GetStatus" });
