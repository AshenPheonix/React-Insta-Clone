import React, { Component } from 'react'
import User from './User'
import CommentBox from '../CommentSection/Comments'
import {FaRegHeart as Heart, FaRegComment as Comment} from 'react-icons/fa'
import './Posts.scss'

export default class PostCard extends Component {
    
    render() {
        return (
            <section className="postContainer d-flex flex-column p-1 mx-auto m-5">
                <User thumb={this.props.postData.thumbnailUrl} user={this.props.postData.username}/>
                <img 
                    src={this.props.postData.imageUrl} 
                    alt={`By ${this.props.postData.username}`}
                    className='img-fluid mx-auto'
                />
                <section className="d-flex flex-column">
                    <section className="c-icons d-flex flex-row justify-content-start">
                        <section onClick={()=>this.props.like(this.props.postData)}>
                            <Heart />
                        </section>
                        <section onClick={this.comment}>
                            <Comment/>
                        </section>
                    </section>
                    <p>
                        {this.props.postData.likes} likes
                    </p>
                </section>
                <CommentBox commentList={this.props.postData.comments}/>
            </section>
        )
    }
}
