document.addEventListener("keydown", function(e) {
	if (e.key == "ArrowLeft") { // Left tab switch to (Ctrl+Page Up) // ArrowLeft
		browser.runtime.sendMessage({command: "<"});
	}
	else if (e.key == "ArrowRight") { // Right tab switch to (Ctrl+Page Down) // ArrowRight
		browser.runtime.sendMessage({command: ">"});
	}
	else if (e.key == "n" || e.key == "N") { // Right tab switch to (Ctrl+Page Down) // N and n key
		browser.runtime.sendMessage({command: "n"});
	}
	else if (e.key == "m" || e.key == "M") { // Right tab switch to (Ctrl+Page Down) // M and m key
		browser.runtime.sendMessage({command: "m"});
	}
})



