import React from 'react'
import PropTypes from 'prop-types'

import { Grid, Hidden, } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import posts from '../../blogPosts/posts'
import About from '../../blogPosts/about'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  post: {
    width: '100%'
  },
}))

function Root(props){
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container wrap='nowrap' alignItems='flex-start' direction='row' justify='space-evenly' spacing={2}>
        <Grid container item xs={12} md={9} direction='column' alignItems='center' justify='flex-start' spacing={2} >
          {posts.map( post => 
            <Grid item className={classes.post} key={post.key} xs={12} >
              {post}
            </Grid>
          )}
          <Hidden mdUp>
            <Grid item className={classes.post} xs={12}>
              <About />
            </Grid>
          </Hidden>
        </Grid>
        <Hidden smDown>
          <Grid item md={3}>
            <About />
          </Grid>
        </Hidden>
      </Grid>
    </div>
  )
}

export default Root
