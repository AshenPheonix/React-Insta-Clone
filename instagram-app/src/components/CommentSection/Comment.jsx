import React from 'react'
import {CommentWrap,CommentText,CommentUser} from '../../styled/CommentBox'

export default function(props){
    return (
        <CommentWrap
        >
            <CommentText>
                <CommentUser className="bold">@{props.data.username}</CommentUser> {props.data.text}
            </CommentText>
        </CommentWrap>
    )
}