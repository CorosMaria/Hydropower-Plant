import React from 'react'
import { useSelector } from 'react-redux'
import { MainState } from '../../models/models'
import Canvas from '../Canvas/canvas'
import Label from '../Label/label'
import './oilSystem.scss'

export type OilSystemProps = {
}


type Props = OilSystemProps & {

}

const OilSystem: React.FC<Props> = (props) => {
  const systemOn = useSelector((s: MainState) => s.systemOn)
  const valves = useSelector((s: MainState) => s.valves)

  const oilLevel = 100 //minim 10, la 140 e plin rezervorul
  let oilInPipes = 215 //minim 0, max 215

  const drawDam = (context: CanvasRenderingContext2D) => {

    //rezervor
    context.fillStyle = 'gray'
    context.fillRect(20, 590, 160, 170)

    //oil
    context.fillStyle = 'orange'
    context.setTransform(1, 0, 0, -1, 0, 160)     // reverses the coordinate system's y-axis
    context.fillRect(30, -580, 140, oilLevel);  // fill reservoir bottom to top
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
    context.fillRect(45, -500, 5, oilInPipes);  // fill pipes from bottom to top 
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.save()

    context.setTransform(1, 0, 0, -1, 0, 230)     // reverses the coordinate system's y-axis
    context.fillRect(135, -500, 5, oilInPipes);  // fill pipes from bottom to top
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.save()

    // teava apa primul lagar
    context.fillStyle = 'blue'
    context.fillRect(40, 450, 40, 5)
    context.fillRect(40, 450, 5, 60)
    context.fillRect(80, 450, 5, 60)
    context.fillRect(40, 505, 40, 5)
    context.save()

    //teava apa al doilea lagar
    context.fillStyle = 'blue'
    context.fillRect(130, 450, 40, 5)
    context.fillRect(130, 450, 5, 60)
    context.fillRect(170, 450, 5, 60)
    context.fillRect(130, 505, 40, 5)
    context.save()

    if (systemOn && oilInPipes == 215) {
      // teava ulei primul lagar
      context.fillStyle = 'orange'
      context.fillRect(45, 455, 35, 3)
      context.fillRect(45, 455, 3, 50)
      context.fillRect(77, 455, 3, 50)
      context.fillRect(45, 502, 35, 3)
      context.save()

      //teava ulei al doilea lagar 
      context.fillStyle = 'orange'
      context.fillRect(135, 455, 35, 3)
      context.fillRect(135, 455, 3, 50)
      context.fillRect(167, 455, 3, 50)
      context.fillRect(135, 502, 35, 3)
      context.save()
    }

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

  const oilPressureIndicator = (context: CanvasRenderingContext2D) => {
    context.save();
    context.clearRect(0, 0, 150, 150);
    context.translate(30, 30);
    context.scale(0.2, 0.2);
    context.rotate(Math.PI / 1.5);
    context.strokeStyle = 'black';
    context.fillStyle = 'white';
    context.lineWidth = 8;
    context.lineCap = 'round';

    // Hour marks
    context.save();
    for (var i = 0; i < 10; i++) {
      context.beginPath();
      context.rotate(Math.PI / 6);
      context.moveTo(100, 0);
      context.lineTo(120, 0);
      context.stroke();
    }
    context.restore();

    // Minute marks
    context.save();
    context.lineWidth = 5;
    for (i = 0; i < 50; i++) {
      if (i % 5 != 0) {
        context.beginPath();
        context.moveTo(117, 0);
        context.lineTo(120, 0);
        context.stroke();
      }
      context.rotate(Math.PI / 30);
    }
    context.restore();

    var oilPressure = 1

    oilPressure = oilPressure >= 12 ? oilPressure - 12 : oilPressure;

    context.fillStyle = 'black';

    context.save();
    context.rotate(oilPressure * (Math.PI / 6));
    context.lineWidth = 14;
    context.beginPath();
    context.moveTo(-20, 0);
    context.lineTo(80, 0);
    context.stroke();
    context.restore();

    context.beginPath();
    context.lineWidth = 14;
    context.strokeStyle = '#325FA2';
    context.arc(0, 0, 142, 0, Math.PI * 2, true);
    context.stroke();

    context.restore();
  }

  return (
    <div>
      <img src='arrow.png' className='waterArrow arrow8' style={{ visibility: systemOn && valves.valve1On && valves.valve3On ? "visible" : "hidden" }} />
      <img src='arrow.png' className='waterArrow arrow9' style={{ visibility: systemOn && valves.valve1On && valves.valve3On ? "visible" : "hidden" }} />
      <img src='arrow.png' className='waterArrow arrow10' style={{ visibility: systemOn && valves.valve1On && valves.valve3On ? "visible" : "hidden" }} />
      <img src='arrow.png' className='waterArrow arrow11' style={{ visibility: systemOn && valves.valve1On && valves.valve3On ? "visible" : "hidden" }} />
      <Canvas
        draw={drawDam}
        width={'200px'}
        height={'750px'}
      />
      <Canvas
        draw={oilPressureIndicator}
        width={'60px'}
        height={'60px'}
        style={{ position: "absolute", marginTop: "650px" }}
      />
      <Label value={10} unit="bar" className='info oilLabel' />
    </div>
  )
}

export default OilSystem
