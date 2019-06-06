import React, { Component } from 'react'
import './Posts.scss'

export default class User extends Component {
    render() {
        return (
            <section className="d-flex user-head align-items-center">
                {this.props.thumb &&
                    <img src={this.props.thumb} alt={`Thumbnail ${this.props.thumb}`} className="icon"/>
                }
                <p className="p-1 mt-2">
                    @{this.props.user}
                </p>
            </section>
        )
    }
}
