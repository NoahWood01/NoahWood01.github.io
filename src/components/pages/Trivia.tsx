import { Grid, makeStyles, Typography } from '@material-ui/core'
import { FunctionComponent } from 'react'
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
})

const Trivia: FunctionComponent = () => {
  const classes = useStyles()
  return (
    <Grid className={classes.body} container spacing={3}>
        <Grid item xs={1} className={classes.sideContent}/>
          <Grid item xs={10} className={classes.mainContent}>
            <Grid className={classes.firstContent}>
              <Typography variant='h5'>Much Empty</Typography>
              <Typography variant='h5'>I will eventually post fun facts about myself here.</Typography>
            </Grid>
          </Grid>
        <Grid item xs={1} className={classes.sideContent}/>
    </Grid>
  )
}

export default Trivia