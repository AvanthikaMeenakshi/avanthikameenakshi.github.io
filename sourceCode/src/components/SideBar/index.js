import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Tag } from "@blueprintjs/core";
import { loadPosts } from '../MediumPosts/actions';
import { isEmpty, map } from 'lodash';

class SideBar extends Component {
    constructor(props) {
        super(props);
        props.loadPosts();
    }
    render() {
        console.log(this.props.posts);
        const backgroundImageCss = {
            'width': '100%',
            'objectFit': 'contain'
        }
        return (
            <Card>
                {!isEmpty(this.props.posts) ? 
                (<div className="profile-section">
                    <img style={backgroundImageCss} src={`https://avatars1.githubusercontent.com/u/14136164?s=400&u=c7f452048e5f2f245ae7842209cae68e8155c18b&v=4`} alt="Avanthika Meenakshi" />
                    <div className="profile-meta">
                        <h1>{this.props.posts.user.name}</h1>
                        <h3>{this.props.posts.user.bio}</h3>
                    </div>
                        <div className="tag-container">
                        {map(this.props.posts.userMeta.authorTags, tag => {
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
                </div>) : null}
            </Card>
        )
    }
};

const mapStateToProps = state => ({
    posts: state.mediumPosts.posts
});

const mapDispatchToProps = dispatch => ({
    loadPosts: () => dispatch(loadPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);