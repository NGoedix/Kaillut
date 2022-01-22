import { useSpring } from "react-spring";

export function useTextStudent({ isTeacher }) {
  const textStudent = useSpring({
    to: {
      opacity: isTeacher === false ? 1 : 0
    },
    config: { duration: 400 }
  })
  return textStudent;
}

export function useTextTeacher({ isTeacher }) {
  const textTeacher = useSpring({
    to: {
      opacity: isTeacher === true ? 1 : 0
    },
    config: { duration: 400 }
  })
  return textTeacher;
}

export function useDivStudent({ isTeacher }) {
  const divStudent = useSpring({
    to: {
      left: isTeacher === true ? '23px' : '90px'
    },
    config: { duration: 500 }
  })
  return divStudent;
}

export function useDivTeacher({ isTeacher }) {
  const divTeacher = useSpring({
    to: {
      left: isTeacher === true ? '170px' : '250px'
    },
    config: { duration: 500 }
  })
  return divTeacher;
}