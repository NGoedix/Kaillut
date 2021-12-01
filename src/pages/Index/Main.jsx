import React, { /*useState*/ } from 'react'

import '../../styles.css'

export function Main() {
  //const [] = useState();
  return (
    <React.Fragment>
      <div id="left" className="mainMenuLeftItem">
          <h2 id="leftTitle" className="mainMenuLeftTitle">INVITADO</h2>
          <span className="line"></span>
      </div>
      <div onClick={showUser} id="center" className="mainMenuCenterItem">
        <h1 className="mainMenuTitle">Kaillut</h1>
      </div>
    </React.Fragment>
  )
}


function showUser() {
  document.getElementById('center').animate([
    { transform: 'rotate(360deg)' }
  ], 
    { duration: 750 });
  
  document.getElementById('left').animate([
    { width: 0, left: "80%" }
  ], { duration: 1000 });

  document.getElementById('leftTitle').animate([
    { opacity: 0 }
  ], { duration: 500 });

  setTimeout(function(){
    document.getElementById('leftTitle').classList.add('remove');
    setTimeout(function() {
      document.getElementById('left').classList.add('remove');
    }, 500)
  }, 500);
}
