import React from 'react'
import { objectData } from '../../models/models'
import './table.scss'

export type TableProps = {
  title?: string
}

function createData(name: string, value?: number) {
  return { name, value }
}

const ParametersTable: React.FC<TableProps> = (props) => {
  const [dataObject, setDataObject] = React.useState<objectData>({
      Plc_cnt: 0,
      AI0: 0,
      AI1: 0,
      AI2: 0,
      AI3: 0,
      Digi: 0,
      Com: 0,
      AO0: 0,
      AO1: 0,
      Conn_cnt: 0
    })

const loadData = () => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
      if(xhr.status == 200){
          const data = xhr.responseText.split(",")
          const objectData = { 
            Plc_cnt: parseInt(data[1]),
            AI0: parseInt(data[2]),
            AI1: parseInt(data[3]),
            AI2: parseInt(data[4]),
            AI3: parseInt(data[5]),
            Digi:parseInt( data[6]),
            Com: parseInt(data[7]),
            AO0: parseInt(data[8]),
            AO1: parseInt(data[9]),
            Conn_cnt: parseInt(data[10])
          }
          setDataObject(objectData)
      }

      if(xhr.status == 404){
          console.debug("Data not found")
      }
  }

  //xhr.open("get", "http://davos.science.upm.ro/~traian/web_apl/simul_date/S1200.php", true )
  xhr.open("get", "http://davos.science.upm.ro/~traian/web_apl/multiio/act_val.php", true)
  xhr.send();

  //setTimeout(loadData, 2000)
}

  const inputData = [
    createData('AI0', dataObject?.AI0),
    createData('AI1', dataObject?.AI1),
    createData('AI2', dataObject?.AI2),
    createData('AI3', dataObject?.AI3),
  ]

  const outputData = [
    createData('AO0', dataObject?.AO0),
    createData('AO1', dataObject?.AO1),
  ]

  const PlcData = [
    createData('Plc_cnt', dataObject?.Plc_cnt),
    createData('Digi', dataObject?.Digi),
    createData('Com', dataObject?.Com),
    createData('Conn_cnt', dataObject?.Conn_cnt)
  ]

return (
  <div>
    <button onClick={loadData}>Load Data</button>
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
