// React
import React, { useState, useRef } from 'react';
import { animated } from 'react-spring';

// Components
import Particles from '../particles/particles';
import MessageHub from '../notifications/MessageHub';
import Login from './forms/Login';
import Register from './forms/Register'

// API
//import { createUser } from '../../api/createUser';
import { checkRoom } from '../../api/checkRoom';

// Styles
import styles from './styles.module.css'

// Hooks
import { useAniRD, useAniRL, useAniCD, useAniPB, useAniLD, useAniLE,
   useAniRT, useAniRI, useAniLDI, useAniLDIT, useAniLDIL, useAniLDII, useAniT } from '../../hooks/menu/useAniMenu'

const app = function Main() {
  const [pinCode, setPinCode] = useState('');
  const ref = useRef(null);

  const notification = (msg) => ref.current(msg);

  // Handlers
  const handlePinChange = ({ target }) => { setPinCode(target.value); }

  const handlePlay = async () => {
    if (menu === 1) {
      let check = await handleCheckPin(); 
      if(check === true) setMenu(3); 
    } else if (menu === 3) {
      setMenuState(4);
    } else if (menu === 2) {
      setMenu(1);
      setMenuState(0);
    }
  }

  const handleCheckPin = async () => {
    if (/[a-zA-Z\d]{6,8}/.test(pinCode)) {
      let check = await checkRoom(pinCode);
      if (check === true) {
        return true;
      } else {
        ref.current(check);
        return false;
      }
    } else {
      ref.current('El código no tiene un formato válido.');
      return false;
    }
  }

  const handleRestAniCD = () => {
    if (menu === 3 && menuState < 2) setMenuState(2);
    if (menu === 3 && menuState === 5) {
      setMenu(1);
      setMenuState(0);
    }
    if (menu === 2) setMenuState(1);
  }

  const handleRestAniPB = () => { if (menu === 3 && menuState === 0) setMenuState(1) }

  const handleRestAniLDI = () => {
    if (menu === 3 && menuState === 2) setMenuState(3);
    if (menu === 3 && menuState === 4) setMenuState(5);
  }

  /**
   * 1: Menu principal
   * 2: Login / Register
   * 3: Jugar como invitado
  **/
  const [menu, setMenu] = useState(1);

  /**
   * CAMBIO DE MODO MENU 1 -> 3
   * 0: Nada
   * 1: Giro parpadeo y se recoge
   * 2: Movimiento a la izquierda
   * 3: Se agranda el div del user
   * CAMBIO DE MODO MENU 3 -> 1
   * 4: Giro del center div con reduccion del div
   * 5: Se posiciona en el medio
   * 
   * CAMBIO DE MODO MENU 1 -> 2
   * 0: Nada
   * 1: Giro parpadeo y se recoge
  **/
  const [menuState, setMenuState] = useState(0);

  /**
   * 1: Login
   * 2: Login -> Registro | Login -> Display: block, Opacidad 0 | Registro -> Display: block && Opacidad 100
   * 3: Login -> Registro | Login -> Display: none, Opacidad 0 | Registro -> Display: block && Opacidad 100
   * 
   * 4: Login <- Registro | Login -> Display: block && Opacidad 100 | Registro -> Display: none, Opacidad 0
   * 5: Login <- Registro | Login -> Display: block && Opacidad 100 | Registro -> Display: block, Opacidad 0
   * 6: Registro
  **/
  const [loginState, setLogin] = useState(1);

  function changeLogin(state) { setLogin(state); }

  // Animations
  const aniRD = useAniRD({menu, menuState})
  const aniRL = useAniRL({menu})
  const aniCD = useAniCD({menu, menuState, onRest: handleRestAniCD})
  const aniPB = useAniPB({menu, menuState, onRest: handleRestAniPB})
  const aniLD = useAniLD({menu, menuState})
  const aniLE = useAniLE({menu})
  const aniRT = useAniRT({menu})
  const aniRI = useAniRI({menu})
  const aniLDI = useAniLDI({menu, menuState, onRest: handleRestAniLDI})
  const aniLDIT = useAniLDIT({menu, menuState})
  const aniLDIL = useAniLDIL({menu, menuState})
  const aniLDII = useAniLDII({menu, menuState})
  const aniT = useAniT({menu, menuState})

  return (
    <React.Fragment>
      <Particles />
      <div>
        <animated.div style={aniLD} className={styles.leftContainer}>
          <animated.h2 style={aniLE} className={styles.leftTitle}>INVITADO</animated.h2>
          <span className={styles.leftLine}></span>
          <animated.button style={aniLE} className={styles.sessionBtn} onClick={
            () => {
              if (menu === 1) setMenu(2);
            }}
          >
            Inicio / Registro
          </animated.button>
        </animated.div>
        <animated.div style={aniCD} className={styles.centerContainer}>
          <animated.h1 style={aniT} className={styles.title}>Kaillut</animated.h1>
          <animated.button style={aniPB} className={styles.playButton} onClick={handlePlay}>
            {menu === 1 ? 'JUGAR' : 'VOLVER'}
          </animated.button>
        </animated.div>
        <animated.div style={aniRD} className={styles.rightContainer}>
          <animated.h2 style={aniRT} className={styles.rightTitle}>JUGAR</animated.h2>
          <animated.span style={aniRL} className={styles.rightLine}></animated.span>
          <animated.input style={aniRI} onChange={handlePinChange} className={styles.pinInput} name="pinCode" type="text" placeholder="PIN de juego" minLength="6" maxLength="8" />
        </animated.div>
        <animated.div style={aniLDI} className={styles.invitadoContainer}>
          <animated.h2 style={aniLDIT} className={styles.invitadoTitle} >Nombre de usuario</animated.h2>
          <animated.span style={aniLDIL} className={styles.invitadoRightLine}></animated.span>
          <animated.input style={aniLDII} type="text" name="username" placeholder="Nombre de usuario" maxLength="16" className={styles.userInput} />
        </animated.div>
        <Login menu={menu} notification={notification} loginState={loginState} menuState={menuState} changeLogin={changeLogin} />
        <Register  menu={menu} notification={notification} loginState={loginState} menuState={menuState} changeLogin={changeLogin} />
      </div>
      <MessageHub children={add => (ref.current = add)} />
    </React.Fragment>
  )
}

export default app;