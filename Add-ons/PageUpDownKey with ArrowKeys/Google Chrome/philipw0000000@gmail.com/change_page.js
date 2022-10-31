document.addEventListener("keydown", function(e) {
	if (e.key == "ArrowLeft") { // Left tab switch to (Ctrl+Page Up) // ArrowLeft
		chrome.runtime.sendMessage({command: "<"});
	}
	else if (e.key == "ArrowRight") { // Right tab switch to (Ctrl+Page Down) // ArrowRight
		chrome.runtime.sendMessage({command: ">"});
	}
})
