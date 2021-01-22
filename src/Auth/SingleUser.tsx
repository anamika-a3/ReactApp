import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link, RouteComponentProps } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
// import './style.css'
import './SingleUser.css'

interface UserSchema {
  id?: number
  email?: string
  first_name?: string
  last_name?: string
  avatar?: string
}
interface IUrlParams {
  id: string
}
interface Props extends RouteComponentProps {}

const SingleUser: React.FC<Props> = ({ history, location, match }) => {
  const [user, setUser] = useState<UserSchema>({})
  const { id } = useParams<IUrlParams>()

  async function userGet () {
    try {
      var response = axios.get(`https://reqres.in/api/users/` + id)
      if ((await response).status === 200) {
        const data = await response
        console.log(data.data.data)
        setUser(data.data.data)
      }
    } catch (error) {
      console.log(error)
      console.log(error.response)
      // alert('Something went wrong')
      // history.push('/')
    }

    //let identity = id
    console.log('Id is ', id)
  }

  useEffect(() => {
    userGet()
  }, [])

  return !user.id ? (
    <div>No data found </div>
  ) : (
    <div className='users-container'>
      <Card className='users-card'>
        <div className='users-row'>
          <CardActionArea>
            <div className='users-col'>
              <CardMedia>
                <img src={user.avatar} className='users-img' />
              </CardMedia>
            </div>
          </CardActionArea>
          <div className='users-col'>
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                USER ID: {user.id}
              </Typography>
              <Typography variant='h6' color='textSecondary' component='h2'>
                NAME: {user.first_name} {user.last_name}
              </Typography>

              {user.email}
            </CardContent>

            <CardActions>
              <Button
                size='large'
                color='primary'
                variant='outlined'
                onClick={() => {
                  history.push('/profiles')
                }}
              >
                Back
              </Button>
              <Button
                size='large'
                color='primary'
                variant='outlined'
                onClick={() => {
                  history.push('/update-user')
                }}
              >
                Update
              </Button>
              <Button
                size='large'
                color='primary'
                variant='outlined'
                onClick={() => {
                  alert('user deleted!')
                }}
              >
                delete
              </Button>
              <Button
                size='large'
                color='primary'
                variant='outlined'
                onClick={() => {
                  history.push('/create-user')
                }}
              >
                create
              </Button>
            </CardActions>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default SingleUser
// <div className="">
//   <h1 style={{ textAlign: 'center' }}>Single User</h1>
//   {/* <p>{id}</p> */}
//   {!user.first_name ? (
//     <div>No data found </div>
//   ) : (
//     <div>
//       <table>
//         <tr>
//           <th>Id</th>
//           <th>Avatar</th>
//           <th>First Name</th>
//           <th>Last Name</th>
//           <th>Email</th>
//           <th>Button</th>
//         </tr>
//         <tr>
//           <td>{user.id}</td>
//           <td>
//             <img src={user.avatar} />
//           </td>
//           <td>{user.first_name}</td>
//           <td>{user.last_name}</td>
//           <td>{user.email}</td>
//           <td>
//             <button
//               className='primary'
//               onClick={() => {
//                 history.push('/update-user')
//               }}
//             >
//               Update
//             </button>
//             <button
//               className='secondary'
//               onClick={() => {
//                 alert('user deleted!')
//               }}
//             >
//               delete
//             </button>
//             <button
//               className='primary'
//               onClick={() => {
//                 history.push('/create-user')
//               }}
//             >
//               create
//             </button>
//           </td>
//         </tr>
//       </table>
//     </div>
//   )}
// </div>
