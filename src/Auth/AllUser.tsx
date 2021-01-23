import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { RouteComponentProps } from 'react-router-dom'
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

  // async function usersGetById (id: number | undefined) {
  //   var response = axios.get(`https://reqres.in/api/users?page=${id}`)
  //   if ((await response).status === 200) {
  //     const data = await response
  //     setUsers(data.data.data)
  //   }
  //}

  useEffect(() => {
    usersGet()
  }, [])

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
              {/* <h4>Resource: {source.color}</h4>
            <h4>Pantone_value: {source.pantone_value}</h4> */}
              {/* <div className='color'></div> */}
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

// <div>
//   {users ? (
//     <div>
//       <h1 style={{ textAlign: 'center' }}>Users List</h1>
//       <table style={{ top: '87%' }}>
//         <tr>
//           <th>Id</th>
//           <th>Avatar</th>
//           <th>First Name</th>
//           <th>Last Name</th>
//           <th>Email</th>
//           <th>ACTION</th>
//         </tr>
//         {users.length &&
//           users.map((user: UserSchema) => (
//             <div>
//               <tr>
//                 <td>{user.id}</td>
//                 <td>
//                   <img src={user.avatar} />
//                 </td>
//                 <td>{user.first_name}</td>
//                 <td>{user.last_name}</td>
//                 <td>{user.email}</td>
//                 <td>
//                   <button
//                     onClick={() => {
//                       // usersGetById(user.id)
//                       history.push(`/single-user/${user.id}`)
//                       // <SingleUser id={user.id}></SingleUser>
//                     }}
//                   >
//                     click me
//                   </button>
//                 </td>
//               </tr>
//             </div>
//           ))}
//       </table>
//     </div>
//   ) : (
//     <div>Not Found !!</div>
//   )}
// </div>
