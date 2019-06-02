import React from 'react'
import PropTypes from 'prop-types'
import { TextField, } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = (theme) => ({
  root: {
  },
})

class Input extends React.Component {
  render() {
    const {
      classes,
      onChange,
      id,
      label,
      value,
      onBlur,
      inputRef,
      inputProps,
    } = this.props

    return (
      <TextField
        id={id}
        label={label}
        value={value}
        onChange={onChange}
        className={classes.root}
        inputProps={inputProps}
        onBlur={onBlur}
        inputRef={inputRef}
      />
    )
  }
}

export default withStyles(styles)(Input)
