import * as React from 'react'
import Button from '@material-ui/core/Button'
import { ButtonGroup } from '@material-ui/core'
import { RouteComponentProps } from 'react-router-dom'
import './Home.css'

interface Props extends RouteComponentProps {}

export const Home: React.FC<Props> = ({ history, location, match }) => {
  console.log(match, location)

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-1'>
          <div className='button'>
            <ButtonGroup
              variant='contained'
              color='primary'
              aria-label='outlined primary button group'
              onClick={() => {
                history.push('/register')
              }}
            >
              <Button>Sign Up Portal!</Button>
            </ButtonGroup>
          </div>
        </div>
        <div className='col-2'>
          <div className='button'>
            <ButtonGroup
              variant='contained'
              color='secondary'
              aria-label='outlined primary button group'
              onClick={() => {
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
