import React from 'react'
import Generator from '../Generator/generator'
import Transformer from '../Transformer/transformer'
import Pole from '../Pole/pole'
import Turbine from '../Turbine/turbine'
import Dam from '../Dam/dam'
import OnOffButtons from '../OnOffButtons/onOffButtons'
import Valve from '../Valve/valve'
import Pipe from '../Pipe/pipe'

export type ProcessProps = {}

const Panel: React.FC<ProcessProps> = (props) => {
  const [buttonOn, setButtonOn] = React.useState(false)

  let waterLevel = {
    x: 0,
    y: 50,
  }

  const toggleOnOffButtons = () => {
    setButtonOn(!buttonOn)
    console.debug("hello")
  }

  return (
    <div
      style={{
        display: 'inline-flex',
      }}
    >
      <Dam waterLevel={waterLevel} />
      <Pipe />
      <Turbine />
      <Generator />
      <Transformer />
      <Pole />
      <OnOffButtons handleOnOff={toggleOnOffButtons} on={buttonOn} />
    </div>
  )
}

export default Panel
