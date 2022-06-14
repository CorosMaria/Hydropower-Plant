import React from 'react'
import { useSelector } from 'react-redux'
import { MainState } from '../../models/models'
import Canvas from '../Canvas/canvas'
import Image from '../Image/image'
import './electricalNetwork.scss'

export type ElectricalNetworkProps = {}

const ElectricalNetwork: React.FC<ElectricalNetworkProps> = (props) => {

  const systemOn = useSelector((s: MainState) => s.systemOn)
  const valves = useSelector((s: MainState) => s.valves)

  const drawGeneratorToTransformatorWires = (context: CanvasRenderingContext2D) => {
    //linia 1
    context.beginPath()
    context.lineWidth = 5
    context.strokeStyle = 'gray'
    context.moveTo(0, 0)
    context.lineTo(20, 0)
    context.stroke()
    context.save()

    //linia 2
    context.beginPath()
    context.lineWidth = 5
    context.strokeStyle = 'gray'
    context.moveTo(0, 15)
    context.lineTo(20, 15)
    context.stroke()
    context.save()

    //linia 3
    context.beginPath()
    context.lineWidth = 5
    context.strokeStyle = 'gray'
    context.moveTo(0, 30)
    context.lineTo(20, 30)
    context.stroke()
    context.save()
  }

  // const drawCanvas = (context: CanvasRenderingContext2D) => {

  //   //linia 1
  //   context.beginPath()
  //   context.moveTo(20, 20);
  //   context.bezierCurveTo(20, 100, 200, 100, 200, 20);
  //   context.strokeStyle = 'yellow'
  //   context.stroke()
  //   context.save()

  //   //linia 2
  //   context.beginPath()
  //   context.moveTo(100, 40)
  //   context.lineTo(0, 220)
  //   context.stroke()

  //   //linia 3
  //   context.beginPath()
  //   context.moveTo(100, 70)
  //   context.lineTo(0, 225)
  //   context.stroke()
  // }

  return (
    <div>
      {systemOn && valves.valve1On ? <img src='hidro.png' alt='hidro' style={{ position: 'absolute' }} className='electricity' /> : <img src='retea.png' alt='retea' style={{ position: 'absolute' }} className='electricity' />}

      <div style={{ display: "none" }}>
        <Canvas
          draw={drawGeneratorToTransformatorWires}
          width={'60px'}
          height={'60px'}
          style={{ position: "absolute", marginTop: "460px" }} />

        <div style={{ display: "inline-flex" }}>
          <div style={{ marginTop: "340px" }}>
            <Image
              image="transformer.png"
              altText="Transformer"
              className="process-images transformer"
              hasLabel
              value={110}
              unit="KV"
              showComponentName
              componentName={"Transformator ridicator de tensiune"}
            />
          </div>
          {/* <Canvas width={"100px"} height={"650px"} draw={drawCanvas} style={{ position: "absolute" }} /> */}
          <Image
            image="pole2.png"
            altText="Stalp Transmisie"
            className="stalp1"
            onCenter
          />
          <Image
            image="pole2.png"
            altText="Stalp Transmisie"
            className="stalp3"
            showComponentName
            componentName={"Retea nationala 110kV"}
            onCenter
          />
          <div style={{ marginTop: "300px", marginLeft: "50px" }}>
            <Image
              image="transformer_flip.png"
              altText="Transformator"
              className="transformer2"
              hasLabel
              value={20}
              unit={"kV"}
              showComponentName
              componentName={"Transformator coborator de tensiune"}
            />
          </div>
          <Image
            image="housePole.png"
            altText="Stalp Transmisie"
            className="stalp2"
            showComponentName
            componentName={"Retea locala 20kV"}
            onCenter
          />
          <div style={{
            marginLeft: "30px",
            marginTop: "330px"
          }}>
            <Image
              image="transformer2.png"
              altText="Tranformer"
              className="transformer3"
              hasLabel
              value={0.4}
              unit={"kV"}
              showComponentName
              componentName={"Transformator 20kV la 0,4kV"}
            />
          </div>
          <div style={{ marginLeft: "-600px", display: "flex", marginTop: "50px" }}>
            {Array.from({ length: 6 })
              .map((_, index) =>
                <Image
                  key={index}
                  image="house-pole-light.png"
                  altText="House"
                  className="house"
                  componentName={"House"}
                />)
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ElectricalNetwork
