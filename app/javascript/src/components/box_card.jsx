import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import CreateIcon from '@material-ui/icons/Create'

import EditableValue from 'src/components/editable_value'

const styles = (theme) => ({
  root: {
  },
  cardContent: {
    display: 'flex',
    padding: theme.spacing.unit,
  },
})

class BoxCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      boxName: "Box",
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    })
  }

  render() {
    const {
      classes,
    } =this.props

    return (
      <Card className={classes.root}>
        <CardContent className={classes.cardContent}>
          <Typography variant="h3">
            <EditableValue value={this.state.boxName} id="boxName" onChange={this.handleChange} />
          </Typography>
        </CardContent>
        <CardActions>
        </CardActions>
      </Card>
    )
  }
}

export default withStyles(styles)(BoxCard)
