import './header.scss'
import Grid from '@material-ui/core/Grid'
import DateTime from '../../components/DateTime/dateTime'
import Title from '../../components/Title/Title'
import BasicButton from '../../components/Button/button'
import LoginIcon from '@mui/icons-material/Login'
import LogoutIcon from '@mui/icons-material/Logout'
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation'

const Header: React.FC = () => (
  <div className="header">
    <Grid container direction="row">
      <Grid item xs={2}>
        <DateTime />
      </Grid>
      <Grid item xs={2}>
        <Title title="Hydro Power Plant Control" />
      </Grid>
      <Grid item xs={2}></Grid>
      <Grid item xs={2}></Grid>
      <Grid item xs={2}></Grid>
      <Grid item xs={2}>
        <BasicButton
          startIcon={<LoginIcon />}
          onClick={() => alert('Button Clicked!')}
          title="Login"
        />
        <BasicButton
          endIcon={<LogoutIcon />}
          onClick={() => alert('Button Clicked!')}
          title="Logout"
        />
        <BasicButton
          endIcon={<CancelPresentationIcon />}
          onClick={() => alert('Button Clicked!')}
          title="Exit"
        />
      </Grid>
    </Grid>
  </div>
)
export default Header
