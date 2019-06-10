import React, { Component } from 'react'
import User from './User'
import CommentBox from '../CommentSection/Comments'
import './Posts.scss'
import {PostContainer, PostImage,PostClosure,LikeButton,CommentButton,LikeNumber} from '../../styled/PostCard'

export default class PostCard extends Component {
    
    render() {
        return (
            <PostContainer>
                <User thumb={this.props.postData.thumbnailUrl} user={this.props.postData.username}/>
                <PostImage 
                    src={this.props.postData.imageUrl} 
                    alt={`By ${this.props.postData.username}`}
                />
                <PostClosure className="d-flex flex-column">
                    <section className="c-icons d-flex flex-row justify-content-start">
                        <section onClick={()=>this.props.like(this.props.post)}>
                            <LikeButton />
                        </section>
                        <section onClick={()=>this.props.comment(this.props.post)}>
                            <CommentButton/>
                        </section>
                    </section>
                    <LikeNumber>
                        {this.props.postData.likes} likes
                    </LikeNumber>
                </PostClosure>
                <CommentBox commentList={this.props.postData.comments}/>
            </PostContainer>
        )
    }
}
