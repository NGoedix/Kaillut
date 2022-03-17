import * as React from "react"

const SvgComponent = ({styleName}) => (
  <svg className={styleName} width="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3 13v11"
      fill="none"
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={2}
    />
    <circle cx={3} cy={24} r={2} />
    <g fill="none" stroke="#000" strokeMiterlimit={10} strokeWidth={2}>
      <path d="M16 8.833 3.5 13 16 17.167 28.5 13z" />
      <path d="M7 14.451V20c0 1.657 4.029 3 9 3s9-1.343 9-3v-5.549" />
    </g>
  </svg>
)

export default SvgComponent
