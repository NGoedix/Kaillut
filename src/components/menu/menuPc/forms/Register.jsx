/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { animated } from 'react-spring';
import ReCAPTCHA from "react-google-recaptcha";

// Hooks
import { useAniRegister } from '../../../../hooks/menu/forms/useAniForm';
import { useTextStudent, useTextTeacher, useDivStudent, useDivTeacher } from '../../../../hooks/menu/forms/useAniSlider';

// Style
import styles from './styles.module.css';

// Icons
import Student from '../../../Icons/Student';
import Teacher from '../../../Icons/Teacher';
import OpenEye from '../../../Icons/OpenEye';
import ClosedEye from '../../../Icons/ClosedEye';

// API
import { createUser } from '../../../../services/account/createUser';

const Form = ({menu, menuState, loginState, changeLogin, notification}) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const recaptchaRef = useRef(null);

  const navigate = useNavigate();
  
  const [isTeacher, setRole] = useState(false);
  const [isPassword, setTypePassword] = useState(true);

  // Handlers
  const handleChangeMenu = () => changeLogin(5);
  const handleChangeInputRole = ({target}) => setRole(!target.checked);
  const onRestHandler = () => {
    if (loginState === 4) changeLogin(1);
    if (loginState === 5) changeLogin(4);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const captchaToken = await recaptchaRef.current.executeAsync();
    recaptchaRef.current.reset();

    let email = emailRef.current.value;
    let password = passwordRef.current.value;

    let role = isTeacher ? 'teacher' : 'student';

    let res = await createUser({email, password, role, captchaToken});

    if (res.success) {
      window.localStorage.setItem(
        'user_token', res.user.token
      );
      navigate('/dashboard')
    } else {
      return notification(res);
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
                <input type="checkbox" checked={!isTeacher} className={styles.sliderInput} onChange={handleChangeInputRole} id="checkbox" />
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
              ¿Ya tienes una cuenta?
            </a>
            <input type="submit" className={styles.submitRegister} value="Registrarse" />
          </div>
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={"6LcWOfEeAAAAAMNfy7JDVwTrsDe9jiDXMgd-VJlA"}
            size="invisible"
            theme="dark"
            className={styles.invisible}
          />
        </form>
      </div>
    </animated.div>
  )
}

export default Form;