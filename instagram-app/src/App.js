import React from 'react';
import PostsPage from './components/PostContainer/PostsPage'
import PrivateRoute from './components/authentication/withAuthenticate'
import Login from './components/Login/Login'
import {BrowserRouter as Router,Route, Link, Redirect} from 'react-router-dom'

export default class extends React.Component {
  render(){
    return (
      <Router>
        <PrivateRoute path='/' component={PostsPage}/>
        <Route path='/login' component={Login}/>
      </Router>
    )
  }
}