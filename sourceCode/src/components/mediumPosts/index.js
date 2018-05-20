import React, { Component } from 'react';
import { connect } from 'react-redux';
import { map } from 'lodash';
import { loadPosts, loadPostsLocalSetup } from './actions';
import { Tag, Card, Icon } from "@blueprintjs/core";


class MediumPosts extends Component {
    constructor(props) {
        super(props);
        props.loadPosts();
        props.loadPostsLocalSetup();
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        {this.props.posts.references ? map(this.props.posts.references.Post, post => {
                            console.log(post);
                            return (
                                <div key={post.id} className="post-preview">
                                    <a href="post.html">
                                        <h2 className="post-title">
                                            {post.title}
                                        </h2>
                                        <h3 className="post-subtitle">
                                            {post.previewContent.bodyModel.paragraphs[post.previewContent.bodyModel.paragraphs.length - 1].text}
                                        </h3>
                                    </a>
                                    <p className="post-meta">Posted by <a href="https://medium.com/@avanthikameenakshi">Avanthika Meenakshi</a> on September 24, 2018</p>
                                </div>
                            );
                        }) : null}
                    </div>
                </div>
            </div>
        )
    }
}

{/* <Card key={post.id} elevation={0}>
    <div className="card-wrapper">
        <div><h4 className="blog-title">{post.title}</h4></div>
        <div className="preview-content">{post.previewContent.bodyModel.paragraphs[post.previewContent.bodyModel.paragraphs.length - 1].text}</div>
        <div className="meta-section">
            <h6 title="Claps"><Icon icon="heart" />{post.virtuals.totalClapCount}</h6>
            <h6 className="reach" title="Reach"><Icon icon="pulse" />{post.virtuals.totalClapCount * this.props.posts.references.Post.length}</h6>
        </div>
        <div className="tag-container">
            {map(post.virtuals.tags, tag => {
                return (<span key={`${tag.postCount}tags`} className="tag-spacing">
                    <Tag
                        key={`${tag.slug}${tag.postCount}`}
                    >
                        {tag.name}
                    </Tag>
                </span>)
            })
            }
        </div>
    </div>
</Card> */}

const mapStateToProps = state => ({
    posts: state.mediumPosts.posts
});

const mapDispatchToProps = dispatch => ({
    loadPosts: () => dispatch(loadPosts()),
    loadPostsLocalSetup: () => dispatch(loadPostsLocalSetup())
});

export default connect(mapStateToProps, mapDispatchToProps)(MediumPosts);