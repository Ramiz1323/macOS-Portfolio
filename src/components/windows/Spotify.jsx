import React from 'react'
import MacWindow from './MacWindow'
import '../../styles/Spotify.scss'

const Spotify = ({windowName, setWindowState}) => {
  return (
    <MacWindow windowName={windowName} setWindowState={setWindowState} width='25vw' height='40vw' x='1150' y='120'>
        <div className="spotify-window">
      <iframe
        data-testid="embed-iframe"
        style={{ borderRadius: '12px' }}
        src="https://open.spotify.com/embed/playlist/6Dx4Hrd8RTKe0258CyExNk?utm_source=generator&theme=0"
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
        </div>
    </MacWindow>
  )
}

export default Spotify
