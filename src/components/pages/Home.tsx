import { Grid, makeStyles, Typography } from '@material-ui/core'
import { FunctionComponent } from 'react'
import portrait from '../../pics/noah.png'
import theme from '../../global/theme'

const useStyles = makeStyles({
  body: {
    margin: theme.spacing(0),
    display: 'flex',
    width: '100%',
    minHeight: '110vh',
  },
  firstContent: {
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing(2),
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.primary.contrastText,
  },
  sideContent: {
    backgroundColor: theme.palette.primary.light,
    height: '100%',
  },
  mainContent: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.secondary.main,
  },
  name: {
    display: 'flex',
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  portraitContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  portrait: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const Home: FunctionComponent = () => {
  const classes = useStyles()
  return (
    <Grid className={classes.body} container spacing={3}>
        <Grid item xs={1} className={classes.sideContent}/>
        <Grid item xs={10} className={classes.mainContent}>
          <Grid container spacing={2}>
            <Grid item xs={4} className={classes.firstContent}>
              <Grid container className={classes.portraitContent}>
                <img src={portrait} className={classes.portrait} alt='portrait'></img>
                <Typography variant='h3' className={classes.name}>Noah Wood</Typography>
              </Grid>
            </Grid>
            <Grid item xs={7} className={classes.firstContent}>
              <Typography variant='h5'>
                Hi! I am a Software Engineer focusing on 
                various parts of development including Full-Stack Web, Game Development, Computer Vision, 
                and Machine Learning.
              </Typography>
              <p></p>
              <Typography variant='h5'>
                The languages and technologies I particularly enjoy consist of Python, Javascript
                / Typescript, React. Some other niche technologies I've used include Robot Operating 
                System (ROS), Unreal Engine, and Godot Engine.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1} className={classes.sideContent}/>
    </Grid>
  )
}

export default Home