import React from 'react'
import {connect} from 'react-redux'

class ViewPost extends React.Component {

    handlerDelete = (id) => (event) => {
        this.props.dispatch({
            type: 'DELETE_POST',
            id: id
        })
    }

    render() {
        return (
            <>
                <li>
                    Title : {this.props.post.title} | Body : {this.props.post.body}
                    <p>
                        <button onClick={this.handlerDelete(this.props.post.id)}>delete</button>
                        <button>edit</button>
                    </p>
                </li>
            </>
        )
    }
}

export default connect()(ViewPost)