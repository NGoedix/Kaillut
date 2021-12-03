import React from 'react';

import '../../styles.css'

var loadedParticles = false;

const app = function Main() {
  componentDidMount('js/particles/mainParticles.js');
  return (
    <React.Fragment>
      <div id="particle-container"></div>
    </React.Fragment>
  )
}

function componentDidMount(url) {
  const script = document.createElement("script");
  script.src = url;
  script.async = true;
  document.body.appendChild(script);

  if(!loadedParticles) {
    setTimeout(() => {
      loadedParticles = true;
      componentDidMount('js/particles/configParticles.js');
    }, 50);
  }
}

export default app;