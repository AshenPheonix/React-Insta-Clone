import React, { Component } from 'react'
import './CommentModal.scss'

export default class Modal extends Component {
    render() {
        return (
            <section 
                className="modal fade" 
                id="comment-modal" 
                tabIndex="-1"
                aria-labelledby="Comment Modal"
                aria-hidden="true"
            >
                <section className="modal-dialog" role="document">
                    <section className="modal-content">
                        <section className="modal-header">
                            <h5 className="modal-title">Add Comment</h5>
                            <button className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </section>
                        <section className="modal-body">
                            <section className="container">
                                <textarea className="form-control" rows="10" placeholder="Comment Here" value={this.props.text} onChange={this.props.change}></textarea>
                            </section>
                        </section>
                        <section className="modal-footer">
                            <button
                                className="btn btn-close"
                                data-dismiss="modal"
                            >
                                No Comment
                            </button>
                            <button className="btn btn-save" onClick={this.props.add}>
                                Add Comment
                            </button>
                        </section>
                    </section>
                </section>
            </section>
        )
    }
}
