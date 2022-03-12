import React from 'react';

import Navbar from './navbar/Navbar';
import LeftAside from './leftAside/LeftAside';
import RightAside from './rightAside/RightAside';
/**
 * 
 * Revisar:
 * Color del botón
 * Tono de botón
 * Tono de botón al ser pulsado y hovereado
 * Posición del botón de Jugar y donde irá el logo
 * Distribución de botones
 * Fondo del main div
 *  
 */

const App = () => {
  return(
    <React.Fragment>
      <Navbar />
      <LeftAside />
      <RightAside />
    </React.Fragment>
  )
}

export default App;