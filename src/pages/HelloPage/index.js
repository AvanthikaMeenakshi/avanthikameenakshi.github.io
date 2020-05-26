import React from 'react';
import { staticContent } from '../../utils';

const IntroSection = () => (
  <div className="main-page">
    <div style={{ height: '100vh' }} className="personal-profile">
      <div className="personal-profile__wrapper">
        <span className="wave">👋</span>
        <span className="personal-profile__name">Hi, I am Avanthika</span>
        <p className="personal-profile__about">Fullstack javascript developer</p>
        <div className="personal-profile__desc">
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
    </div>
  </div>
);

const ProfileInfo = () => (
  <>
    <IntroSection />
  </>
);

export default ProfileInfo;
