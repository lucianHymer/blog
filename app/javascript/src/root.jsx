import React from 'react'
import PropTypes from 'prop-types'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'

import { Grid, } from '@material-ui/core'

import AppBar from './components/app_bar'
import AppBody from './components/app_body'
import posts from '../blogPosts/posts'

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
            <Grid container direction='row' justify='center' spacing={2}>
              <Grid item xs={12} sm={10} md={8} xl={6} >
                {posts}
              </Grid>
            </Grid>
          </div>
        </AppBody>
			</MuiThemeProvider>
    </div>
  )
}

export default Root
