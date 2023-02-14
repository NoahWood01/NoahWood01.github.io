import { makeStyles } from '@material-ui/core'
import './App.css'
import MainPage from './components/MainPage'

const useStyles = makeStyles({
  app: {
    textAlign: 'center',
  }
})

function App() {
  const classes = useStyles()
  return (
    <div className={classes.app}>
      <MainPage />
    </div>
  );
}

export default App
