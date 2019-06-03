import React from 'react';
import './App.css';
import Navigation from './components/SearchBar/SearchBar'
import data from './dummy-data'
import Post from './components/PostContainer/PostContainer'

export default class extends React.Component {
  constructor(props){
    super(props)
    this.state={
      searching:'',
      data:data
    }
  }

  searchChange=e=>{
    this.setState({
      searching:e.target.value
    })
  }

  render(){
    return (
      <div className="App container">
        <Navigation 
          searchValue={this.state.searching}  
          searchEdit={this.searchChange}  
        />
        {this.state.data.map((p,i)=><Post data={p} key={i}/>)}
      </div>
    );
  }
}
