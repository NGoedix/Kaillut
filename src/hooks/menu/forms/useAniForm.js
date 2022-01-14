import { useSpring } from "react-spring";

export function useAniLogin({ menu, menuState, loginState, onRest }) {
  const aniLogin = useSpring({
    to: {
      display: menu === 1 || !( menu === 2 && (loginState === 1 ||  loginState === 2 || loginState === 4 || loginState === 5)) ? "none" : "block",
      opacity:  menu === 2 && menuState === 1 && (loginState === 1 || loginState === 4 || loginState === 5) ? 1 : 0,
    },
    config: { duration: 800 },
    onRest,
  });

  return aniLogin;
}

export function useAniRegister({ menu, menuState, loginState, onRest }) {
  const aniRegister = useSpring({
    to: {
      opacity: menu === 2 && menuState === 1 && (loginState === 2 || loginState === 3 || loginState === 6) ? 1 : 0,
      display: (loginState === 2 || loginState === 3 || loginState === 5 || loginState === 6) && menu === 2 ? 'block' : 'none',
    },
    config: { duration: 800 },
    onRest,
  })

  return aniRegister;
}