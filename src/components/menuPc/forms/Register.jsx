/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useState } from 'react';
import { animated } from 'react-spring';

// Hooks
import { useAniRegister } from '../../../hooks/menu/forms/useAniForm';
import { useTextStudent, useTextTeacher, useDivStudent, useDivTeacher } from '../../../hooks/menu/forms/useAniSlider';

// Style
import styles from './styles.module.css';

// Icons
import Student from '../../Icons/Student';
import Teacher from '../../Icons/Teacher';
import OpenEye from '../../Icons/OpenEye';
import ClosedEye from '../../Icons/ClosedEye';

// API
import { createUser } from '../../../api/createUser';

const Form = ({menu, menuState, loginState, changeLogin, notification}) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  
  const [isTeacher, setRole] = useState(true);
  const [isPassword, setTypePassword] = useState(true);

  // Handlers
  const handleChangeMenu = () => changeLogin(5);
  const handleLostPassword = () => { notification('Una pena.'); }
  const handleChangeInputRole = ({target}) => setRole(!target.checked);
  const onRestHandler = () => {
    if (loginState === 4) changeLogin(1);
    if (loginState === 5) changeLogin(4);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    let email = emailRef.current.value;
    let password = passwordRef.current.value;

    let role = isTeacher ? 'teacher' : 'student';

    let response = await createUser({email, password, role});

    if (response === true) {
      // TODO redirect
      notification('Cuenta creada con éxito');
    } else {
      notification('Error: ' + response);
    }
  }

  // Hook Register
  const aniRegister = useAniRegister({menu, menuState, loginState, onRest: onRestHandler});

  // Hooks Slider
  const textStudent = useTextStudent({isTeacher});
  const textTeacher = useTextTeacher({isTeacher});
  const divStudent = useDivStudent({isTeacher});
  const divTeacher = useDivTeacher({isTeacher});

  function Eye() {
    return isPassword === false 
      ? <OpenEye onClick={() => setTypePassword(true)} className={styles.eye} />
      : <ClosedEye onClick={() => setTypePassword(false)} className={styles.eye} /> 
  }

  return (
    <animated.div style={aniRegister} className={styles.formRegisterContainer}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Registro</h1>
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
          <label htmlFor="password" className={styles.Labels}>Contraseña: </label>
          <label htmlFor="password">
            <input 
              id="password" 
              ref={passwordRef}
              type={ isPassword === true ? "password" : "text" } 
              className={styles.inputs} 
              name="password" 
              placeholder="***************"
              required={true}
            />
          <Eye />
          </label>
          <div className={styles.sliderParent}>
            <label className={styles.lastLabel}>Miembro: </label>
            <div className={styles.sliderContainer}>
              <label className={styles.switch} htmlFor="checkbox">
                <input type="checkbox" className={styles.sliderInput} onChange={handleChangeInputRole} id="checkbox" />
                <div className={styles.slider}></div>
                <animated.div style={divStudent} className={styles.sliderStudent}>
                  <Student />
                  <animated.label style={textStudent} htmlFor="checkbox" className={styles.pointer}>Estudiante</animated.label>
                </animated.div>
                <animated.div style={divTeacher} className={styles.sliderTeacher}>
                  <animated.label style={textTeacher} htmlFor="checkbox" className={styles.pointer}>Profesor</animated.label>
                  <Teacher />
                </animated.div>
              </label>
            </div>
          </div>
          <div className={styles.formLinkContainer}>
            <a 
              href="#" 
              className={styles.formLink} 
              onClick={handleChangeMenu}
            >
              ¿Tienes cuenta?
            </a>
            <a 
              href="#" 
              className={styles.formLink} 
              onClick={handleLostPassword}
            >
              ¿Olvidaste la contraseña?
            </a>
            <input type="submit" className={styles.submit} value="Registrarse" />
          </div>
        </form>
      </div>
    </animated.div>
  )
}

export default Form;