import React, { Fragment, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import api from '../utils/Api'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import { ButtonGroup } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Input from '../InputComponent'
import { Link, RouteComponentProps } from 'react-router-dom'
import TextField from '@material-ui/core/TextField'
// import { SpecialButton } from './SpecialButton'
// import classes from '.module.css'
// import './Cards.css'
import './Login.css'
import { onLogin } from './auth.api'
import { isBigIntLiteral } from 'typescript'

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  }
})

interface Props extends RouteComponentProps {}

// function Login(props:any){
//   const[newUser,setNewUser]=useState(false)
//   const[email,setEmail]=useState('')
//   const[password,setPassword]=useState('')
//   const[firstName,setFirstName]=useState('')
//   const[lastName,setLastName]=useState('')

export const Login: React.FC<Props> = ({ history, location, match }) => {
  // const fetchUsers = () => {
  //   // Where we're fetching data from
  //   // fetch(`https://reqres.in/login`)
  //   // We get the API response and receive data in JSON format...
  //   // .then(response => response.json())
  //   // ...then we update the users state
  //   // .then(data =>
  //   // this.setState({
  //   //   users: data,
  //   //   isLoading: false,
  //   // })
  //   //)
  //   // Catch any errors we hit and update the app
  //   // .catch(error => this.setState({ error, isLoading: false }));
  // }

  const [newUser, setNewUser] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [firstName, setFirstName] = useState('')
  // const [lastName, setLastName] = useState('')
  const [error, setError] = useState('')

  const login = async (event: React.FormEvent) => {
    event.preventDefault()
    const response = await onLogin({
      // firstName: '',
      // lastName: '',
      email: '',
      password: ''
    })
    // if (response && Response.error) {
    //   setError(response.error)
    // }
  }
  // let islogin: boolean

  async function handleLogin (event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    try {
      const response = await api.Login({ email: email, password: password })
      console.log(response)
      alert('Login Successful')
      history.push('dashboard')
    } catch (error) {
      console.log(error)
      console.log(error.response)
      alert('Wrong Credentials')
      history.push('/')
    }

    // // if ((await response).statusText === 'OK') {
    // //   const data = await response
    // //   alert('Login Successful')
    // //   console.log(data)
    // // } else {
    // //   console.log(response)
    // }
  }

  // async function handleRegistarion () {
  //   var response = api.Register({ email: email, password: password })
  //   if ((await response).statusText === 'OK') {
  //     const data = await response
  //     alert('User Registered Successfully!!')
  //     console.log(data)
  //   } else {
  //     console.log(response)
  //     alert(response)
  //   }
  //   handleLogin()
  // }
  //   const postId = 5
  const classes = useStyles()
  return (
    <div className='login'>
      <div className='card-content'>
        <h1>Login page</h1>
        <form onSubmit={handleLogin} className='formLayout'>
          <TextField
            id='outlined-basic'
            label='Enter Email'
            variant='outlined'
            type='email'
            placeholder='Required'
            value={email}
            onChange={e => setEmail(e.target.value)}
            className='input'
            required
          />

          <TextField
            id='outlined-basic'
            label='Enter password'
            variant='outlined'
            type='password'
            placeholder='Required'
            value={password}
            onChange={e => setPassword(e.target.value)}
            className='input'
            required
          />
          <Button variant='outlined' color='primary' type='submit'>
            Submit
          </Button>

          {/* <p className='txt1' onClick={()=>setNewUser(false)}>Already User? Login Here</p> */}

          {error.length > 0 && <p>{error}</p>}

          {/* <ButtonGroup
            variant='contained'
            color='primary'
            aria-label='outlined primary button group'
            onClick={() => {
              // api call
              // change to the about page
              history.push('profiles')
            }}
          >
            <Button>Sign Up Portal!</Button>
          </ButtonGroup> */}
        </form>
      </div>
    </div>
  )
}
