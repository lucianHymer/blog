import React from 'react'
import PropTypes from 'prop-types'
import { AppBar as MuiAppBar, Toolbar, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = (theme) => ({
  root: {
    width: '100%',
  },
  title: {
    display: 'block',
    // display: 'none',
    // [theme.breakpoints.up('sm')]: {
    //   display: 'block',
    // },
  },
})

class AppBar extends React.Component {
  render() {
    const {
      classes,
    } = this.props
    return (
      <div className={classes.root}>
        <MuiAppBar position="static">
          <Toolbar>
            <Typography className={classes.title} variant="h6" color="inherit" noWrap>
              Packed
            </Typography>
          </Toolbar>
        </MuiAppBar>
      </div>
    )
  }
}

export default withStyles(styles)(AppBar)
