import React from "react"
import './dataTable.scss'
import { objectData } from "../../models/models"

export type DataTableProps = {
  }
  
  const DataTable: React.FC<DataTableProps> = (props) => {

    const [dataObject, setDataObject] = React.useState<objectData>()

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
      
        xhr.open("get", "http://davos.science.upm.ro/~traian/web_apl/simul_date/S1200.php", true )
        //xhr.open("get", "http://davos.science.upm.ro/~traian/web_apl/multiio/act_val.php", true)
        xhr.send();

        setTimeout(loadData, 200)
      }

    return (
      <div> 
          <button type="button" onClick={loadData}> Load data </button>
          <table>
              <tr>
                <th>Plc_cnt</th>
                <th>AI0</th>
                <th>AI1</th>
                <th>AI2</th>
                <th>AI3</th>
                <th>Digi</th>
                <th>Com</th>
                <th>AO0</th>
                <th>AO1</th>
                <th>Conn_cnt</th>
              </tr>
              <tr>
                <td> {dataObject?.Plc_cnt}</td>
                <td>{dataObject?.AI0}</td>
                <td>{dataObject?.AI1}</td>
                <td>{dataObject?.AI2}</td>
                <td>{dataObject?.AI3}</td>
                <td>{dataObject?.Digi}</td>
                <td>{dataObject?.Com}</td>
                <td>{dataObject?.AO0}</td>
                <td>{dataObject?.AO1}</td>
                <td>{dataObject?.Conn_cnt}</td>
              </tr>
          </table>
      </div>
    )
  }
  
  export default DataTable
  