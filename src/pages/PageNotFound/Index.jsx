import React from 'react';
import MediaQuery from 'react-responsive';

import Particles from '../../components/particles/particles';

import styles from './styles.module.css'

import Mapa from '../../Assets/Mapa.png'
import CabezaAvestruz from '../../Assets/CabezaAvestruz.png'
import CuerpoAvestruz from '../../Assets/CuerpoAvestruz.png'
import Mobile404 from '../../Assets/Mobile404.png'

export default function Main () {
  return (
    <React.Fragment>
      <Particles />
        <MediaQuery minWidth={1081}>
          <div className={styles.containerParent}>
            <div className={styles.container}>
              <h1 className={styles.pc404}>404</h1>
              <div className={styles.container2}>
                <img src={CuerpoAvestruz} className={styles.img} alt="Página no encontrada" />
                <p className={styles.text}>Lo sentimos, nos hemos perdido buscando la página.</p>
                <img src={CabezaAvestruz} className={styles.img2} alt="Página no encontrada" />
                <img src={Mapa} className={styles.img3} alt="Mapa" />
              </div>
            </div>
            <p className={styles.text2}>Página no encontrada</p>
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={1080}>
          <div className={styles.container}>
            <img src={Mobile404} className={styles.img4} alt="Página no encontrada" />
          </div>
        </MediaQuery>
      
    </React.Fragment>
  );
}