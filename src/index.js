import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom'
import Home from './home'
import ExerciseA from './exercises/a'
import ExerciseB from './exercises/b'
import Sandbox from './sandbox'

const routing = (
  <Router>
    <nav>
      <ul>
        <li className='title'>
          <NavLink activeClassName="active" to="/">
            <h1 href='#'>react hooks workshop</h1>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/exercise-a">
            exercise a
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/exercise-b">
            exercise b
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/sandbox">
            sandbox
          </NavLink>
        </li>
      </ul>
    </nav>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/exercise-a" component={ExerciseA} />
      <Route path="/exercise-b" component={ExerciseB} />
      <Route path="/sandbox" component={Sandbox} />
    </Switch>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))
