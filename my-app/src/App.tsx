import './App.css'
import Header from './layout/Header/header'
import Content from './layout/Content/content'
import SideBar from './layout/Sidebar/sidebar'
import Grid from '@material-ui/core/Grid'

function App() {
  return (
    <div className="App">
      <Grid container>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={1}>
          <SideBar />
        </Grid>
        <Grid item xs={11}>
          <Content />
        </Grid>
      </Grid>
    </div>
  )
}

export default App
