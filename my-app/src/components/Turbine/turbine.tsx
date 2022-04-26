import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MainState } from '../../models/models'
import { Actions } from '../../redux/reducer'
import Canvas from '../Canvas/canvas'
import Image from '../Image/image'
import Valve from '../Valve/valve'

export type TurbineProps = {}

const Turbine: React.FC<TurbineProps> = (props) => {
  const valves = useSelector((s: MainState) => s.valves)
  const dispatch = useDispatch()
  
  const drawPipe1 = (context: CanvasRenderingContext2D) => {
   
    //orizonal
    context.fillStyle = 'blue'
    context.fillRect(0, 246, 25, 10)
  }
  
  const handleOpenCloseValve3 = () => {
    dispatch(Actions.turnOnOff_Valve3(!valves.valve3On))
  }

  return (
    <div>
       <Canvas
            draw={drawPipe1}
            width={'20px'}
            height={'360px'}
            />
      <Valve handleOnOff={handleOpenCloseValve3} on={valves.valve3On} className={"valve3"}/>
      <Canvas
            draw={drawPipe1}
            width={'25px'}
            height={'360px'}
            />
      <div>
        <Image
          image="turbine2.png"
          altText="Turbine"
          className="process-images turbine"
          hasLabel
          value={200}
          unit={"rot/min"}
          showComponentName
          componentName={"Turbina"}
        />
      </div>
      
    </div>
  )
}

export default Turbine
