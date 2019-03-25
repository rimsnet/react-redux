import React from 'react'
import { connect } from 'react-redux'

class CommentForm extends React.Component {

    handlerForm = (e) => {
        e.preventDefault();
        this.props.dispatch({
            type: 'ADD_COMMENT',
            data: this.getComment.value
        })
    }

    render() {
        return (
            <>
                <h4>Comments</h4>
                <form onSubmit={this.handlerForm}>
                    <input type="text" ref={(input) => this.getComment = input} />
                    <button>comment</button>
                </form>
                <ul>
                    {this.props.comments.map((map, key) => (
                        <li key={key}>{map}</li>
                    ))}
                </ul>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        comments: state.commentReducer
    }
}

export default connect(mapStateToProps)(CommentForm)