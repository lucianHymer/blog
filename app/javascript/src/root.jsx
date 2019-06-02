import React from 'react'
import PropTypes from 'prop-types'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'

import { Grid, } from '@material-ui/core'

import AppBar from './components/app_bar'
import AppBody from './components/app_body'
import BoxCard from './components/box_card'

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
})

function Root(props){
  return (
    <div>
			<MuiThemeProvider theme={theme}>
				<AppBar />
        <AppBody>
          <div style={{flexGrow: 1,}}>
            <Grid container direction='row' justify='center' spacing={16}>
              <Grid item xs={10} sm={6} md={4} >
                <BoxCard />
              </Grid>
            </Grid>
          </div>
        </AppBody>
			</MuiThemeProvider>
    </div>
  )
}

export default Root
