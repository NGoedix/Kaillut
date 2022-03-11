import React from 'react';

import Contact from './contact/Contact'

import styles from './styles.module.css';

const App = () => {
  return (
    <React.Fragment>
      <aside className={styles.aside}>
        <header className={styles.header}>
          <h1 className={styles.headerTitle}>Contactos</h1>
        </header>
        <main className={styles.main}>
          <Contact username={"Enrique"} lastMessage={"Que tal cerdo"} />
          <Contact username={"Diego"} lastMessage={"Tú: Tariv"} />
          <Contact username={"Alberto"} lastMessage={"Kaillut"} />
          <Contact username={"Pablo Raúl"} lastMessage={"Soy gay."} />
          <Contact username={"Enrique jr don enrique"} lastMessage={"Que tal cerdo"} />
          <Contact username={"Enrique jr don enrique"} lastMessage={"Que tal cerdo"} />
          <Contact username={"Enrique jr don enrique"} lastMessage={"Que tal cerdo"} />
          <Contact username={"Enrique jr don enrique"} lastMessage={"Que tal cerdo"} />
          <Contact username={"Enrique jr don enrique"} lastMessage={"Que tal cerdo"} />
          <Contact username={"Enrique jr don enrique"} lastMessage={"Que tal cerdo"} />
          <Contact username={"Enrique jr don enrique"} lastMessage={"Que tal cerdo"} />
        </main>
      </aside>
    </React.Fragment>
  )
}

export default App;