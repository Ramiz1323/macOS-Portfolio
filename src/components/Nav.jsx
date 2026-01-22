import React from 'react'
import '../styles/Nav.scss'
import DateTime from '../components/DateTime.jsx'

const Nav = () => {
  return (
    <nav>
      <div className="left">
        <div className="apple"><img src="./nav-icons/apple.svg" alt="" /></div>
        <div className="item"><p>Sk Ramiz Raza</p></div>
        <div className="item"><p>File</p></div>
        <div className="item"><p>Window</p></div>
        <div className="item"><p>Terminal</p></div>
      </div>

      <div className="right">
        <div className="wifi"><img src="./nav-icons/wifi.svg" alt="" /></div>
        <div className="item"><DateTime /></div>
      </div>
    </nav>
  )
}

export default Nav
