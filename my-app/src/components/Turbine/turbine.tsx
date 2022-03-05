import React from 'react'
import Canvas from '../Canvas/canvas'
import Image from '../Image/image'
import Valve from '../Valve/valve'

export type TurbineProps = {}

const Turbine: React.FC<TurbineProps> = (props) => {
  
  const drawPipe1 = (context: CanvasRenderingContext2D) => {
   
    //orizonal
    context.fillStyle = 'blue'
    context.fillRect(0, 246, 25, 10)
  }

  const [open, setOpen] = React.useState(true)
  
  const handleValveOpenClose = () => {
    setOpen(!open)
  }

  return (
    <div>
       <Canvas
            draw={drawPipe1}
            width={'20px'}
            height={'360px'}
            />
      <Valve handleOnOff={handleValveOpenClose} on={open} className={"valve3"}/>
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
          componentName={"Water turbine"}
        />
      </div>
      
    </div>
  )
}

export default Turbine
