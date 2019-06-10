import React, { Component } from 'react'
import './Posts.scss'
import {UserLogo, UserHead} from '../../styled/PostCard'

export default class User extends Component {
    render() {
        return (
            <UserHead>
                {this.props.thumb &&
                    <UserLogo src={this.props.thumb} alt={`Thumbnail ${this.props.thumb}`}/>
                }
                <p className="p-1 mt-2">
                    @{this.props.user}
                </p>
            </UserHead>
        )
    }
}
