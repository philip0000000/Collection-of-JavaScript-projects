// ==UserScript==
// @name         Left-Click View Image with P Key
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Open images in a new tab on left-click while holding 'P' key
// @author       philip0000000
// @match        *://*/*
// ==/UserScript==

(function() {
    'use strict';

    let isPKeyDown = false;

    // Track the state of the 'P' key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'p' || event.key === 'P') {
            isPKeyDown = true;
        }
    });

    document.addEventListener('keyup', function(event) {
        if (event.key === 'p' || event.key === 'P') {
            isPKeyDown = false;
        }
    });

    document.addEventListener('click', function(event) {
        // Check if 'P' is held down and the clicked element is an image
        if (isPKeyDown && event.target.tagName.toLowerCase() === 'img') {
            // Prevent default action
            event.preventDefault();
            // Open the image in a new tab
            window.open(event.target.src, '_blank');
        }
    });
})();
