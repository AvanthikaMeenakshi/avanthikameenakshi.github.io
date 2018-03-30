import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadPosts } from './actions';

class mediumPosts extends Component {
    constructor(props) {
        super(props);
        props.loadPosts();
    }
    render() {
        return (
            <div className="container">
                hello
            </div>
        )
    }
}

const mapStateToProps = state => ({
    posts: state.mediumPosts.posts
});

const mapDispatchToProps = dispatch => ({
    loadPosts: () => dispatch(loadPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(mediumPosts);