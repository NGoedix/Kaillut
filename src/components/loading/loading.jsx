import React from 'react';

import styles from './styles.module.css';

const app = function Main() {
  return (
    <React.Fragment>
      <div className={styles.container}>
        <div className={styles.ring}></div>
      </div>
    </React.Fragment>
  )
}


export default app;