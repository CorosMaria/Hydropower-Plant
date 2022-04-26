import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MainState } from '../../models/models'
import { Actions } from '../../redux/reducer'
import Canvas from '../Canvas/canvas'
import Valve from '../Valve/valve'
import './pipe.scss'

type PipeProps = {
}

type Props = PipeProps & {

}

const Pipe: React.FC<Props> = (props) => {
  const systemOn = useSelector((s: MainState) => s.systemOn)
  const valves = useSelector((s: MainState) => s.valves)
  const dispatch = useDispatch()

  const drawPipe1 = (context: CanvasRenderingContext2D) => {

    //orizonal
    context.fillStyle = 'blue'
    context.fillRect(0, 246, 50, 21)
    context.fillRect(50, 246, 50, 10) //liniuta aia mica din colt de teava

    //vertical
    context.fillRect(50, 246, 20, 90)
  }

  const drawPipe2 = (context: CanvasRenderingContext2D) => {

    //vertical
    context.fillStyle = 'blue'
    context.fillRect(49, 0, 10, 40)


    //orizonal
    context.fillStyle = 'blue'
    context.fillRect(49, 40, 50, 10)

    // evacuarea
    context.fillStyle = 'blue'
    context.fillRect(100, 50, 50, 21)
    //context.rotate(90 * Math.PI / 180)
  }

  const handleOpenCloseValve1 = () => {
    dispatch(Actions.turnOnOff_Valve1(!valves.valve1On))
  }

  const handleOpenCloseValve2 = () => {
    dispatch(Actions.turnOnOff_Valve2(!valves.valve2On))
  }

  return (
    <div style={{
      display: "flex",
      flexDirection: "column"
    }}>
      <div style={{
        display: "flex",
        flexDirection: "row"
      }}>
        <Valve handleOnOff={handleOpenCloseValve1} on={valves.valve1On} className={"valve1"} />
        <img src='arrow.png' className='waterArrow arrow3' style={{ visibility: systemOn && valves.valve1On && (valves.valve2On || valves.valve3On) ? "visible" : "hidden" }} />
        <img src='arrow.png' className='waterArrow arrow4' style={{ visibility: systemOn && valves.valve1On && valves.valve2On ? "visible" : "hidden" }} />
        <img src='arrow.png' className='waterArrow arrow5' style={{ visibility: systemOn && valves.valve1On && valves.valve3On ? "visible" : "hidden" }} />
        <Canvas
          draw={drawPipe1}
          width={'100px'}
          height={'336px'}
        />
      </div>
      <Valve handleOnOff={handleOpenCloseValve2} on={valves.valve2On} className={"valve2"} />
      <img src='arrow.png' className='waterArrow arrow6' style={{ visibility: systemOn && valves.valve1On && valves.valve2On ? "visible" : "hidden" }} />
      <img src='arrow.png' className='waterArrow arrow7' style={{ visibility: systemOn && valves.valve1On && valves.valve2On ? "visible" : "hidden" }} />
      {systemOn && <img src='spin2.png' className='spin' />}
      <Canvas
        draw={drawPipe2}
        width={'73px'}
        height={'100px'}
      />
    </div>
  )
}

export default Pipe