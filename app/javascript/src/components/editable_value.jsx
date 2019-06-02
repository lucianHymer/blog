import React from 'react'
import PropTypes from 'prop-types'
import { Tooltip, IconButton, } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import CreateIcon from '@material-ui/icons/Create'
import DoneIcon from '@material-ui/icons/Done'
import HistoryIcon from '@material-ui/icons/History'

import Input from 'src/components/input'

const styles = (theme) => ({
  root: {
  },
  input: {
  },
  noXsSpan: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'inline',
    },
  },
})

class EditableValue extends React.Component {
  constructor(props) {
    super(props)
    this.inputRef = null
    this.state = { 
      inEditMode: false,
      history: [],
    }
  }

  enterEditMode = () => {
    this.setState({
      inEditMode: true,
      currentValue: this.props.value,
    })
  }

  focusInput = () => {
    if (this.inputRef) {
      this.inputRef.focus()
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.inEditMode && this.state.inEditMode)
      this.focusInput()
  }

  handleEditDone = (event) => {

    this.setState( prevState => {
      const previousValue = this.props.value
      let history

      if (previousValue !== this.state.currentValue){
        this.props.onChange({
          target: {
            id: this.props.id,
            value: this.state.currentValue,
          }
        })
        history = [...prevState.history, previousValue]
      } else {
        history = prevState.history
      }

      return {
        inEditMode: false,
        history: history,
      }
    })

    event.preventDefault()
  }

  handleRevert = () => {
    this.setState( prevState => {
      const history = [...prevState.history]
      const previousValue = history.pop()

      this.props.onChange({
        target: {
          id: this.props.id,
          value: previousValue,
        }
      })

      return {
        inEditMode: false,
        history: history,
      }
    })
  }

  handleChange = (event) => {
    this.setState({
      currentValue: event.target.value,
    })
  }

    render() {
    const {
      classes,
      id,
      label,
      value,
    } = this.props

    const previousValue = this.state.history[this.state.history.length - 1]

    let field
    if (this.state.inEditMode) {
      field = <form onSubmit={this.handleEditDone} onBlur={this.handleEditDone}>
        <Input
          id={id}
          label={label}
          value={this.state.currentValue}
          onChange={this.handleChange}
          inputProps={{className: classes.input}}
          inputRef={ (ref) => this.inputRef = ref }
        />
        <span className={classes.noXsSpan}>
          <Tooltip title="Done">
            <IconButton component={ (props) => <button {...props} type="submit" /> }>
              <DoneIcon />
            </IconButton>
          </Tooltip>
        </span>
      </form>
    } else {
      field = <span>
        <span onClick={this.enterEditMode}>
          {value}
          <Tooltip title="Edit">
            <IconButton>
              <CreateIcon />
            </IconButton>
          </Tooltip>
        </span>
        <span className={classes.noXsSpan}>
          { this.state.history.length > 0 ?
            <Tooltip title={`Revert to Previous: ${previousValue}`}>
              <IconButton onClick={this.handleRevert} >
                <HistoryIcon />
              </IconButton>
            </Tooltip> : ''
          }
        </span>
      </span>

    }

    return (
      field
    )
  }
}

export default withStyles(styles)(EditableValue)
