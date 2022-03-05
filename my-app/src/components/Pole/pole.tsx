import { Hidden } from '@material-ui/core'
import React from 'react'
import Canvas from '../Canvas/canvas'
import Image from '../Image/image'

export type PoleProps = {}

const Pole: React.FC<PoleProps> = (props) => {
  const drawCanvas = (context: CanvasRenderingContext2D) => {
    
    //linia 1
    context.beginPath()
    context.moveTo(100,20)
    context.lineTo(0,230)
    context.strokeStyle = 'yellow'
    context.stroke()
    context.save()

    //linia 2
    context.beginPath()
    context.moveTo(100,40)
    context.lineTo(0,220)
    context.stroke()

    //linia 3
    context.beginPath()
    context.moveTo(100,70)
    context.lineTo(0,225)
    context.stroke()
  }

  return (
    <div
      style={{
        display: 'inline-flex',
        marginTop: "150px"
      }}
    >
      <Canvas width={"100px"} height={"650px"} draw={drawCanvas} />
      <Image 
        image="stalp_transmisie.png"
        altText="Stalp Transmisie"
        className="process-images stalp"
      />
      <Image
        image="stalp_transmisie.png"
        altText="Stalp Transmisie"
        className="process-images stalp"
        showComponentName
        componentName={"Electricity poles"}
      />
    </div>
  )
}

export default Pole
