import React from 'react'
import Canvas from '../Canvas/canvas'
import Valve from '../Valve/valve'

export type PipeProps = {
}

const Pipe: React.FC<PipeProps> = (props) => {
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
  }
  const [open1, setOpen1] = React.useState(true)
  
  const handleValveOpenClose1 = () => {
    setOpen1(!open1)
  }

  const [open2, setOpen2] = React.useState(true)
  
  const handleValveOpenClose2 = () => {
    setOpen2(!open2)
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
            <Valve handleOnOff={handleValveOpenClose1} on={open1} className={"valve1"}/> 
            <Canvas
            draw={drawPipe1}
            width={'100px'}
            height={'336px'}
            />
        </div>
            <Valve handleOnOff={handleValveOpenClose2} on={open2} className={"valve2"}/>
            <Canvas
            draw={drawPipe2}
            width={'73px'}
            height={'100px'}
            />
        </div>
  )
}

export default Pipe
