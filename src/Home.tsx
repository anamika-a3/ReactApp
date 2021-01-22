import * as React from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'
import { SpecialButton } from './SpecialButton'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import { ButtonGroup } from '@material-ui/core'
import './Home.css'
import { url } from 'inspector'
// import './Sign-up'
// import './Login'
// import { SignUp } from './Sign-up'
interface Props extends RouteComponentProps {}
// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       display: 'flex',
//       flexWrap: 'wrap',
//       '& > *': {
//         margin: theme.spacing(1),
//         width: theme.spacing(30),
//         height: theme.spacing(30)
//       }
//     }
//   })
// )

export const Home: React.FC<Props> = ({ history, location, match }) => {
  console.log(match, location)
  // const classes = useStyles()
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-1'>
          <div className='button-signUp'>
            <ButtonGroup
              variant='contained'
              color='primary'
              aria-label='outlined primary button group'
              onClick={() => {
                // api call
                // change to the about page
                history.push('/register')
              }}
            >
              <Button>Sign Up Portal!</Button>
            </ButtonGroup>
          </div>
        </div>
        <div className='col-2'>
          <div className='button-login'>
            <ButtonGroup
              variant='contained'
              color='secondary'
              aria-label='outlined primary button group'
              onClick={() => {
                // api call
                // change to the about page
                history.push('/login')
              }}
            >
              <Button>Sign In Portal!</Button>
            </ButtonGroup>
          </div>
        </div>
      </div>
    </div>
  )
}
