import React, { Component } from 'react'
import './Login.scss'

export default class Login extends Component {
    state={
        username:'',
        pass:''
    }

    render() {
        return (
            <section className="login container">
                <fieldset 
                    className="d-flex flex-column mt-2"
                >
                    <legend>Login</legend>
                    <div className="form-group row">
                        <label htmlFor="username" className="col-form-label col-2">
                            User: 
                        </label>
                        <div className="col-10">
                            <input 
                                type="text" 
                                name="username" 
                                value={this.state.username} 
                                onChange={this.formEdit}
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="password" className="col-form-label col-2">
                            Password: 
                        </label>
                        <div className="col-10">
                            <input 
                                type="password" 
                                name="pass" 
                                value={this.state.pass} 
                                onChange={this.formEdit}
                                className="form-control"
                            />
                        </div>
                    </div>
                    <button 
                        className="btn loginBtn" 
                        onClick={()=>this.props.login(this.state.username,this.state.pass)}
                    >
                        Login
                    </button>
                </fieldset>
            </section>
        )
    }

    formEdit=e=>{
        this.setState({
            [e.target.name]:e.target.value
        })
        
    }
}
