import React, { Component } from 'react'
import PT from 'prop-types'
import PostCard from './PostCard'
import './Posts.scss'

export default class Posts extends Component {
    render() {
        return (
            <section className="posts">
                {this.props.data.map((p,i)=>(
                    <PostCard postData={p} key={i}/>
                ))}
            </section>
        )
    }
}

Posts.propTypes={

}