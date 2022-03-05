import React from 'react'
import "./valve.scss"

export type ValveProps = {
    on: boolean
    handleOnOff(): void
    className: string
}

const Valve: React.FC<ValveProps> = (props) => {
    let content = (
          <img
            src="valveClose.png"
            alt="valveClose"
            className={props.className}
            onClick={props.handleOnOff}
          />
      )
    
      if (props.on) {
        content = (
            <img
              src="valveOpen.png"
              alt="valveOpen"
              className={props.className}
              onClick={props.handleOnOff}
            />
        )
      }
      return <>{content}</>
  }
  

export default Valve
