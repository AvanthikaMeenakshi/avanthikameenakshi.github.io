import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadPosts } from '../MediumPosts/actions';
import ImageSection from '../ImageSection';
import BlogNavBar from '../BlogNavBar';

class AboutPageContainer extends Component {
    constructor(props) {
        super(props);
        props.loadPosts();
    }
    render() {
        console.log(this.props.posts);
        return (
            <div>
                <BlogNavBar />
                <ImageSection
                    imageUrl={`/img/about-bg.jpg`}
                    title={"About Me"}
                    desc={"This is what I do!"}
                />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe nostrum ullam eveniet pariatur voluptates odit, fuga atque ea nobis sit soluta odio, adipisci quas excepturi maxime quae totam ducimus consectetur?</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

{/* <Card>
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
</Card> */}

const mapStateToProps = state => ({
    posts: state.mediumPosts.posts
});

const mapDispatchToProps = dispatch => ({
    loadPosts: () => dispatch(loadPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(AboutPageContainer);