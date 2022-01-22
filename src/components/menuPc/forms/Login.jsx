/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef } from "react";
import { animated } from "react-spring";

import { useAniLogin } from '../../../hooks/menu/forms/useAniForm'

import styles from './styles.module.css'

const Form = ({menu, menuState, loginState, changeLogin, notification}) => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const onRestHandler = () => {
    if (loginState === 3) changeLogin(6);
    if (loginState === 2) changeLogin(3);
  };

  const aniLogin = useAniLogin({ menu, menuState, loginState, onRest: onRestHandler });

  function handleChangeMenu () { changeLogin(2); }

  const handleSubmit = async (event) => {
    event.preventDefault();
  }

  return (
    <animated.div style={aniLogin} className={styles.formLoginContainer}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Iniciar sesión</h1>
      </div>
      <div className={styles.formContainer}>
        <form
          method="post" 
          onSubmit={handleSubmit}
        >
          <label htmlFor="email" className={styles.firstLabel}>Correo: </label>
          <input
            id="email"
            ref={emailRef}
            type="email"
            name="email"
            className={styles.inputs}
            placeholder="email@dominio.com"
            required={true}
          />
          <br />
          <label htmlFor="password" className={styles.Labels}>Contraseña: </label>
          <input
            id="password"
            ref={passwordRef}
            type="password"
            name="password"
            className={styles.inputs}
            placeholder="***************"
            required={true}
          />
          <div className={styles.formLinkContainer}>
            <a
              href="#"
              className={styles.formLink}
              onClick={handleChangeMenu}
            >
              ¿No tienes cuenta?
            </a>
            <input type="submit" className={styles.submit} value="Iniciar sesión" />
          </div>
        </form>
      </div>
    </animated.div>
  );
};

export default Form;