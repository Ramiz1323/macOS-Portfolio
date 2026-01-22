import React from "react";
import "../../styles/MacWindow.scss";
import { Rnd } from "react-rnd";

const MacWindow = ({ children, width="30vw", height="30vw", x=100, y=50,windowName, setWindowState}) => {
  return (
    <Rnd
      default={{
        width: width,
        height: height,
        x: x,
        y: y,
      }}
    >
      <div className="window">
        <div className="title-bar">
          <div className="dots">
            <div onClick={()=> setWindowState(state => ({...state, [windowName]:false }))} className="dot red"></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>
          <div className="title">skramizraza - zsh</div>
        </div>

        <div className="window-content">{children}</div>
      </div>
    </Rnd>
  );
};

export default MacWindow;
