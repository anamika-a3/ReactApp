import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { RouteComponentProps } from 'react-router-dom'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import './Resource.css'

interface IUserSchema {
  id: number
  email: string
  first_name: string
  last_name: string
  avatar: string
}

interface Props extends RouteComponentProps {}

const AllUser: React.FC<Props> = ({ history, location, match }) => {
  const [users, setUsers] = useState<[]>([])

  useEffect(() => {
    usersGet()
  }, [])

  async function usersGet () {
    var response = axios.get(`https://reqres.in/api/users?page=2`)
    if ((await response).status === 200) {
      const data = await response
      setUsers(data.data.data)
    }
  }

  return (
    <div className='Paper-container'>
      {users.length &&
        users.map((user: IUserSchema) => (
          <Card className='card-resource'>
            <CardContent>
              <h2>User Id:{user.id}</h2>
              <img src={user.avatar} className='users-img' />
              <br />
              First Name: {user.first_name}
              Last Name: {user.last_name}
            </CardContent>
            <CardActions>
              <Button
                size='small'
                color='primary'
                onClick={() => {
                  history.push(`/single-user/` + user.id)
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

export default AllUser
