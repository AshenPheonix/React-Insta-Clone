import React from 'react'
import User from '../PostContainer/User'

export default function(props){
    return (
        <section
            className="d-flex flex-wrap comment mx-auto "
        >
            <section className="comment-text">
                <span className="bold">@{props.data.username}</span> {props.data.text}
            </section>
        </section>
    )
}