import React from 'react'
import { connect } from 'react-redux'

class PostForm extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.getTitle.value
        const body = this.getBody.value

        const data = {
            id: new Date(),
            title,
            body
        }

        this.props.dispatch({
            type: 'ADD_POST',
            data
        })

        this.getTitle.value = ''
        this.getBody.value = ''

    }

    render() {
        return (
            <>
                <h3>Add New Post</h3>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref={(input) => this.getTitle = input} />
                    <input type="text" ref={(input) => this.getBody = input} />
                    <button>Add</button>
                </form>
            </>
        )
    }
}

export default connect()(PostForm)