import { Divider, Grid, Link, makeStyles, Typography } from '@material-ui/core'
import { FunctionComponent } from 'react'
import { SOCIALS } from '../global/appConstants'
import theme from '../global/theme'

const useStyles = makeStyles({
  footer: {
    minHeight: '10vh',
    position: 'sticky',
    backgroundColor: theme.palette.primary.main,
  },
  link: {
    color: theme.palette.grey[100],
    textAlign: 'left',
  },
  socials: {
    color: theme.palette.grey[100],
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing(1),
  },
  divider: {
    minHeight: '2px',
    width: '100%',
    backgroundColor: theme.palette.info.main,
  },
})

const Footer: FunctionComponent = () => {
  const classes = useStyles()
  return (
    <>
      <Divider className={classes.divider}></Divider>
      <Grid container className={classes.footer}>
        <Grid item xs={3} className={classes.socials}>
          <Typography variant='h4'>Socials</Typography>
        </Grid>
        <Grid item xs={1} className={classes.socials}>
          {Object.entries(SOCIALS).map((social) => (
            <Link 
              href={social[1]} 
              className={classes.link} 
              variant='h6'
              key={social[0]}
            >
              {social[0]}
            </Link>
          ))}
        </Grid>
      </Grid>
    </>
  )
}

export default Footer