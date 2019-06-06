import React,{ Component } from "react";

export default Comp => Auth =>(
    class extends Component{
        state={
            loggedIn:false
        }
        componentDidMount(){
            this.setState({loggedIn:localStorage.getItem('username')})
        }



        render(){
            if(this.state.loggedIn)
                return <Comp logout={this.logout}/>
            else
                return <Auth login={this.login}/>
        }

        login=(u,p)=>{
            if(u!=='' && p!==''){
                localStorage.setItem("username",u)
                this.setState({
                    loggedIn:true
                })
            }
        }

        logout=e=>{
            localStorage.removeItem('username')
            this.setState({
                loggedIn:false
            })
        }
    }
)