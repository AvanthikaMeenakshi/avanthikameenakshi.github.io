import React from 'react';
import { socialLinks, particlesSettings } from '../../utils';
import Particles from 'react-particles-js';

const IntroSection = () => (
  <div className="main-page">
    <div className="personal-profile">
      <Particles height="100vh" params={particlesSettings} />
      <div className="personal-profile__wrapper">
        <p className="personal-profile__name">Hi, I am Avanthika</p>
        <p className="personal-profile__about">
          I am a fullstack javascript developer. I provide clean code and pixel
          perfect design. I loose sense of space and time to fall into the rabbit
          hole of debugging.
        </p>

        <p className="personal-profile__social">
          {socialLinks.github}
          {socialLinks.linkedInIcon}
          {socialLinks.facebookIcon}
        </p>
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
