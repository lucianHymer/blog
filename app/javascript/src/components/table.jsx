import React from 'react'
import PropTypes from 'prop-types'
import { Table as MuiTable, TableBody, TableRow, TableHead, TableCell, } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    width: '20%',
  },
}))

function BodyCell(props){
  const {
    row,
    column
  } = props

  const value = row[column.name]

  const contents = typeof column.customBodyCellRender === "function" ?
    column.customBodyCellRender(value, row, column) : value

  return (
    <TableCell>{contents}</TableCell>
  )
}

function Table(props){
  const {
    columns,
    data,
    idProp,
  } = props

  const classes = useStyles();

  return (
    <MuiTable className={classes.root}>
      <TableHead>
        <TableRow>
        {columns.map( column =>
          <TableCell key={`${column.name}-header`}>{column.label}</TableCell>
        )}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map( row =>
          <TableRow key={row[idProp]}>
            {columns.map( column =>
              <BodyCell key={`${column.name}-{row[idProp]}`} row={row} column={column} />
            )}
          </TableRow>
        )}
      </TableBody>
    </MuiTable>
  )
}

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    label: PropTypes.node.isRequired,
  })).isRequired,
  idProp: PropTypes.string,
}

Table.defaultProps = {
  idProp: 'id',
}

export default Table
