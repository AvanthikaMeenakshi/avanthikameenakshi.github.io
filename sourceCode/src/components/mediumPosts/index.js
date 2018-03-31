import React, { Component } from 'react';
import { connect } from 'react-redux';
import { map } from 'lodash';
import { loadPosts, loadPostsLocalSetup } from './actions';
import {
    Tag, Card, Button,
    Classes,
    Navbar,
    NavbarDivider,
    NavbarGroup,
    NavbarHeading } from "@blueprintjs/core";

class mediumPosts extends Component {
    constructor(props) {
        super(props);
        props.loadPosts();
        props.loadPostsLocalSetup();
    }
    render() {
        return (
            <div>
                <Navbar>
                    <NavbarGroup>
                        <NavbarHeading>Avanthika Meenakshi</NavbarHeading>
                        <NavbarDivider />
                        <Button className={Classes.MINIMAL} icon="home" text="Home" />
                        <Button className={Classes.MINIMAL} icon="document" text="Files" />
                    </NavbarGroup>
                </Navbar>
                <div className="card-layout">
                {this.props.posts.references ? map(this.props.posts.references.Post, post => {
                        console.log(this.props.posts.references.Post);
                    return (
                        <Card style={{'flexBasis': `${100 / this.props.posts.references.Post.length}%`}} key={post.id} elevation={1} interactive>
                        {post.title}
                        <img src={`https://cdn-images-1.medium.com/fit/t/800/240/1*Zixs2RAh9Gb9QGqIJfXzxQ.png`} />
                        {post.virtuals.totalClapCount}
                        {map(post.virtuals.tags, tag => {
                            return (<span key={`${tag.postCount}tags`} className="tag-spacing">
                                <Tag
                                    key={`${tag.slug}${tag.postCount}`} >
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

export default connect(mapStateToProps, mapDispatchToProps)(mediumPosts);