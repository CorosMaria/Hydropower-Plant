import React from 'react'
import { useSelector } from 'react-redux'
import { MainState } from '../../models/models'
import './table.scss'

export type TableProps = {
}

type Props = TableProps & {
}

function createData(name: string, value?: number) {
  return { name, value }
}

const ParametersTable: React.FC<Props> = (props) => {
  const data = useSelector((s: MainState) => s.plc_data)

  const inputData = [
    createData('AI0', data.AI0),
    createData('AI1', data.AI1),
    createData('AI2', data.AI2),
    createData('AI3', data.AI3),
    createData('AI4', data.AI4),
    createData('AI5', data.AI5),
    createData('AI6', data.AI6),
    createData('AI7', data.AI7),
  ]

  const outputData = [
    createData('AO0', data.AO0),
    createData('AO1', data.AO1),
    createData('AO1', data.AO2),
    createData('AO1', data.AO3),
  ]

  const PlcData = [
    createData('Remote', data.Remote),
    createData('Digi', data.Digi),
    createData('Com', data.Com),
    createData('Sample_nr', data.Sample_nr)
  ]

  return (
    <div>
      <table className='dataTable'>
        <tr>
          <th>Input</th>
        </tr>
        <br />
        {inputData.map((input) => (
          <tr key={input.name}>
            <th>{input.name}</th>
            <th>{input.value}</th>
          </tr>
        ))}
        <tr>
          <br />
        </tr>
        <tr>
          <th>Output</th>
        </tr>
        <br />
        {outputData.map((output) => (
          <tr key={output.name}>
            <th>{output.name}</th>
            <th>{output.value}</th>
          </tr>
        ))}
        <tr>
          <br />
        </tr>
        <tr>
          <th>PLC</th>
        </tr>
        <br />
        {PlcData.map((plcParameter) => (
          <tr key={plcParameter.name}>
            <th>{plcParameter.name}</th>
            <th>{plcParameter.value}</th>
          </tr>
        ))}
      </table>
    </div>
  )
}
export default ParametersTable
