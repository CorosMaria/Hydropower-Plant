import React from 'react'
import Canvas from '../Canvas/canvas'
import './dam.scss'

export type DamProps = {
  waterLevel: { x: number; y: number }
}

const Dam: React.FC<DamProps> = (props) => {
  const drawDam = (context: CanvasRenderingContext2D) => {
    //rezervor
    context.fillStyle = 'blue'
    context.fillRect(props.waterLevel.x, props.waterLevel.y, 100, 150)
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
    </div>
  )
}

export default Dam
