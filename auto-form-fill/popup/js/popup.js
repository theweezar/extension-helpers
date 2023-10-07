'use strict';

/**
 * @this Window - Current browser window
 */
function onScanpageClick() {
    let win = this;
    let forms = win.document.querySelectorAll('form');
    console.log(forms);
}

function init() {
    let scanPageBtn = document.getElementById('scanPageBtn');

    if (scanPageBtn) {
        scanPageBtn.addEventListener('click', function () {
            chrome.tabs.query({ active: true }, function (tabs) {
                chrome.scripting.executeScript({
                    target: { tabId: tabs[0].id },
                    func: onScanpageClick
                });
            })
        });
    }
}

init();
