import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { convertValue } from '../../helpers/helpers'
import { MainState } from '../../models/models'
import { Actions } from '../../redux/reducer'
import Canvas from '../Canvas/canvas'
import Label from '../Label/label'
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
    context.fillRect(40, 0, 10, 40)


    //orizonal
    context.fillStyle = 'blue'
    context.fillRect(40, 40, 40, 10)
  }

  const handleOpenCloseValve1 = () => {
    dispatch(Actions.turnOnOff_Valve2(!valves.valve2On))
  } //handleOnOff={handleOpenCloseValve1}

  return (
    <div style={{
      display: "flex",
      flexDirection: "column"
    }}>
      <div style={{
        display: "flex",
        flexDirection: "row"
      }}>
        <img src='arrow.png' alt='arrow' className='waterArrow arrow4' style={{ visibility: systemOn && valves.valve1On ? "visible" : "hidden" }} />
        <img src='arrow.png' alt='arrow' className='waterArrow arrow5' style={{ visibility: systemOn && valves.valve2On ? "visible" : "hidden" }} />
        <Canvas
          draw={drawPipe1}
          width={'100px'}
          height={'336px'}
        />
      </div>

      <Valve on={valves.valve1On} className={"valve1"} />
      <img src='arrow.png' alt='arrow' className='waterArrow arrow6' style={{ visibility: systemOn && valves.valve1On ? "visible" : "hidden" }} />
      <img src='arrow.png' alt='arrow' className='waterArrow arrow7' style={{ visibility: systemOn && valves.valve1On ? "visible" : "hidden" }} />
      {systemOn && valves.valve1On && <img src='spin2.png' alt='spin' className='spin' />}
      <Canvas
        draw={drawPipe2}
        width={'75px'}
        height={'100px'}
      />
    </div>
  )
}

export default Pipe