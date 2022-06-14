import { useSelector } from "react-redux"
import { MainState } from "../../models/models"
import './logTable.scss'

export type TableProps = {
}

type Props = TableProps & {
}

const LogTable: React.FC<Props> = (props) => {
    const history = useSelector((s: MainState) => s.history)

    return (
        <div className='logTable'>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Data</th>
                        <th>Ora</th>
                        <th>Tip</th>
                        <th>Echipament</th>
                        <th>Valoare</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: history.length })
                        .map((_, index) =>
                            <tr key={index}>
                                <td>{history[index].id}</td>
                                <td>{history[index].date}</td>
                                <td>{history[index].time}</td>
                                <td>{history[index].type}</td>
                                <td>{history[index].component}</td>
                                <td>{history[index].text}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div >
    )
}
export default LogTable
