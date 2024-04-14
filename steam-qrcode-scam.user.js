// ==UserScript==
// @name         Anti-Steam Scam ig
// @namespace    http://tampermonkey.net/
// @version      2024-04-14
// @description  try to take over the world!
// @author       viewmatrix
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function displayWarning() {
        const warningMessage = document.createElement('div');
        warningMessage.textContent = "Warning: Looks like this is an Steam QR-Code scam.";
        warningMessage.style.position = 'fixed';
        warningMessage.style.top = '10px';
        warningMessage.style.left = '10px';
        warningMessage.style.padding = '10px';
        warningMessage.style.background = 'red';
        warningMessage.style.color = 'white';
        warningMessage.style.fontWeight = 'bold';
        warningMessage.style.zIndex = '9999';

        document.body.appendChild(warningMessage);
    }

    const searchTexts = ["Steam-Mobile-App", "QR-Code", "Valve Corporation"];
    const pageText = document.body.textContent;
    const allTextsFound = searchTexts.every(text => pageText.includes(text));

    if (allTextsFound) {
        if (!document.URL.startsWith("https://steamcommunity.com/openid/loginform/")) {
            displayWarning();
        }
    }
})();
