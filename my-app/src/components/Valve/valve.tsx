import React from 'react'
import { useSelector } from 'react-redux'
import { MainState } from '../../models/models'
import "./valve.scss"

export type ValveProps = {
    on: boolean
    handleOnOff(): void
    className: string
}

const Valve: React.FC<ValveProps> = (props) => {
  const systemOn = useSelector((s: MainState) => s.systemOn)
  
    let content = (
          <img
            src="valveClose.png"
            alt="valveClose"
            className={props.className}
            onClick={props.handleOnOff}
          />
      )
    
      if (systemOn && props.on) {
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
