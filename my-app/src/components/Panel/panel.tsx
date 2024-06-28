import React from 'react'
import Coloana1 from '../Coloana1/Coloana1'
import Coloana2 from '../Coloana2/Coloana2'

export type ProcessProps = {}

const Panel: React.FC<ProcessProps> = (props) => {
  return (
    <div
      style={{
        display: 'inline-flex',
      }}
    >
      {/* <Dam /> */}
      {/* <Pipe /> */}
      <Coloana1 />
      <Coloana2 />
      {/* <OilSystem /> */}
      {/* <Generator /> */}
      {/* <ElectricalNetwork /> */}
    </div>
  )
}

export default Panel
