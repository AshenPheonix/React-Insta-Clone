import React from 'react';
import './App.css';
import Navigation from './components/SearchBar/SearchBar'
import data from './dummy-data'
import Posts from './components/PostContainer/PostContainer'
import {IconContext} from 'react-icons'

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
        <IconContext.Provider value={{size:'1.5em'}}>
          <Navigation 
            searchValue={this.state.searching}  
            searchEdit={this.searchChange}  
          />
          <Posts data={this.state.data} like={this.like}/>
        </IconContext.Provider>
      </div>
    );
  }

  like=data=>{
    this.setState((prevState, props) => ({ data:prevState.data.map( d => d===data?{...d,likes:d.likes+1}:d)}))
  }
}
