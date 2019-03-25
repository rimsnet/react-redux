import React from 'react'

class ViewPost extends React.Component {
    render() {
        return (
            <>
                <li>
                    Title : {this.props.post.title} | Body : {this.props.post.body}
                    <p>
                        <button>delete</button>
                        <button>edit</button>
                    </p>
                </li>
            </>
        )
    }
}

export default ViewPost