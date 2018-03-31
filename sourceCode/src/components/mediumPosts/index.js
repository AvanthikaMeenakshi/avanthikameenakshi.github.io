import React, { Component } from 'react';
import { connect } from 'react-redux';
import { map } from 'lodash';
import { loadPosts, loadPostsLocalSetup } from './actions';
import { Tag, Card, Icon, Intent } from "@blueprintjs/core";


class MediumPosts extends Component {
    constructor(props) {
        super(props);
        props.loadPosts();
        props.loadPostsLocalSetup();
    }
    render() {
        return (
            <div>
                <div className="card-layout">
                {this.props.posts.references ? map(this.props.posts.references.Post, post => {
                    console.log(post);
                    return (
                        <Card style={{ 'flexBasis': `calc((100% / 3) - 20px)`}} key={post.id} elevation={0}>
                            <div className="card-wrapper">
                                <h4>{post.title}</h4>
                                {post.previewContent.bodyModel.paragraphs[post.previewContent.bodyModel.paragraphs.length - 1].text}
                                <h6 title="Claps"><Icon icon="heart"/>{post.virtuals.totalClapCount}</h6>
                                <h6 title="Reach"><Icon icon="pulse" />{post.virtuals.totalClapCount * this.props.posts.references.Post.length}</h6>
                                <div>
                                {map(post.virtuals.tags, tag => {
                                    return (<span key={`${tag.postCount}tags`} className="tag-spacing">
                                        <Tag
                                            intent={Intent.WARNING}
                                            key={`${tag.slug}${tag.postCount}`}
                                        >
                                            {tag.name}
                                        </Tag>
                                    </span>)})
                                }
                                </div>
                            </div>
                        </Card>
                    );
                }) : null}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    posts: state.mediumPosts.posts
});

const mapDispatchToProps = dispatch => ({
    loadPosts: () => dispatch(loadPosts()),
    loadPostsLocalSetup: () => dispatch(loadPostsLocalSetup())
});

export default connect(mapStateToProps, mapDispatchToProps)(MediumPosts);