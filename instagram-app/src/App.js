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
      newComment:'',
      current:[]
    }
  }

  searchChange=e=>{
    let force=e.target.value
    this.setState(prevState=>({
      searching:force,
      current:prevState.data.filter(i=>i.username.includes(force))
    }))
  }

  componentDidMount(){
    if(localStorage.getItem('data')){
      let temp=JSON.parse(localStorage.getItem('data'))
      this.setState({data:temp,current:temp})
    }
    else
      this.setState({data:data,current:data})
  }

  componentDidUpdate(){
    if(this.state.current!==this.state.data && this.state.searching==='')
      this.setState({current:this.state.data})
      
    localStorage.setItem('data',JSON.stringify(this.state.data))
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
            searchFor={this.search}
          />
          <Posts 
            data={this.state.current} 
            like={this.like} 
            comment={this.comment}/>
        </IconContext.Provider>
      </div>
    );
  }

  like=data=>{
    this.setState((prevState, props) => ({  data:prevState.data.map( d => d.id===data?{...d,likes:d.likes+1}:d),
                                            current:prevState.data.map( d => d.id===data?{...d,likes:d.likes+1}:d)}))
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

  search=e=>{
    e.preventDefault();
    this.setState({
      searching:''
    })
  }
}
