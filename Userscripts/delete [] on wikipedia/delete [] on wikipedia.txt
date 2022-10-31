// ==UserScript==
// @name     delete "[*]" on wikipedia
// @version  1
// @grant    none
// @include  /^https?://[\s\S]*\.wikipedia\.org/.*$/
// ==/UserScript==

var allElements = document.body.getElementsByTagName("*");

for (var i=0, max=allElements.length; i < max; i++) {
  if (allElements[i].innerHTML.search(/\[[0-9]+\]/) != -1) {
    allElements[i].innerHTML = allElements[i].innerHTML.replace(/\[[0-9]+\]/, "");
	}
}
