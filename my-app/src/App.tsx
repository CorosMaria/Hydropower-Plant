import './App.css'
import Header from './layout/Header/header'
import SideBar from './layout/Sidebar/sidebar'
import Grid from '@material-ui/core/Grid'
import Panel from './components/Panel/panel'
import React from 'react'
import { MainState } from './models/models'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionsCreators } from './redux'

type Props = {
}

const App: React.FC<Props> = (props) => {
  const dispatch = useDispatch()

  const { loadData } = bindActionCreators(
    actionsCreators,
    dispatch
  )

  // setInterval(() => {
  //   //loadData()
  //   console.debug(data)
  // }, 2000)

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
          <div className="content">
            <Grid container direction="row">
              <Grid item xs={12}>
                <Panel />
              </Grid>
              <Grid item xs={3}>
                Content
              </Grid>
              <Grid item xs={6}>
                Content
              </Grid>
              <Grid item xs={3}>Content</Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}


export default App