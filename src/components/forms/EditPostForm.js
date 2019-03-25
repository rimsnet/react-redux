import React from 'react'
import { connect } from 'react-redux'

class EditPostForm extends React.Component {

    handlerSubmit = (e) => {
        e.preventDefault();

        const title = this.getTitle.value
        const body = this.getBody.value
        const data = { title, body }

        this.props.dispatch({
            type: 'UPDATE_POST',
            id: this.props.post.id,
            data: data
        })
    }

    render() {
        return (
            <>
                <form onSubmit={this.handlerSubmit}>
                    <input type="text" defaultValue={this.props.post.title} ref={(input) => this.getTitle = input} />
                    <input type="text" defaultValue={this.props.post.body} ref={(input) => this.getBody = input} />
                    <button>update</button>
                </form>
            </>
        )
    }
}

export default connect()(EditPostForm)