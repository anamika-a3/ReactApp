import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link, RouteComponentProps } from 'react-router-dom'

import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import './SingleResource.css'
// import classes from '*.module.css'
// import './style.css'
// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345
//   }
// })
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > *': {
        // margin: theme.spacing(10),
        width: theme.spacing(35),
        height: theme.spacing(10)
      }
    }
  })
)

interface ResourceSchema {
  id?: number
  name?: string
  year?: string
  color?: string
  pantone_value?: string
}
interface IUrlParams {
  id: string
}
interface Props extends RouteComponentProps {}

export const SingleResource: React.FC<Props> = ({
  history,
  location,
  match
}) => {
  const [resource, setResource] = useState<ResourceSchema>({})
  const { id } = useParams<IUrlParams>()

  async function getResource () {
    try {
      const response = await axios.get(`https://reqres.in/api/unknown/` + id)
      const data = await response
      setResource(data.data.data)
      // alert('Successful')
    } catch (error) {
      console.log(error)
      console.log(error.response)
      // alert('Something went wrong')
      // history.push('/')
    }

    // let identity = id
    console.log('Id is ', id)
  }

  useEffect(() => {
    getResource()
  }, [])

  const classes = useStyles()

  return (
    <div className='single-resource-container'>
      {/* <Paper elevation={5} className='Paper'> */}
      <Card className='card'>
        <CardContent
          className='text'
          style={{ backgroundColor: `${resource.color}` }}
        >
          <h2>Resource Id:{resource.id}</h2>
          <h2>Name: {resource.name}</h2>
          <h3>Year: {resource.year}</h3>
          <h4>Resource: {resource.color}</h4>
          <h4>Pantone_value: {resource.pantone_value}</h4>
          <div className='color'></div>
        </CardContent>
        <CardActions>
          <Button
            size='small'
            color='primary'
            onClick={() => {
              history.push('/unknown')
            }}
          >
            Back
          </Button>
        </CardActions>
      </Card>
      {/* </Paper> */}
    </div>
  )
}
