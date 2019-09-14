const clipboard = require('electron-clipboard-extended')
const electron = require('electron')
const { app, BrowserWindow, globalShortcut, Menu, Tray, ipcMain } = electron
const store = require('./components/models/clipstore')

clipstore = new store.Store(3)

function bootstrap() {
  clipboard.on('text-changed', () => {
    let currentText = clipboard.readText('clipboard')
    clipstore.push(currentText)
    console.log(clipstore.toString())
  })
  .on('image-changed', () => {
    let currentIMage = clipboard.readImage()
    clipstore.push(currentIMage)
    console.log(clipstore.toString())
  })
  .startWatching()

  let win = null;

  globalShortcut.register('Cmd+Ctrl+Alt+Shift+`', () => {
    let {x, y} = electron.screen.getCursorScreenPoint()

    if (win != null) {
      win.close();
    }

    win = new BrowserWindow({
      title: "Clipper",
      x: x,
      y: y,
      width: 200,
      height: 300,
      webPreferences: {
        nodeIntegration: true
      }
    })
  
    win.loadFile('dist/components/ui/index.html')

    win.webContents.on('did-finish-load', function() {
      win.webContents.send('clip-show-items', {a:1,b:2});
    })
  })

  globalShortcut.register('esc', () => {
    if (win != null) {
      win.close();
    }
    win = null;
  });

  globalShortcut.register('Cmd+Ctrl+Alt+Shift+X', () => {
    clipboard.stopWatching()
    app.quit()
  })

  let tray = new Tray('dist/components/ui/icon.png')
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Item1', type: 'radio' },
    { label: 'Item2', type: 'radio' },
    { label: 'Item3', type: 'radio', checked: true },
    { label: 'Item4', type: 'radio' }
  ])
  tray.setToolTip('empower ur clipboard')
  tray.setContextMenu(contextMenu)
}

app.on('ready', bootstrap)

app.on('window-all-closed', () => {
  //app.quit()
})