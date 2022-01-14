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

const Form = ({menu, menuState, loginState, changeLogin, formError}) => {
  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  
  const [isStudent, setRole] = useState(true);
  const [isPassword, setTypePassword] = useState(true);

  // Handlers
  const handleChangeMenu = () => { changeLogin(5); }
  const handleChangeInputRole = ({target}) => { setRole(!target.checked); }
  const onRestHandler = () => {
    if (loginState === 4) changeLogin(1);
    if (loginState === 5) changeLogin(4);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    let email = emailRef.current.value;
    let username = usernameRef.current.value;
    let password = passwordRef.current.value;
    // Change to true and rename to isTeacher
    let role = isStudent === false ? 'student' : 'teacher';
    // Check when data repeated

    let response = await createUser({email, username, password, role});

    if (response === true) {
      // TODO redirect
      formError('Cuenta creada con éxito');
    } else {
      formError('Error: ' + response);
    }
  }

  // Hook Register
  const aniRegister = useAniRegister({menu, menuState, loginState, onRest: onRestHandler});

  // Hooks Slider
  const textStudent = useTextStudent({isStudent});
  const textTeacher = useTextTeacher({isStudent});
  const divStudent = useDivStudent({isStudent});
  const divTeacher = useDivTeacher({isStudent});

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
          />
          <label htmlFor="username" className={styles.Labels}>Usuario: </label>
          <input 
            type="text"
            ref={usernameRef}
            name="username"
            id="username"
            className={styles.inputs}
            placeholder="Nombre de usuario"
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
              onClick={handleChangeMenu}
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