import { useSpring } from "react-spring";

// Right DIV
export function useAniRD({ menu, menuState }) {
  const aniRD = useSpring({
    to: { 
        left: '50%',
        width: menu === 3 || menu === 2 ? '0' : '325px',
        opacity: (menu === 3 && (menuState >= 2 && menuState <= 5)) || menu === 2 ? 0 : 1
    },
    config: { duration: (menuState >= 2 && menuState <= 5) ? 0 : 950 }
  })
  return aniRD;
}

// Right DIV Logged
export function useAniRDLogged({ menu, menuState }) {
  const aniRD = useSpring({
    to: { 
        left: '40%',
        width: menu === 3 || menu === 2 ? '0' : '325px',
        opacity: (menu === 3 && (menuState >= 2 && menuState <= 5)) || menu === 2 ? 0 : 1
    },
    config: { duration: (menuState >= 2 && menuState <= 5) ? 0 : 950 }
  })
  return aniRD;
}

// Right Line
export function useAniRL({menu}) {
  const aniRL = useSpring({
    to: { 
      margin: menu === 3 || menu === 2 ? "20px 0 0 0" : '20px 0 0 140px',
      width: menu === 3 || menu === 2 ? '0%' : '50%'
    },
    config: { duration: menu === 3 ? 500 : 700 }
  })
  return aniRL;
}

// Center DIV
export function useAniCD({menu, menuState, onRest}){
  const aniCD = useSpring({
    to: { 
      transform: (menu === 3 && menuState <= 3) || menu === 2 ? 'rotate(360deg)' : 'rotate(0deg)',
      left: menu === 3 && (menuState >= 2 && menuState <= 4) ? '40%' : menu === 2 && menuState === 1 ? '30%' : '50%',
      top: menu === 2 && menuState === 1 ? '30%' : '50%',
      width: menu === 2 && menuState === 1 ? '200px' : '250px',
      height: menu === 2 && menuState === 1 ? '200px' : '250px'
    },
    config: { duration: 800 },
    onRest,
  })
  return aniCD;
}

// Center DIV Logged
export function useAniCDLogged({menu, menuState, onRest}){
  const aniCD = useSpring({
    to: { 
      transform: (menu === 3 && menuState <= 3) || menu === 2 ? 'rotate(360deg)' : 'rotate(0deg)',
      left: menu === 3 && (menuState >= 2 && menuState <= 4) ? '40%' : menu === 2 && menuState === 1 ? '30%' : '40%',
      top: menu === 2 && menuState === 1 ? '30%' : '50%',
      width: menu === 2 && menuState === 1 ? '200px' : '250px',
      height: menu === 2 && menuState === 1 ? '200px' : '250px'
    },
    config: { duration: 800 },
    onRest,
  })
  return aniCD;
}


// Play Button
export function useAniPB({menu, menuState, onRest}) {
  const aniPB = useSpring({
    to: { 
      opacity: menu === 3 && menuState === 0 ? 0 : 1,
      margin: menu === 2 && menuState === 1 ? '15px 0 0 40px' : '25px 0 0 60px' 
    },
    config: { duration: menu === 2 && menuState === 1 ? 800 : 500 },
    onRest,
  })
  return aniPB;
}

// Left DIV
export function useAniLD({menu, menuState}) {
  const aniLD = useSpring({
      to: { 
        width: menu === 3 || menu === 2 ? '0' : '325px',
        left: menu === 3 || menu === 2 ? '70%' : '50%',
        opacity: (menu === 3 && (menuState >= 2 && menuState <= 5)) || menu === 2 ? 0 : 1
      },
      config: { duration: (menuState >= 2 && menuState <= 5) ? 0 : 950 }
  })
  return aniLD;
}

// Left Title
export function useAniLE({menu}) {
  const aniLE = useSpring({
    to: { opacity: menu === 3 || menu === 2 ? 0 : 1 },
    config: { duration: 500 }
  })
  return aniLE;
}

// Right Title
export function useAniRT({menu}) {
  const aniRT = useSpring({
    to: {
      opacity: menu === 3 || menu === 2 ? 0 : 1,
      margin: menu === 3 || menu === 2 ? '15px 0 0 0' : '15px 0 0 180px'
    },
    config: { duration: 500 }
  })
  return aniRT;
}

// Right Input
export function useAniRI({menu}) {
  const aniRI = useSpring({
    to: {
      opacity: menu === 3 || menu === 2 ? 0 : 1,
      margin: menu === 3 || menu === 2 ? '15px 0 0 0' : '15px 0 0 142.5px',
      width: menu === 3 || menu === 2 ? '0px' : '150px'
    },
    config: { duration: 800 }
  })
  return aniRI;
}

// Left DIV Invitado
export function useAniLDI({menu, menuState, onRest}) {
  const aniLDI = useSpring({
    to: {
      display: menu === 3 && (menuState >= 2 && menuState <= 4) ? 'block' : 'none',
      width: menu === 3 && menuState === 3 ? '325px' : '0',
      left: '45%'
    },
    config: { duration: 500 },
    delay: menu === 3 && (menuState >= 3 && menuState <= 5) ? 0 : 1000,
    onRest,
  })
  return aniLDI;
}

// Left DIV Invitado Title
export function useAniLDIT({menu, menuState}) {
  const aniLDIT = useSpring({
    to: { margin: menu === 3 && menuState === 3 ? '10px 0 0 80px' : '10px 0 0 -30px' },
    config: { duration: 600 }
  })
  return aniLDIT;
}

// Left DIV Invitado Line
export function useAniLDIL({menu, menuState}) {
  const aniLDIL = useSpring({
    to: {
      margin: menu === 3 && menuState === 3 ? '20px 0 0 75px' : '20px 0 0 15px'
    },
    config: { duration: 400 }
  })
  return aniLDIL;
}

// Left DIV Invitado Input
export function useAniLDII({menu, menuState}) {
  const aniLDII = useSpring({
    to: { 
      margin: menu === 3 && menuState === 3 ? '15px 0 0 85px' : '15px 0 0 0',
      width: menu === 3 && menuState === 3 ? '200px' : '0px'
    },
    config: { duration: 500 }
  })
  return aniLDII;
}

// Title
export function useAniT({menu, menuState}) {
  const aniT = useSpring({
    to: { 
      margin: menu === 2 && menuState === 1 ? '40px 0 0 40px' : '60px 0 0 50px',
      fontSize: menu === 2 && menuState === 1 ? '2.5em' : '3em'
    },
    config: { duration: 800 }
  })
  return aniT;
}