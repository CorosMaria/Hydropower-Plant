import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Image from '../../components/Image/image'
import { MainState } from '../../models/models'
import { Actions } from '../../redux/reducer'

export type ButtonOnOffProps = {
}

type Props = ButtonOnOffProps & {

}

const OnOffButtons: React.FC<Props> = (props) => {
  const systemOn = useSelector((s: MainState) => s.systemOn)
  const dispatch = useDispatch()

  const handleTurnOn = () => {
    dispatch(Actions.turnOn())
  }

  const handleTurnOff = () => {
    dispatch(Actions.turnOff())
  }

  let content = (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        marginTop: "50px",
        marginLeft: "20px"
      }}
    >
      <Image
        image="buttonON-off.png"
        altText="on"
        className="onOffButtons"
        onClick={handleTurnOn}
      />
      <Image
        image="buttonOFF-on.png"
        altText="off"
        className="onOffButtons"
        onClick={handleTurnOff}
      />
      Off
    </div>
  )

  if (systemOn) {
    content = (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginTop: "50px",
          marginLeft: "20px"
        }}
      >
        <Image
          image="buttonON-on.png"
          altText="on"
          className="onOffButtons"
          onClick={handleTurnOn}
        />
        <Image
          image="buttonOFF-off.png"
          altText="off"
          className="onOffButtons"
          onClick={handleTurnOff}
        />
        On
      </div>
    )
  }
  
  return content
}

export default OnOffButtons
