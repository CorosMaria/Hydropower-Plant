import React from 'react'
import Image from '../../components/Image/image'

export type ButtonOnOffProps = {
  on: boolean
  handleOnOff(): void
}

const OnOffButtons: React.FC<ButtonOnOffProps> = (props) => {
  // const [on, setOn] = React.useState(props.on)

  // const handleOnOff = () => {
  //   setOn(!on)
  // }

  let content = (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <Image
        image="buttonON-off.png"
        altText="on"
        className="onOffButtons"
        onClick={props.handleOnOff}
      />
      <Image
        image="buttonOFF-on.png"
        altText="off"
        className="onOffButtons"
        onClick={props.handleOnOff}
      />
    </div>
  )

  if (props.on) {
    content = (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Image
          image="buttonON-on.png"
          altText="on"
          className="onOffButtons"
          onClick={props.handleOnOff}
        />
        <Image
          image="buttonOFF-off.png"
          altText="off"
          className="onOffButtons"
          onClick={props.handleOnOff}
        />
      </div>
    )
  }
  return <div>{content}</div>
}
export default OnOffButtons
