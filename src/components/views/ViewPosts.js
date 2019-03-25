import React from 'react'
import { connect } from 'react-redux'
import ViewPost from './ViewPost';

class ViewPosts extends React.Component {
    render() {
        return (
            <>
                <h3>List Posts</h3>
                <ul>
                    {this.props.post.map((post)=>(
                        <ViewPost key={post.id} post={post} />
                    ))}
                </ul>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        post: state
    }
}

export default connect(mapStateToProps)(ViewPosts)