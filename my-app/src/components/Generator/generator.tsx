import React from 'react'
import { useSelector } from 'react-redux'
import { convertValue } from '../../helpers/helpers'
import { MainState } from '../../models/models'
// import { useDispatch } from 'react-redux'
// import { Actions } from '../../redux/reducer'
import Image from '../Image/image'
import './generator.scss'

export type GeneratorProps = {}

const Generator: React.FC<GeneratorProps> = (props) => {
  const AI3 = useSelector((s: MainState) => s.plc_data.AI3)
  const outputVoltage = convertValue(AI3, 0, 20)
  const ventilation = useSelector((s: MainState) => s.ventilation)
  // const dispatch = useDispatch()

  // const onClick = () => {
  //   dispatch(Actions.turnOnOff_Valve1)
  // }

  return (
    <div style={{
      marginTop: "400px"
    }}>
      <Image
        //onClick={onClick}
        image="generator2.png"
        altText="Generator"
        className="process-images generator"
        hasStateIndicator
        hasLabel
        value={outputVoltage}
        unit={"kV"}
      // showComponentName
      // componentName={"Generator"}
      />
      <img src='ventilator.png' alt='ventilator' width={"30px"} className='ventilator' style={{ animation: ventilation ? "rotation 5s infinite linear" : "none" }} />
    </div>
  )
}

export default Generator
