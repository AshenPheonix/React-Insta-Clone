import React from 'react';
import './App.css';
import Navigation from './components/SearchBar/SearchBar'
import data from './dummy-data'
import Posts from './components/PostContainer/PostContainer'
import {IconContext} from 'react-icons'
import $ from 'jquery'
import 'bootstrap/js/dist/modal'
import CommentModal from './components/Modals/CommentModal'

export default class extends React.Component {
  constructor(props){
    super(props)
    this.state={
      searching:'',
      data:[],
      user:'AshenPheonix',
      newComment:''
    }
  }

  searchChange=e=>{
    this.setState({
      searching:e.target.value
    })
  }

  componentDidMount(){
    this.setState({data:data})
  }

  render(){
    return (
      <div className="App container">
        <CommentModal
          add={this.add}
          text={this.state.newComment}
          change={this.commentChange}
        />
        <IconContext.Provider value={{size:'1.5em'}}>
          <Navigation 
            searchValue={this.state.searching}  
            searchEdit={this.searchChange}  
          />
          <Posts 
            data={this.state.data} 
            like={this.like} 
            comment={this.comment}/>
        </IconContext.Provider>
      </div>
    );
  }

  like=data=>{
    this.setState((prevState, props) => ({ data:prevState.data.map( d => d.id===data?{...d,likes:d.likes+1}:d)}))
  }
  comment=data=>{
    this.setState({commentingOn:data})
    $('#comment-modal').modal('toggle')
  }
  commentChange=e=>{
    this.setState({
      newComment:e.target.value
    }) 
  }
  add=data=>{
    $('#comment-modal').modal('toggle')
    this.setState( prevState => ({ 
      data:prevState.data.map( d => 
          d.id === prevState.commentingOn ? 
            {...d,comments:d.comments.concat({text:prevState.newComment,username:prevState.user})}
            :d
          ),
      newComment:''
  }))
  }
}
