const clipboard = require('electron-clipboard-extended')
const electron = require('electron')
const { app, BrowserWindow, globalShortcut, Menu, Tray } = electron
//const store = require('clipstore/store')

function bootstrap() {
  clipboard.on('text-changed', () => {
    let currentText = clipboard.readText('clipboard')
    console.log(currentText)
  })
  .on('image-changed', () => {
    let currentIMage = clipboard.readImage()
    console.log(currentIMage.getSize())
  })
  .startWatching()

  globalShortcut.register('Cmd+Ctrl+Alt+Shift+`', () => {
    let {x, y} = electron.screen.getCursorScreenPoint()
    let win = new BrowserWindow({
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
  })

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