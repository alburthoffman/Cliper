var clipboard = require('electron-clipboard-extended');
var electron = require('electron');
var app = electron.app, BrowserWindow = electron.BrowserWindow, globalShortcut = electron.globalShortcut, Menu = electron.Menu, Tray = electron.Tray;
//const store = require('clipstore/store')
function bootstrap() {
    clipboard.on('text-changed', function () {
        var currentText = clipboard.readText('clipboard');
        console.log(currentText);
    })
        .on('image-changed', function () {
        var currentIMage = clipboard.readImage();
        console.log(currentIMage.getSize());
    })
        .startWatching();
    globalShortcut.register('Cmd+Ctrl+Alt+Shift+`', function () {
        var _a = electron.screen.getCursorScreenPoint(), x = _a.x, y = _a.y;
        var win = new BrowserWindow({
            title: "Clipper",
            x: x,
            y: y,
            width: 200,
            height: 300,
            webPreferences: {
                nodeIntegration: true
            }
        });
        win.loadFile('dist/ui/index.html');
    });
    globalShortcut.register('Cmd+Ctrl+Alt+Shift+X', function () {
        clipboard.stopWatching();
        app.quit();
    });
    var tray = new Tray('dist/ui/icon.png');
    var contextMenu = Menu.buildFromTemplate([
        { label: 'Item1', type: 'radio' },
        { label: 'Item2', type: 'radio' },
        { label: 'Item3', type: 'radio', checked: true },
        { label: 'Item4', type: 'radio' }
    ]);
    tray.setToolTip('empower ur clipboard');
    tray.setContextMenu(contextMenu);
}
app.on('ready', bootstrap);
app.on('window-all-closed', function () {
    //app.quit()
});
