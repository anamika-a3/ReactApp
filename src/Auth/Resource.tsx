import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { RouteComponentProps } from 'react-router-dom'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import './Resource.css'

interface IResourceSchema {
  id: number
  name: string
  year: string
  color: string
  pantone_value: string
}

interface Props extends RouteComponentProps {}

const Resource: React.FC<Props> = ({ history }) => {
  const [Resource, setResource] = useState<[]>([])

  async function getResource () {
    const response = await axios.get('https://reqres.in/api/unknown')
    try {
      const data = await response
      setResource(data.data.data)
    } catch (error) {
      console.log(error)
      console.log(error.response)
      alert('Somethin went WRONG!')
      history.push('/')
    }
  }

  useEffect(() => {
    getResource()
  }, [])

  return (
    <div className='Paper-container'>
      {Resource.length &&
        Resource.map((source: IResourceSchema) => (
          <Card
            className='card-resource'
            style={{ backgroundColor: `${source.color}` }}
          >
            <CardContent>
              <h2> Id:{source.id}</h2>
              <h3>Name:</h3> {source.name}
              <h3>Year: </h3>
              {source.year}
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
