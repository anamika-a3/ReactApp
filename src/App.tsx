import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home } from './Home'
// import { About } from './About'
import Post from './Post'
import { Login } from './Auth/Login'
import { NewUser } from './Auth/newUser'
import AllUser from './Auth/AllUser'
import SingleUser from './Auth/SingleUser'
import { Update } from './Auth/Update'
import { Create } from './Auth/Create'
import Resource from './Auth/Resource'
import { Dashboard } from './Auth/Dashboard'
import { Delay } from './Auth/Delay'
import { SingleResource } from './Auth/SingleResource'
// import {SignUp} from './Auth/SignUp'
// setup
// create routes
// change routes
// route params

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' exact component={Login} />
          <Route
            path='/register'
            exact
            component={NewUser}
            // component={(props: any) => <SignUp props={props} />}
          />
          <Route path='/profiles' exact component={AllUser} />
          <Route path='/single-user/:id' exact component={SingleUser} />
          <Route path='/update-user' exact component={Update} />
          <Route path='/create-user' exact component={Create} />
          <Route path='/unknown' exact component={Resource} />
          <Route path='/single-resource/:id' exact component={SingleResource} />
          <Route path='/dashboard' exact component={Dashboard} />
          <Route path='/delay' exact component={Delay} />
          <Route path='/' render={() => <div>404</div>} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
