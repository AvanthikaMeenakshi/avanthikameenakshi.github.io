import React from 'react';
import Typed from 'react-typed';
import Timeline from '../../components/Timeline';
import ProfileImage from '../../assets/avanthika.jpg';
import moment from 'moment';

const socialLinks = {
  email: <a href="mailto:avanthika157@gmail.com">email</a>,
  facebook: (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.facebook.com/avanthika.meenakshi"
    >
      facebook
    </a>
  ),
  goodreads: (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.goodreads.com/user/show/26453047-avanthika"
    >
      online
    </a>
  ),
  github: (
    <a
      href="https://github.com/AvanthikaMeenakshi"
      rel="noopener noreferrer"
      target="_blank"
    >
      <i className="fa fa-github"></i>
    </a>
  ),
  linkedInIcon: (
    <a
      href="https://www.linkedin.com/in/avanthika-meenakshi-41b105b2/"
      rel="noopener noreferrer"
      target="_blank"
    >
      <i className="fa fa-linkedin-square"></i>
    </a>
  ),
  facebookIcon: (
    <a
      href="https://www.facebook.com/avanthika.meenakshi"
      rel="noopener noreferrer"
      target="_blank"
    >
      <i className="fa fa-facebook-square"></i>
    </a>
  ),
};

const ProfileInfo = () => (
  <>
    <div className="container">
      <div className="row personal-profile">
        <div className="col-md-4 personal-profile__avatar">
          <img src={ProfileImage} alt="avatar" />
        </div>
        <div className="col-md-8">
          <p className="personal-profile__name">
            <Typed strings={['Avanthika_']} typeSpeed={70} />
          </p>
          <p className="personal-profile__work">
            Fullstack Javacript Developer
          </p>
          <p>
            I'm a programmer and a learner. I was that kid who was ridiculed for
            asking questions. Years down the lane, I aspire to architect
            solutions. I'm obsessed with coding, but I believe in thinking and
            planning before writing the code. I go mad when code isn't aligned.
            I like keeping the code DRY. The amount of code I punch in is
            directly proportional to the tea I consume. I cannot survive without
            stackoverflow.
          </p>
          <p>
            While I'm not coding or doing stuff related to tech, you can find me
            reviewing a book {socialLinks.goodreads} or in a library. Or
            spending time with my cat, Anjali. She's a{' '}
            {moment().diff('2012-10-02', 'years', false)} year old white cat
            with beautiful yellow eyes.
          </p>
          <p>
            If you wish to connect with me, drop me an {socialLinks.email} or
            leave a message for me on {socialLinks.facebook}. I'm rare species
            of millennial that doesn't like using the tiny QWERTY touch-pad in
            my smart-phone, but I will get back.
          </p>
        </div>
      </div>
    </div>

    <div className="container">
      <div className="row timeline">
        <div className="col-md-12">
          <h1 className="heading">Timeline</h1>
          <Timeline>
            <Timeline.Item />
            <Timeline.Item />
            <Timeline.Item />
          </Timeline>
        </div>
      </div>
    </div>
  </>
);

export default ProfileInfo;
