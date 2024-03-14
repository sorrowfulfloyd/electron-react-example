const { app, ipcMain } = require('electron')

const timer = () => setInterval(() => {
  ipcMain.send('message-channel', 'hello')
}, 1000)

module.exports = timer
