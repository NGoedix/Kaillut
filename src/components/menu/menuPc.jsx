// React
import React, { useState, useRef } from 'react';
import { useSpring, animated } from 'react-spring';

// Particles
import Particles from '../../components/particles/particles';

import MessageHub from '../notifications/MessageHub';

// API
//import { createUser } from '../../api/createUser';
import { checkGame } from '../../api/checkGame';

const axios = require('axios');

// TODO separar los hooks de las animaciones
//import { MenuHook } from '../../hooks/playAnimation'

const app = function Main() {

  const [pinCode, setPinCode] = useState('');
  const ref = useRef(null);

  const handlePinChange = ({ target }) => {
    setPinCode(target.value)
  }

  function checkPin() {
    if ((/[a-zA-Z\d]{6,8}/.test(pinCode)) && checkGame(pinCode)) return true; //TODO conectar con la API - donde está true
    
    ref.current('El código no es válido.')
    return false;
  }

  /**
   * 0: Menu principal
   * 1: Registro
   * 2: Login
   * 3: Jugar como invitado
  **/
  const [menu, setMenu] = useState(0);

  /**
   * 0: Nada
   * 1: Parpadeo
   * 2: Movimiento a la izquierda
   * 3: Se agranda el div del user
  **/
  const [menuState, setMenuState] = useState(0);

  const aniRD = useSpring({
    to: { 
      width: menu === 3 ? '0' : '325px',
      opacity: menu === 3 && menuState >= 2 ? 0 : 1
    },
    config: { duration: menuState >= 2 ? 0 : 800 }
  })

  const aniRL = useSpring({
    to: { margin: menu === 3 ? "20px 0 0 0" : '20px 0 0 140px'},
    config: { duration: 500 }
  })

  const aniCD = useSpring({
    to: { 
      transform: menu === 3 ? 'rotate(360deg)' : 'rotate(0deg)',
      left: menu === 3 && menuState >= 2 ? '35%' : '50%'
    },
    config: { duration: 800 },
    onRest: () => { 
      if (menu === 3 && menuState < 2) setMenuState(2);
    }
  })

  const aniPB = useSpring({
    to: { opacity: menu === 3 && menuState < 1 ? 0 : 1 },
    config: { duration: 500 },
    onRest: () => { if(menu === 3 && menuState < 1) setMenuState(1) } // TODO que cambie la acción al pulsar
  })

  const aniLD = useSpring({
    to: { 
      width: menu === 3 ? '0' : '325px',
      left: menu === 3 ? '80%' : '50%',
      opacity: menu === 3 && menuState >= 2 ? 0 : 1
    },
    config: { duration: menuState >= 2 ? 0 : 1100 }
  })

  const aniLE = useSpring({
    to: { opacity: menu === 3 ? 0 : 1 },
    config: { duration: 500 }
  })

  const aniRT = useSpring({
    to: {
      opacity: menu === 3 ? 0 : 1,
      margin: menu === 3 ? '15px 0 0 0' : '15px 0 0 180px'
    },
    config: { duration: 500 }
  })

  const aniRI = useSpring({
    to: {
      opacity: menu === 3 ? 0 : 1,
      margin: menu === 3 ? '15px 0 0 0' : '15px 0 0 142.5px'
    },
    config: { duration: 350 }
  })

  const aniLDI = useSpring({
    to: {
      display: menu === 3 && menuState >= 2 ? 'block' : 'none',
      width: menu === 3 && menuState >= 3 ? '325px' : '0',
      left: menu === 3 && menuState >=3 ? '40%' : '30%'
    },
    config: { duration: menu === 3 && menuState >= 3 ? 500 : 0 },
    delay: menu === 3 && menuState >= 3 ? 0 : 1000,
    onRest: () => { setMenuState(3) }
  })

  const aniLDIT = useSpring({
    to: { margin: menu === 3 && menuState >= 3 ? '10px 0 0 80px' : '10px 0 0 -30px' },
    config: { duration: 600 }
  })

  const aniLDII = useSpring({
    to: { 
      width: menu === 3 && menuState >= 3 ? '200px' : '0',
      margin: menu === 3 && menuState >= 3 ? '15px 0 0 85px' : '15px 0 0 45px'
    },
    config: { duration: 500}
  })

  return (
    <React.Fragment>
      <Particles />
      <div>
        <animated.div style={aniLD} className="mainMenuLeftItem">
          <animated.h2 style={aniLE} className="mainMenuLeftTitle">INVITADO</animated.h2>
          <span className="lineLeft"></span>
          <animated.button style={aniLE} className="loginRegister">Login / Register</animated.button>
        </animated.div>
        <animated.div style={aniCD} className="mainMenuCenterItem">
          <h1 className="mainMenuTitle">Kaillut</h1>
          <animated.button style={aniPB} className="mainMenuPlayButton" onClick={() => { if(checkPin()) setMenu(3) }}>{menu == 0 ? 'JUGAR' : 'VOLVER'}</animated.button>
        </animated.div>
        <animated.div style={aniRD} className="mainMenuRightItem">
          <animated.h2 style={aniRT} className="mainMenuRightTitle">JUGAR</animated.h2>
          <animated.span style={aniRL} className="lineRight"></animated.span>
          <animated.input style={aniRI} onChange={handlePinChange} className="pinInput" name="pinCode" type="text" placeholder="PIN de juego" minLength="6" maxLength="8" />
        </animated.div>
        <animated.div style={aniLDI} className="mainMenuSelectUser">
          <animated.h2 style={aniLDIT} className="mainMenuSelectUserTitle" >Nombre de usuario</animated.h2>
          <span className="lineRightSelectUser"></span>
          <animated.input style={aniLDII} type="text" name="username" placeholder="Nombre de usuario" maxLength="16" className="mainMenuSelectUserInput" />
        </animated.div>
      </div>
      <MessageHub children={add => (ref.current = add)} />
    </React.Fragment>
  )
}

export default app;