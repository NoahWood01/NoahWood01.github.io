import { Grid, makeStyles } from '@material-ui/core'
import { FunctionComponent } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import About from './pages/About'
import Home from './pages/Home'
import Trivia from './pages/Trivia'
import { PageTabs, usePageTabs } from './util'

const tabs: Record<string, string> = {
  [PageTabs.Home]: 'Home',
  [PageTabs.About]: 'About',
  [PageTabs.Trivia]: 'Trivia',
}

const useStyles = makeStyles({
  main: {
    display: 'flex',
    flex: '1',
    flexDirection: 'column',
    overflow: 'hidden',
    height: '100%',
  },
})

const MainPage: FunctionComponent = () => {
  const [handleTabChange, selectedTab] = usePageTabs()
  const classes = useStyles()

  const getPageToRender = (): JSX.Element => {
    if (selectedTab === PageTabs.Home.toString()) {
      return (<Home />)
    }
    else if (selectedTab === PageTabs.About.toString()) {
      return(<About />)
    }
    else {
      return(<Trivia />)
    }
  }

  return (
    <div className={classes.main}>
      <Grid container spacing={1}>
        <Navbar selectedTab={selectedTab} handleChange={handleTabChange} tabOptions={tabs}/>
        <Grid container >
          {getPageToRender()}
        </Grid>
        <Footer />
      </Grid>
    </div>
  )
}

export default MainPage