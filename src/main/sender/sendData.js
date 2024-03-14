let count = 0

const timer = (mainWindow) => setInterval(() => {
  console.log('sending data ' + count)
  mainWindow.send('message-channel', `hello ${count}`)
  count++
}, 1000)

export default timer
