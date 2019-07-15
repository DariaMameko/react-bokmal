/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import AllPage from './components/pages/all'
import ChildrenPage from './components/pages/children'
import './assets/styles/main.scss';

const App = () => {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={AllPage}/>
          <Route path='/child' component={ChildrenPage}/>
        </Switch>
      </Router>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));
