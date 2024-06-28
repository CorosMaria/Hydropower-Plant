import './header.scss'
import Grid from '@material-ui/core/Grid'
import DateTime from '../../components/DateTime/dateTime'
import Title from '../../components/Title/Title'

const Header: React.FC = () => (
  <div className="header">
    <Grid container direction="row">
      <Grid item xs={2}>
        <DateTime />
      </Grid>
      <Grid item xs={10}>
        <Title title="Monitorizarea parametrilor dintr-o stație de uscare gaze naturale cu Trietilen Glycol" />
      </Grid>
    </Grid>
  </div>
)
export default Header
