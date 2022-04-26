import React from 'react'
import Generator from '../Generator/generator'
import Turbine from '../Turbine/turbine'
import Dam from '../Dam/dam'
import Pipe from '../Pipe/pipe'
import OilSystem from '../OilSystem/oilSystem'
import ElectricalNetwork from '../ElectricalNetwork/electricalNetwork'

export type ProcessProps = {}

const Panel: React.FC<ProcessProps> = (props) => {
  return (
    <div
      style={{
        display: 'inline-flex',
      }}
    >
      <Dam />
      <Pipe />
      <Turbine />
      <OilSystem />
      <Generator />
      <ElectricalNetwork />
    </div>
  )
}

export default Panel
