import { AppBar, Box, Divider, Grid, Link, makeStyles, Tab, Tabs } from '@material-ui/core'
import { ChangeEvent, FunctionComponent } from 'react'
import theme from '../global/theme'
import { PageTabs } from './util'

const useStyles = makeStyles({
  navbar: {
    backgroundColor: theme.palette.primary.main,
    position: 'fixed',
  },
  selectedTab: {
    backgroundColor: theme.palette.primary.light,
  },
  title: {
    color: theme.palette.primary.contrastText,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing(1),
    fontWeight: 500,
    textDecoration: 'none',
  },
  box: {
  },
  divider: {
    minHeight: '2px',
    width: '100%',
    backgroundColor: theme.palette.info.main,
  },
})

type Props = {
  selectedTab:
    | PageTabs
    | string
  handleChange:
    | ((_event: ChangeEvent<unknown>, newValue: PageTabs) => void)
  tabOptions: Record<string, string>
}

const Navbar: FunctionComponent<Props> = ({selectedTab, handleChange, tabOptions}) => {
  const classes = useStyles()
  const fullUrl = window.location.href
  return (
    <AppBar className={classes.navbar}>
      <Grid container>
        <Grid item xs={5}>
          <Link 
            className={classes.title} 
            variant='h5' 
            href={fullUrl} 
            underline='none'
          >
            NOAH WOOD
          </Link>
        </Grid>
        <Grid item xs={7}>
          <Box className={classes.box}>
            <Tabs
              orientation='horizontal'
              value={selectedTab}
              onChange={handleChange}
              TabIndicatorProps={{
                style: { width: '100%', background: theme.palette.primary.main, zIndex: -1 },
              }}
            >
              {Object.entries(tabOptions).map(([key, label]) => (
                <Tab
                  label={label}
                  value={key}
                  key={key}
                  className={key === selectedTab ? classes.selectedTab : ''}
                  disabled={!label}
                />
              ))}
            </Tabs>
          </Box>
        </Grid>
      </Grid>
      <Divider className={classes.divider}></Divider>
    </AppBar>
  )
}

export default Navbar