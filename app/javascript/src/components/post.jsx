import React from 'react'
import PropTypes from 'prop-types'
import { Paper, Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import CreateIcon from '@material-ui/icons/Create'

import EditableValue from 'src/components/editable_value'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1),
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
}))

function Post(props){
  const {
    title,
    children,
  } = props

  // handleChange = (event) => {
  //   this.setState({
  //     [event.target.id]: event.target.value,
  //   })
  // }

  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography className={classes.title} variant="h3">
        {title} 
      </Typography>
      <div className={classes.content}>
        {children}
      </div>
    </Paper>
  )
}

export default Post
