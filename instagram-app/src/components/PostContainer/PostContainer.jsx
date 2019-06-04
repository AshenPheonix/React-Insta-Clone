import React, { Component } from 'react'
// import PT from 'prop-types'
import PostCard from './PostCard'
import './Posts.scss'

export default class Posts extends Component {
    render() {
        return (
            <section className="posts">
                {this.props.data.map(p=>(
                    <PostCard 
                        postData={p} 
                        key={p.id}
                        post={p.id}
                        like={this.props.like}
                        comment={this.props.comment}
                    />
                ))}
            </section>
        )
    }
}

Posts.propTypes={

}