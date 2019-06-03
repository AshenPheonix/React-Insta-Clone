import React, { Component } from 'react'
import User from './User'
import CommentBox from '../CommentSection/Comments'
import {FaRegHeart as Heart, FaRegComment as Comment} from 'react-icons/fa'
import './Posts.scss'

export default class PostCard extends Component {
    constructor(props) {
        super(props)
        this.dataLink=this.props.postData
    }
    
    render() {
        console.log(this.props);
        return (
            <section className="postContainer d-flex flex-column p-1 mx-auto m-5">
                <User thumb={this.dataLink.thumbnailUrl} user={this.dataLink.username}/>
                <img 
                    src={this.dataLink.imageUrl} 
                    alt={`By ${this.dataLink.username}`}
                    className='img-fluid mx-auto'
                />
                <section className="c-icons d-flex flex-row justify-content-start">
                    <Heart />
                    <Comment/>
                </section>
                <CommentBox commentList={this.dataLink.comments}/>
            </section>
        )
    }
}
