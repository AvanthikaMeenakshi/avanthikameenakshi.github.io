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
                <div className="container about-section">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <div className="profile-image-container">
                                <img className="profile-image" alt="avanthika" src="/img/avanthika.jpg" />
                            </div>
                            <p>
                                Hey there! I'm Avanthika. I believe you are here because you want to know something about me, huh? I'm not good at explaining me, but yea, I've tried my best.
                            </p>
                            <p>
                                I'm a learner. I was that kid who was ridiculed for asking questions. Years down the lane, I aspire to architect solutions.
                                I don't have the patience for positioning a "div" on the web-page, if you ignore that, you can count me for a full-stack developer.
                                I go mad when code isn't aligned.
                            </p>
                            <p> I'm obsessed with coding, but I believe in thinking and planning before writing the code. I like keeping the code DRY.
                                The amount of code I punch in is directly proportional to the coffee I consume.
                                And a little truth: I cannot survive without stackoverflow.
                            </p>
                            <p>
                                While I'm not coding or doing stuff related to tech, you can find me in reviewing a book <a href="https://www.goodreads.com/user/show/26453047-avanthika" targer="_blank">online</a> or in a library. Or with my cat, Anjali. She's a 3 year old white "Bombay cat" (that's what they call native Indian cats), with beautiful yellow eyes.
                            </p>
                            <p>If you wish to connect with me, drop me an email or leave a message for me on facebook.
                                I'm a millennial that doesn't like the tiny QWERTY touch-pad in my smart-phone, but I will get back.
                            </p>
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