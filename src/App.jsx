import React, { useState } from "react"
import './app.scss'
import Dock from './components/Dock.jsx'
import Nav from './components/Nav.jsx'
import Github from './components/windows/Github.jsx'
import Note from './components/windows/Note.jsx'
import Resume from './components/windows/Resume.jsx'
import Spotify from "./components/windows/Spotify.jsx"
import Cli from "./components/windows/Cli.jsx"

function App() {

  const [windowState, setWindowState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false
  })

  return (
    <main>
      <Nav />
      <Dock windowState={windowState} setWindowState={setWindowState} />
      {windowState.github && <Github windowName='github'  setWindowState={setWindowState} />}
      {windowState.note && <Note windowName='note'  setWindowState={setWindowState} />}
      {windowState.resume && <Resume windowName='resume'  setWindowState={setWindowState} />}
      {windowState.spotify && <Spotify windowName='spotify'  setWindowState={setWindowState} />}
      {windowState.cli && <Cli windowName='cli' setWindowState={setWindowState} />}
    </main>
  )
}

export default App
