import React, { Component } from 'react';
import { connect } from 'react-redux';
import { map } from 'lodash';
import { loadPosts, loadPostsLocalSetup } from './actions';
import { Tag, Card } from "@blueprintjs/core";


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
                            <img className="grayscale" style={{'width': '100%'}} alt={post.title} src={`https://cdn-images-1.medium.com/fit/t/800/240/${post.virtuals.previewImage.imageId}`} />
                            <h4>{post.title}</h4>
                            Total claps: {post.virtuals.totalClapCount}
                            Views: {post.virtuals.totalClapCount * this.props.posts.references.Post.length}
                            {post.previewContent.bodyModel.paragraphs[post.previewContent.bodyModel.paragraphs.length - 1].text}
                            {map(post.virtuals.tags, tag => {
                                return (<span key={`${tag.postCount}tags`} className="tag-spacing">
                                    <Tag
                                        key={`${tag.slug}${tag.postCount}`}
                                        className="tag-color"
                                    >
                                        {tag.name}
                                    </Tag>
                                </span>)})
                            }
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