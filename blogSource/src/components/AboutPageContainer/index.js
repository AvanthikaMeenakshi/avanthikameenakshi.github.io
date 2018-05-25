import React, { Component } from 'react';
import ImageSection from '../ImageSection';
import BlogNavBar from '../BlogNavBar';
import Footer from '../Footer';
import { Progress } from 'reactstrap';
import { Table } from 'reactstrap';

class AboutPageContainer extends Component {
    render() {
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
                                I don't have the patience for positioning a "div" on the web-page, if you ignore that, with all the critical thinking and multi-tasking I boast of, you can count me for a full-stack developer.
                            </p>
                            <p> I'm obsessed with coding, but I believe in thinking and planning before writing the code. I go mad when code isn't aligned. I like keeping the code DRY.
                                The amount of code I punch in is directly proportional to the coffee I consume.
                                And a little truth: I cannot survive without stackoverflow.
                            </p>
                            <p> I'm good at talking like Tyrion Lannister, other than that, I'm decent with the listed skills. </p>
                            <Table borderless>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Skill</th>
                                        <th>Proficiency</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>JavaScript</td>
                                        <td><Progress value={80} /></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>ReactJS</td>
                                        <td><Progress value={80} /></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Node.js</td>
                                        <td><Progress value={90} /></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>MySQL/Postgres</td>
                                        <td><Progress value={50} /></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">5</th>
                                        <td>Building APIs</td>
                                        <td><Progress value={75} /></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">6</th>
                                        <td>Building Chrome Extensions</td>
                                        <td><Progress value={55} /></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">7</th>
                                        <td>SocketIO/Firebase/web push notifications</td>
                                        <td><Progress value={80} /></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">8</th>
                                        <td>Payment gateways integration</td>
                                        <td><Progress value={80} /></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">9</th>
                                        <td>HTML</td>
                                        <td><Progress value={80} /></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">10</th>
                                        <td>SASS/SCSS</td>
                                        <td><Progress value={50} /></td>
                                    </tr>
                                </tbody>
                            </Table>
                            <p>
                                While I'm not coding or doing stuff related to tech, you can find me in reviewing a book <a target="_blank" rel="noopener noreferrer" href="https://www.goodreads.com/user/show/26453047-avanthika">online</a> or in a library. Or with my cat, Anjali. She's a 3 year old white "Bombay cat" (that's what they call native Indian cats), with beautiful yellow eyes.
                            </p>
                            <p>If you wish to connect with me, drop me an <a href="mailto:avanthika157@gmail.com">email</a> or leave a message for me on <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/avanthika.meenakshi">facebook</a>.
                                I'm rare species of millennial that doesn't like using the tiny QWERTY touch-pad in my smart-phone, but I will get back.
                            </p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
};

export default AboutPageContainer;
