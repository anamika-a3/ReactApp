import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, RouteComponentProps } from 'react-router-dom'
import SingleUser from './SingleUser'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import './Resource.css'
// import api from 'auth.api.ts'
interface ResourceSchema {
  id: number
  name: string
  year: string
  color: string
  pantone_value: string
}

interface Props extends RouteComponentProps {}

const Resource: React.FC<Props> = ({ history, location, match }) => {
  const [Resource, setResource] = useState<[]>([])

  async function getResource () {
    var response = axios.get('https://reqres.in/api/unknown')
    if ((await response).status === 200) {
      const data = await response
      setResource(data.data.data)
    }
  }

  useEffect(() => {
    getResource()
  }, [])

  return (
    <div className='Paper-container'>
      {Resource.length &&
        Resource.map((source: ResourceSchema) => (
          <Card
            className='card-resource'
            style={{ backgroundColor: `${source.color}` }}
          >
            <CardContent>
              <h2> Id:{source.id}</h2>
              <h3>Name:</h3> {source.name}
              {/* <h3>Year: {source.year}</h3>
              <h4>Resource: {source.color}</h4>
              <h4>Pantone_value: {source.pantone_value}</h4> */}
              <div className='color'></div>
            </CardContent>
            <CardActions>
              <Button
                variant='contained'
                size='small'
                color='primary'
                onClick={() => {
                  history.push(`/single-resource/` + source.id)
                }}
              >
                View
              </Button>
            </CardActions>
          </Card>
        ))}
    </div>
  )
}
export default Resource
