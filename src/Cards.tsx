import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import { Link, RouteComponentProps } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import Input from './InputComponent'
import './Cards.css'

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  }
})
export default function ImgMediaCard () {
  const classes = useStyles()
  return (
    <div className='card-content'>
      <Card className={classes.root}>
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            <h2 className='title'>REACT APP</h2>
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>

        <div className='input-section'>
          <Input></Input>
        </div>
        <CardActions>
          <div className='submit-button'>
            <Button variant='outlined' color='primary'>
              SUBMIT
            </Button>
          </div>
        </CardActions>
      </Card>
    </div>
  )
}
