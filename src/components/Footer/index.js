import React from 'react';
import profilePicture from '../../assets/avanthika.jpg';
import { socialLinks } from '../../utils';

const Footer = () => (
  <div className="sidebar-footer">
    <img src={profilePicture} alt="avanthika" />
    {socialLinks.github}
    {socialLinks.linkedInIcon}
    {socialLinks.twitterIcon}
    {socialLinks.facebookIcon}
    {socialLinks.mediumIcon}
    {socialLinks.stackoverflowIcon}
  </div>
);

export default Footer;
