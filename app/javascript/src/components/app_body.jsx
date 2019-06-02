import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

const styles = (theme) => ({
  root: {
    padding: theme.spacing.unit * 2,
  },
})

function AppBody(props){
  const {
    classes,
    children,
  } = props

  return (
    <div className={classes.root}>
      {children}
    </div>
  )
}

export default withStyles(styles)(AppBody)
