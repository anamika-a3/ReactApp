import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import './Post.css'
const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
})

export default function Post () {
  const classes = useStyles()

  return (
    <div className='post-container'>
      <div className='post'>
        <br />
        <br />
        <h1>PROFILE LIST</h1>
        <div className='profiles'>
          <Card className={classes.root}>
            <CardActionArea>
              {/* <CardMedia
          className={classes.media}
          image='/static/images/cards/contemplative-reptile.jpg'
          title='Contemplative Reptile'
        /> */}
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  Name
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Email id
                </Typography>
              </CardContent>
            </CardActionArea>
            {/* <CardActions>
        <Button size='small' color='primary'>
          Share
        </Button>
        <Button size='small' color='primary'>
          Learn More
        </Button>
      </CardActions> */}
          </Card>
          <Card className={classes.root}>
            <CardActionArea>
              {/* <CardMedia
          className={classes.media}
          image='/static/images/cards/contemplative-reptile.jpg'
          title='Contemplative Reptile'
        /> */}
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  Name
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Email id
                </Typography>
              </CardContent>
            </CardActionArea>
            {/* <CardActions>
        <Button size='small' color='primary'>
          Share
        </Button>
        <Button size='small' color='primary'>
          Learn More
        </Button>
      </CardActions> */}
          </Card>
        </div>
      </div>
    </div>
  )
}
