import React from 'react';

import styles from './styles.module.css';

const App = ({profilePic, username, lastMessage, lastDay, lastHour}) => {
  return (
    <React.Fragment>
      <div className={styles.container}>
        <img className={styles.profilePicture} src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt="" />
        <div className={styles.profileData}>
          <h1 className={styles.profileName}>{username}</h1>
          <p className={styles.lastMsg}>{lastMessage}</p>
        </div>
        <div className={styles.timeContainer}>
          <span>{lastDay}20/02/2021</span>
          <br />
          <span className={styles.hour}>{lastHour}23:20</span>
        </div>
      </div>
    </React.Fragment>
  )
}

export default App;