import React, {
    Component
} from "react";
import {
    Redirect,
    Route
} from 'react-router-dom'

// export default ({component:Comp, ...rest}) =>(
export default class extends Component {
    constructor({props,...rest}) {
        super(props)
        this.state = {
            loggedIn: false
        }
    }
    componentDidMount() {
        this.setState({loggedIn:localStorage.getItem('username')})
    }

    render() {
        let Comp=this.props.component
        return ( 
            <Route 
                {...this.props.rest}
                render={props=>(
                    this.state.loggedIn?(
                        <Comp
                            logout={this.logout}
                        />
                    ):(
                        <Redirect 
                            to={{
                                pathname:'/login',
                                state:{from:this.props.location}
                            }}
                        />
                    )
                )}
            />
        )
    }
    logout = e => {
        localStorage.removeItem('username')
        this.setState({
            loggedIn: false
        })
    }
}