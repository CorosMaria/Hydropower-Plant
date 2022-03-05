import React from 'react'
import Canvas from '../Canvas/canvas'
import './oilSystem.scss'

export type OilSystemProps = {
  oilLevel: number
}

const OilSystem: React.FC<OilSystemProps> = (props) => {
  const drawDam = (context: CanvasRenderingContext2D) => {
    
    //rezervor
    context.fillStyle = 'gray'
    context.fillRect(20,590,160,170)
    
    //oil
    context.fillStyle = 'orange'
    context.setTransform(1, 0, 0, -1, 0, 160)     // reverses the coordinate system's y-axis
    context.fillRect(30, -580, 140, props.oilLevel);  // fill bottom to top
    context.setTransform(1, 0, 0, 1, 0, 0); 
    context.save()

    //lagare turbina-generator
    context.fillStyle = 'gray'
    context.fillRect(40, 450, 40, 60)
    context.save()

    context.fillRect(130, 450, 40, 60)
    context.save()

    //tevi de ulei
    context.fillStyle = 'gray'
    context.fillRect(40, 510, 15, 230)
    context.strokeRect(40, 510, 15, 230)
    context.save()

    context.fillRect(130, 510, 15, 230)
    context.strokeRect(130, 510, 15, 230)
    context.save()

    //uleiul din tevi
    context.fillStyle = 'orange'
    context.setTransform(1, 0, 0, -1, 0, 230)     // reverses the coordinate system's y-axis
    context.fillRect(45, -500, 5, props.oilLevel-10);  // fill bottom to top
    context.setTransform(1, 0, 0, 1, 0, 0); 
    context.save()

    context.setTransform(1, 0, 0, -1, 0, 230)     // reverses the coordinate system's y-axis
    context.fillRect(135, -500, 5, props.oilLevel-10);  // fill bottom to top
    context.setTransform(1, 0, 0, 1, 0, 0); 
    context.save()

    // tevi apa lagare 
    // primul lagar
    context.fillStyle = 'blue'
    context.fillRect(40, 450, 40, 5)
    context.fillRect(40, 450, 5, 60)
    context.fillRect(80, 450, 5, 60)
    context.fillRect(40, 505, 40, 5)
    context.save()

    //al doilea lagar
    context.fillRect(130, 450, 40, 5)
    context.fillRect(130, 450, 5, 60)
    context.fillRect(170, 450, 5, 60)
    context.fillRect(130, 505, 40, 5)
    context.save()

    //teava 1 catre lagar
    context.fillStyle = 'blue'
    //orizontal
    context.fillRect(0, 246, 40, 10)
    //vertical
    context.fillRect(40, 246, 10, 205)
    context.save()

    //teava 2 catre lagar
    context.fillStyle = 'blue'
    //orizontal
    context.fillRect(40, 246, 100, 10)
    //vertical
    context.fillRect(130, 246, 10, 205)
    context.save()

    // conducta turbina-generator DIN NOU CA SA ASCUND APA DE RACIRE
    context.fillStyle = 'gray'
    context.fillRect(0, 470, 200, 20)
    context.save()

    //Text LT1
    context.font = "20px Comic Sans MS";
    context.fillStyle = "black";
    context.fillText("LT1", 60, 445)
    context.save()

    //Text LT2
    context.font = "20px Comic Sans MS";
    context.fillStyle = "black";
    context.fillText("LT2", 155, 445)
    context.save()
  }

  return (
    <div>
      <Canvas
        draw={drawDam}
        width={'200px'}
        height={'750px'}
      />
    </div>
  )
}

export default OilSystem
