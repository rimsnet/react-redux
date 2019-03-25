import React from 'react'
import { connect } from 'react-redux'
import ViewPost from './ViewPost';
import EditPostForm from '../forms/EditPostForm';

class ViewPosts extends React.Component {
    render() {
        return (
            <>
                <h3>List Posts</h3>
                <ul>
                    {this.props.post.map((post) => (
                        <div key={post.id}>
                            {post.editing ? <EditPostForm post={post} key={post.id} /> : <ViewPost key={post.id} post={post} />}
                        </div>
                    ))}
                </ul>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        post: state.postReducer
    }
}

export default connect(mapStateToProps)(ViewPosts)