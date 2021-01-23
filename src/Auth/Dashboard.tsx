import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'

import Button from '@material-ui/core/Button'
import { ButtonGroup } from '@material-ui/core'

interface Props extends RouteComponentProps {}

export const Dashboard: React.FC<Props> = ({ history, location, match }) => {
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
                history.push('/unknown')
              }}
            >
              <Button>View Resources</Button>
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
                history.push('/profiles')
              }}
            >
              <Button>View Profiles</Button>
            </ButtonGroup>
          </div>
        </div>
      </div>
    </div>
  )
}
