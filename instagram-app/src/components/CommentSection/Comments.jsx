import React, { Component } from 'react'
import Comment from './Comment'
import './Comments.scss'

export default class CommentContainer extends Component {
    render() {
        return (
            <section className="commentBox">
                {this.props.commentList.map((c,i)=>{
                    return <Comment data={c} key={i}/>
                })}
            </section>
        )
    }
}
