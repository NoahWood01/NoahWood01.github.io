import { Grid } from '@material-ui/core'
import { FunctionComponent } from 'react'

type Props = {
  imagePath: string | null
}

const Section: FunctionComponent<Props> = ({ imagePath }) => {
  return (
    <Grid container>
      <Grid item xs={4}>

      </Grid>
      <Grid item xs={8}>

      </Grid>
    </Grid>
  )
}

export default Section