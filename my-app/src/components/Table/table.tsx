import './table.css'

export type TableProps = {
  title?: string
}
function createData(name: string, value: number) {
  return { name, value }
}

const rows = [
  createData('Presiune', 159),
  createData('Ulei', 237),
  createData('Apa', 262),
  createData('Temperatura', 50),
]

const ParametersTable: React.FC<TableProps> = (props) => (
  <div>
    <table>
      <tr>
        <th>{props.title}</th>
      </tr>
      {rows.map((row) => (
        <tr key={row.name}>
          <th>{row.name}</th>
          <th>{row.value}</th>
        </tr>
      ))}
    </table>
  </div>
)
export default ParametersTable
