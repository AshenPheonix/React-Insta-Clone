import React, { Component } from 'react'
import PT from 'prop-types'
import User from './User'
import CommentBox from '../CommentSection/Comments'
import {FaRegHeart as Heart, FaRegComment as Comment} from 'react-icons/fa'
import './Posts.scss'

export default class Post extends Component {
    render() {
        console.log(this.props.data)
        return (
            <section className="postContainer d-flex flex-column p-1 mx-auto m-5">
                <User thumb={this.props.thumbnailUrl} user={this.props.username}/>
                <img src={this.props.imageUrl} alt={this.props.alt}/>
                <section className="c-icons d-flex flex-row justify-content-start">
                    <Heart />
                    <Comment />
                </section>
                <CommentBox comments={this.props.comments}/>
            </section>
        )
    }
}

Post.propTypes={

}