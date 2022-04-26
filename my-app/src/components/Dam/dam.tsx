import React from 'react'
import { useSelector } from 'react-redux'
import { MainState } from '../../models/models'
import Canvas from '../Canvas/canvas'
import OnOffButtons from '../OnOffButtons/onOffButtons'
import './dam.scss'

type DamProps = {
}

type Props = DamProps & {

}

const Dam: React.FC<Props> = (props) => {
  const systemOn = useSelector((s: MainState) => s.systemOn)
  const valves = useSelector((s: MainState) => s.valves)
  const waterLevel = 20 // poate lua valori intre 20-200 (inaltimea apei din rezervor)

  const drawDam = (context: CanvasRenderingContext2D) => {
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
    context.fillRect(180, 243, 130, 20)
  }

  return (
    <div>
      <Canvas
        draw={drawDam}
        width={'300px'}
        height={'300px'}
        style={{ margin: '1%' }}
      />
      <img src='arrow.png' className='waterArrow arrow1' style={{ visibility: systemOn && valves.valve1On ? "visible" : "hidden" }} />
      <img src='arrow.png' className='waterArrow arrow2' style={{ visibility: systemOn && valves.valve1On ? "visible" : "hidden" }} />
      <OnOffButtons />
    </div>
  )
}

export default Dam