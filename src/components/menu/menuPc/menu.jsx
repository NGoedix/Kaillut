// React
import React, { useState, useRef, useEffect } from 'react';
import { animated } from 'react-spring';
import { useLocation, useNavigate } from 'react-router-dom';

// Components
import Particles from '../../particles/particles';
import MessageHub from '../../notifications/MessageHub';
import Login from './forms/Login';
import Register from './forms/Register'
import Loading from '../../loading/loading'

import Student from '../../Icons/Student';

// API
import { checkRoom } from '../../../services/checkRoom';
import { checkToken } from "../../../services/account/checkToken";
import { getProfileInfo } from '../../../services/account/getProfileInfo';

// Styles
import styles from './styles.module.css'

// Hooks
import { useAniRD, useAniRL, useAniCD, useAniPB, useAniLD, useAniLE,
   useAniRT, useAniRI, useAniLDI, useAniLDIT, useAniLDIL, useAniLDII, useAniT,
   useAniCDLogged, useAniRDLogged } from '../../../hooks/menu/useAniMenu'

const app = function Main() {
  const [pinCode, setPinCode] = useState('');
  const [logged, setLogged] = useState(false);
  const [isValidated, setValided] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [level, setLevel] = useState(1);

  const ref = useRef(null);

  const navigate = useNavigate();
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
  const aniRDLogged = useAniRDLogged({menu, menuState})
  const aniRL = useAniRL({menu})
  const aniCD = useAniCD({menu, menuState, onRest: handleRestAniCD})
  const aniCDLogged = useAniCDLogged({menu, menuState, onRest: handleRestAniCD})
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
  
  let { state } = useLocation();

  useEffect(() => {

    if (state === 302) notification('Debes iniciar sesión para acceder a ese recurso.')

    async function isLogged() {

      if (window.localStorage.getItem('user_token') != null) {
        let token = await checkToken(window.localStorage.getItem('user_token'));
        
        if (token.success) {
          let res = await getProfileInfo();
          if (res.success) {
            setUsername(res.user.username);
            setEmail(res.user.email);
            setLevel(res.user.level);
            setLogged(true);
          } else {
            notification(res.error)
          }
        }
        token.success ? setLogged(true) : window.localStorage.removeItem('user_token');
      }
      setValided(true);
    }
    isLogged();
    
    if (logged) {
      setTimeout(() => {
        setLoading(false);
      }, 5)
    }
  }, []);

  const logoutButton = () => {
    if (logged && isValidated) {
      return (
        <button 
          className={styles.logoutButton}
          onClick={
            () => {
              window.localStorage.removeItem('user_token');
              window.location.reload(false);
            }
          }
        >
          Cerrar sesión
        </button>
      )
    }
  }

  const LoadingComponent = () => {
    return (
      <Loading />
    )
  }

  const MenuComponent = () => {
    return (
      <div>
        <Particles />
        {
          logged && isValidated
          ? 
          <div className={styles.userProfileContainer}>
            <img className={styles.profilePicture} src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt="Foto de perfil" />
            <div className={styles.profileDatos}>
              <p className={styles.profileUserName}>{ username === null ? email === null ? 'Usuario' : email : username}</p>
              <Student styleName={styles.studentIcon} />
              <span className={styles.level}>{level}</span>
            </div>
            <button 
              className={styles.dashboardButton}
              onClick={
                () => {
                  navigate('/dashboard')
                }
              }
            >
              Panel de control
            </button>
          </div>
          :
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
        }
        
        <animated.div style={logged && isValidated ? aniCDLogged : aniCD} className={logged && isValidated ? styles.centerContainerLogged : styles.centerContainer}>
          <animated.h1 style={aniT} className={styles.title}>Kaillut</animated.h1>
          <animated.button style={aniPB} className={styles.playButton} onClick={handlePlay}>
            {menu === 1 ? 'JUGAR' : 'VOLVER'}
          </animated.button>
        </animated.div>
        <animated.div style={logged && isValidated ? aniRDLogged : aniRD} className={styles.rightContainer}>
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
        {logoutButton()}
      </div>
    )
  }
  
  return (
    <React.Fragment>
      <MessageHub children={add => (ref.current = add)} />
      {
      isLoading && !isValidated
        ? LoadingComponent()
        : MenuComponent()
      }
    </React.Fragment>
  )
}

export default app;