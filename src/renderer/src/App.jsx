import Versions from './components/Versions'
import Home from './components/Home'

function App() {
  const ipcHandle = () => window.electron.ipcRenderer.send('hello')
  const ipcHandle2 = () => window.electron.ipcRenderer.on('message-channel', (event, msg) => {
    console.log(msg)
  })

  ipcHandle2()

  return (
    <>
      <Home />
      <Versions />
    </>
  )
}

export default App
