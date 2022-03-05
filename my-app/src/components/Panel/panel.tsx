import React from 'react'
import Generator from '../Generator/generator'
import Transformer from '../Transformer/transformer'
import Pole from '../Pole/pole'
import Turbine from '../Turbine/turbine'
import Dam from '../Dam/dam'
import OnOffButtons from '../OnOffButtons/onOffButtons'
import Pipe from '../Pipe/pipe'
import OilSystem from '../OilSystem/oilSystem'

export type ProcessProps = {}

const Panel: React.FC<ProcessProps> = (props) => {
  const [buttonOn, setButtonOn] = React.useState(false)

  let waterLevel =  20 // poate lua valori intre 20-200 (inaltimea apei din rezervor)
  let oilLevel = 120 // poate lua valori intre 20-150 (inaltimea uleiului din rezervor)

  const toggleOnOffButtons = () => {
    setButtonOn(!buttonOn)
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
      <OilSystem oilLevel={oilLevel}/>
      <Generator />
      <Transformer />
      <Pole />
      <OnOffButtons handleOnOff={toggleOnOffButtons} on={buttonOn} />
    </div>
  )
}

export default Panel
