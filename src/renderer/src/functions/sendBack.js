const sendBack = () => {
  setInterval(() => {
    window.electron.ipcRenderer.send('hello')
  }, 1000)
}

export default sendBack
