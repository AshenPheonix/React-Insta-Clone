import React from 'react';
import PostsPage from './components/PostContainer/PostsPage'
import withAuth from './components/authentication/withAuthenticate'
import Login from './components/Login/Login'

const ComponentWithAuthenticate=withAuth(PostsPage)(Login)

export default class extends React.Component {
  render(){
    return (
      <ComponentWithAuthenticate />
    )
  }
}
