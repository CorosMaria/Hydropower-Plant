import './sidebar.css'
import ParametersTable from '../../components/Table/table'
import Grid from '@material-ui/core/Grid'

const SideBar: React.FC = () => (
  <div className="sidebar">
    <Grid container direction="column">
      <ParametersTable />
    </Grid>
  </div>
)
export default SideBar
