const { ipcRenderer } = require('electron');

ipcRenderer.on('clip-show-items', function(event, arg) {
    document.getElementById("items").innerText = JSON.stringify(arg);
});