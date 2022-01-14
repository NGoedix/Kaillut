import { useSpring } from "react-spring";

export function useTextStudent({ isStudent }) {
  const textStudent = useSpring({
    to: {
      opacity: isStudent === false ? 1 : 0
    },
    config: { duration: 400 }
  })
  return textStudent;
}

export function useTextTeacher({ isStudent }) {
  const textTeacher = useSpring({
    to: {
      opacity: isStudent === true ? 1 : 0
    },
    config: { duration: 400 }
  })
  return textTeacher;
}

export function useDivStudent({ isStudent }) {
  const divStudent = useSpring({
    to: {
      left: isStudent === true ? '23px' : '90px'
    },
    config: { duration: 500 }
  })
  return divStudent;
}

export function useDivTeacher({ isStudent }) {
  const divTeacher = useSpring({
    to: {
      left: isStudent === true ? '170px' : '250px'
    },
    config: { duration: 500 }
  })
  return divTeacher;
}