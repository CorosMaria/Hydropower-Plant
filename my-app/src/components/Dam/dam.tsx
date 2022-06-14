import React from 'react'
import { useSelector } from 'react-redux'
import { convertValue } from '../../helpers/helpers'
import { MainState } from '../../models/models'
import Canvas from '../Canvas/canvas'
import './dam.scss'
import ControlPanel from '../ControlPanel/controlPanel'
import Label from '../Label/label'

type DamProps = {
}

type Props = DamProps & {

}

const Dam: React.FC<Props> = (props) => {
  const systemOn = useSelector((s: MainState) => s.systemOn)
  const valves = useSelector((s: MainState) => s.valves)
  const AI0 = useSelector((s: MainState) => s.plc_data.AI0)
  const waterLevel = convertValue(AI0, 20, 200) // poate lua valori intre 20-200 (inaltimea apei din rezervor)
  const data = useSelector((s: MainState) => s.plc_data)

  const deschidere = convertValue(data.AI2, 0, 100)

  const drawDam = (context: CanvasRenderingContext2D, height: number, width: number) => {
    context.clearRect(0, 0, width, height)
    context.save()

    //rezervor
    context.fillStyle = 'blue'

    context.setTransform(1, 0, 0, -1, 0, 200)     // reverses the coordinate system's y-axis
    context.fillRect(0, 0, 100, waterLevel);  // fill bottom to top
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.save()

    //perete baraj
    context.fillStyle = 'gray'
    context.fillRect(100, 0, 50, 200)
    context.save()

    //baza baraj
    context.fillStyle = 'gray'
    context.fillRect(0, 200, 250, 100)
    context.save()

    //cadere apa
    context.rotate((Math.PI / 180) * -60)
    context.fillStyle = 'blue'
    context.fillRect(-137, 160, 20, 130)
    context.restore()

    //orizonal
    context.fillStyle = 'blue'
    context.fillRect(180, 243, 70, 20)
    context.save()
  }

  return (
    <div>
      <Canvas
        draw={drawDam}
        width={250}
        height={300}
        style={{ margin: '1%' }}
      />
      <img src='arrow.png' alt='arrow' className='waterArrow arrow1' style={{ visibility: systemOn && valves.valve1On || valves.valve2On ? "visible" : "hidden" }} />
      <img src='arrow.png' alt='arrow' className='waterArrow arrow2' style={{ visibility: systemOn && valves.valve1On || valves.valve2On ? "visible" : "hidden" }} />
      <Label value={deschidere} unit={'%'} className={'label info deschidere'} />
      <ControlPanel />
    </div>
  )
}

export default Dam