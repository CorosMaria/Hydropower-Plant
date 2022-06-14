import React from 'react'
import { useSelector } from 'react-redux'
import { convertValue } from '../../helpers/helpers'
import { MainState } from '../../models/models'
// import { Actions } from '../../redux/reducer'
import Canvas from '../Canvas/canvas'
import Image from '../Image/image'
import Valve from '../Valve/valve'
import './turbine.scss'

export type TurbineProps = {}

const Turbine: React.FC<TurbineProps> = (props) => {
  const valves = useSelector((s: MainState) => s.valves)
  const AI1 = useSelector((s: MainState) => s.plc_data.AI1)
  const turbineSpeed = convertValue(AI1, 0, 360) //360 turatia maxima a turbinei
  // const dispatch = useDispatch()

  const drawPipe1 = (context: CanvasRenderingContext2D, width: number, height: number) => {

    context.clearRect(0, 0, width, height)
    context.save()

    //orizonal
    context.fillStyle = 'blue'
    context.fillRect(0, 266, 25, 10)
  }

  const drawWaterEvacuation = (context: CanvasRenderingContext2D, width: number, height: number) => {

    context.clearRect(0, 0, width, height)
    context.save()

    //vertical
    context.fillStyle = 'blue'
    context.fillRect(0, 0, 50, 100)
    context.fillRect(50, 12, 13, 5)
    if (!valves.valve2On) {
      context.clearRect(50, 12, 13, 5)
    }
  }

  // const handleOpenCloseValve2 = () => {
  //   dispatch(Actions.turnOnOff_Valve2(!valves.valve2On))
  // } //handleOnOff={handleOpenCloseValve2}

  return (
    <div className="turbineGroup">
      <Canvas
        draw={drawPipe1}
        width={'20px'}
        height={'360px'}
      />
      <Valve on={valves.valve2On} className={"valve2"} />
      <Canvas
        draw={drawPipe1}
        width={'25px'}
        height={'360px'}
      />
      <Image
        image="turbine2.png"
        altText="Turbine"
        className="process-images turbine"
        hasLabel
        value={turbineSpeed}
        unit={"rot/min"}
        showComponentName
        componentName={"Turbina"}
        onTop={true}
      />
      {valves.valve1On &&
        <div>
          {valves.valve1On &&
            <div>
              <Canvas
                draw={drawWaterEvacuation}
                width={'63px'}
                height={'100px'}
                style={{ marginLeft: "12px", marginTop: "-13px" }}
              />
              <img src='waves.png' alt='waterFall' className='waves' />
            </div>}
        </div>}
    </div>
  )
}

export default Turbine
