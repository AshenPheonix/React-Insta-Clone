import React, { Component } from 'react'
import User from './User'
import CommentBox from '../CommentSection/Comments'
import {FaRegHeart as Heart, FaRegComment as Comment} from 'react-icons/fa'
import './Posts.scss'
import {PostContainer} from '../../styled/PostCard'

export default class PostCard extends Component {
    
    render() {
        return (
            <PostContainer>
                <User thumb={this.props.postData.thumbnailUrl} user={this.props.postData.username}/>
                <img 
                    src={this.props.postData.imageUrl} 
                    alt={`By ${this.props.postData.username}`}
                    className='img-fluid mx-auto'
                />
                <section className="d-flex flex-column">
                    <section className="c-icons d-flex flex-row justify-content-start">
                        <section onClick={()=>this.props.like(this.props.post)}>
                            <Heart />
                        </section>
                        <section onClick={()=>this.props.comment(this.props.post)}>
                            <Comment/>
                        </section>
                    </section>
                    <p>
                        {this.props.postData.likes} likes
                    </p>
                </section>
                <CommentBox commentList={this.props.postData.comments}/>
            </PostContainer>
        )
    }
}
