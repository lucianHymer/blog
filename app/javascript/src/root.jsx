import React from 'react'
import PropTypes from 'prop-types'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'

import AppBar from './components/app_bar'
import AppBody from './components/app_body'
import MainPage from './components/main_page'

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
          <MainPage />
        </AppBody>
			</MuiThemeProvider>
    </div>
  )
}

export default Root
