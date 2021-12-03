import React from 'react';

import Particles from '../../components/particles/particles';

import '../../styles.css'

const app = function Main() {
  return (
    <React.Fragment>
      <Particles />
      <div id="left" className="mainMenuLeftItem">
          <h2 id="leftTitle" className="mainMenuLeftTitle">INVITADO</h2>
          <span className="line"></span>
          <button id="registerButton" className="loginRegister">Login / Register</button>
      </div>
      <div onClick={animation} id="center" className="mainMenuCenterItem">
        <h1 className="mainMenuTitle">Kaillut</h1>
      </div>
    </React.Fragment>
  )
}

function animation() {
    document.getElementById('center').animate([
      { transform: 'rotate(360deg)' }
    ], 
      { duration: 750 });
    
    document.getElementById('left').animate([
      { width: 0, left: "80%" }
    ], { duration: 1000 });
  
    document.getElementById('leftTitle').animate([
      { opacity: 0 }
    ], { duration: 500 });
  
    document.getElementById('registerButton').animate([
      { opacity: 0 }
    ], { duration: 500 });
  
    setTimeout(() => {
      document.getElementById('leftTitle').classList.add('remove');
      document.getElementById('registerButton').classList.add('remove');
    }, 450);
  
    setTimeout(() => {
      document.getElementById('left').classList.add('remove');
    }, 950)
}

export default app;