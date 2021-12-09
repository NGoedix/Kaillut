import React from 'react';

import Particles from '../../components/particles/particles';
import { makeAnimation } from '../../js/makeAnimation';

import '../../styles.css'

const app = function Main() {
  return (
    <React.Fragment>
      <Particles />
      <div>
        <div id="left" className="mainMenuLeftItem">
            <h2 id="leftTitle" className="mainMenuLeftTitle">INVITADO</h2>
            <span className="lineLeft"></span>
            <button id="registerButton" className="loginRegister">Login / Register</button>
        </div>
        <div id="center" className="mainMenuCenterItem">
          <h1 id="mainMenuTitle" className="mainMenuTitle">Kaillut</h1>
          <button onClick={mainAnimation} id="playButton" className="mainMenuPlayButton">JUGAR</button>
        </div>
        <div id="play" className="mainMenuRightItem">
          <h2 id="rightTitle" className="mainMenuRightTitle">JUGAR</h2>
          <span id="lineRight" className="lineRight"></span>
          <input id="pinGame" className="pinInput" name="pinCode" type="text" placeholder="PIN de juego" maxLength="6" />
        </div>
        <div id="selectUser" className="mainMenuSelectUser hidden">
          <h2 id="mainMenuSelectUserTitle" className="mainMenuSelectUserTitle" >Nombre de usuario</h2>
          <span id="lineRight" className="lineRightSelectUser"></span>
          <input type="text" name="username" placeholder="Nombre de usuario" id="usernameSelect" maxLength="16" className="mainMenuSelectUserInput" />
        </div>
      </div>
    </React.Fragment>
  )
}

function mainAnimation() {
  // TODO Falta checkear si existe esa sala.
  var playButton = document.getElementById("playButton");
  var backButtonFromGame = document.getElementById("backButtonFromGame");
  if (playButton) {
    makeAnimation('playButton', { opacity: 0 }, 500, true);
    setTimeout(() => {
      playButton.id = "backButtonFromGame";
      playButton.innerHTML = "Volver";
      makeAnimation('backButtonFromGame', { opacity: 1 }, 500, false, 'opacity', 'remove')
      setTimeout(() => {
        makeAnimation('center', { transform: 'rotate(360deg)' }, 750);
        makeAnimation('left', { width: 0, left: "80%" }, 1000, true);
        makeAnimation('leftTitle', { opacity: 0 }, 500, true);
        makeAnimation('registerButton', { opacity: 0 }, 500, true);
        makeAnimation('play', { width: 0 }, 800, true);
        makeAnimation('lineRight', { margin: "20px 0 0 0" }, 500, true);
        makeAnimation('rightTitle', { margin: "15px 0 0 0" }, 500, true);
        makeAnimation('pinGame', { opacity: 0, margin: "15px 0 0 0" }, 350, true);
        setTimeout(() => {
          makeAnimation('center', { left: "35%" }, 500, false, 'left35');
          setTimeout(() => {
            var selectUserDiv = document.getElementById('selectUser');
            selectUserDiv.classList.remove('hidden');
            makeAnimation('selectUser', { width: "325px", display: "block", left: "40%" }, 1000, false, 'width325');
            makeAnimation('mainMenuSelectUserTitle', { margin: "10px 0 0 80px" }, 500, false, 'marginUserTitle')
            makeAnimation('usernameSelect', { width: "200px", margin: "15px 0 0 85px" }, 1050, false, 'mainMenuSelectUserInputAnimated');
          }, 600)
        }, 1000);
      }, 600);
    }, 600);
  }

  if (backButtonFromGame) {
    makeAnimation('selectUser', { width: "0px", display: "none", left: "30%" }, 1000, false, false, 'width325');
    makeAnimation('mainMenuSelectUserTitle', { margin: "10px 0 0 80px" }, 500, false, false, 'marginUserTitle')
    makeAnimation('usernameSelect', { width: "0px", margin: "15px 0 0 85px" }, 800, false, false, 'mainMenuSelectUserInputAnimated');
  }
}

export default app;