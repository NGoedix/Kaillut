import React from "react";

import styles from './styles.module.css'

const App = () => {
  return (
    <React.Fragment>
      <aside className={styles.aside}>
        <div className={styles.logo}>
          <img src="" alt="" />
          <button className={styles.playButton}>JUGAR</button>
        </div>
        <div className={styles.buttons}>
          <button className={styles.normalBtn}>Biblioteca</button>
          <button className={styles.normalBtn}>Contactos</button>
          <button className={styles.normalBtn}>Historial</button>
          <button className={styles.normalBtn}>Logros</button>
          <button className={styles.configBtn}>Configuración</button>
        </div>
      </aside>
    </React.Fragment>
  )
}

export default App;