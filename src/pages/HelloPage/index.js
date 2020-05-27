import React from 'react';
import { staticContent } from '../../utils';

const IntroSection = () => (
  <div className="home">
    <span className="wave">👋</span>
    <span className="heading">Hi, I am Avanthika</span>
    <p className="home__about">Fullstack javascript developer</p>
    <div className="home__desc">
      {staticContent.map((content) => content)}
    </div>
    <div className="m-30 heading">
      Let&apos;s work together on your next project
    </div>
    <a
      className="desc-links heading-link"
      href="mailto:hello@avanthikameenakshi.com"
    >
      hello@avanthikameenakshi.com
    </a>
  </div>
);

const ProfileInfo = () => (
  <>
    <IntroSection />
  </>
);

export default ProfileInfo;
