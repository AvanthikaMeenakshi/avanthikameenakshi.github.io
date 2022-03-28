import React from 'react';

export const socialLinks = {
  email: (
    <a className="desc-links" href="mailto:hello@avanthikameenakshi.com">
      email
    </a>
  ),
  linkedin: (
    <a
      target="_blank"
      className="desc-links"
      rel="noopener noreferrer"
      href="https://www.linkedin.com/in/avanthika-meenakshi-41b105b2/"
    >
      linkedin
    </a>
  ),
  goodreads: (
    <a
      target="_blank"
      className="desc-links"
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
      <i className="fab fa-github"></i>
    </a>
  ),
  twitterIcon: (
    <a
      href="https://twitter.com/AvanthikaMeenu"
      rel="noopener noreferrer"
      target="_blank"
    >
      <i className="fab fa-twitter"></i>
    </a>
  ),
  linkedInIcon: (
    <a
      href="https://www.linkedin.com/in/avanthika-meenakshi-41b105b2/"
      rel="noopener noreferrer"
      target="_blank"
    >
      <i className="fab fa-linkedin"></i>
    </a>
  ),
  facebookIcon: (
    <a
      href="https://www.facebook.com/avanthika.meenakshi"
      rel="noopener noreferrer"
      target="_blank"
    >
      <i className="fab fa-facebook-square"></i>
    </a>
  ),
  mediumIcon: (
    <a
      href="https://medium.com/@avanthikameenakshi"
      rel="noopener noreferrer"
      target="_blank"
    >
      <i className="fab fa-medium-m"></i>
    </a>
  ),
  stackoverflowIcon: (
    <a
      href="https://stackoverflow.com/users/7089383/avanthika"
      rel="noopener noreferrer"
      target="_blank"
    >
      <i className="fab fa-stack-overflow"></i>
    </a>
  ),
};

export const staticContent = [
  <p key="info-1">
    I&apos;m a Full Stack Software Engineer working with eBay at the moment.
    I&apos;m obsessed with coding, but I believe in thinking and planning before
    writing the code. I go mad when code isn&apos;t aligned. I like keeping the
    code DRY. The amount of code I punch in is directly proportional to the tea
    I consume. I cannot survive without stackoverflow.
  </p>,
  <p key="info-2">
    While I&apos;m not coding or doing stuff related to tech, you can find me
    reviewing a book {socialLinks.goodreads} or in a library. Or spending time
    with my cats, Anjali, Sombra and Delilah.
  </p>,
  <p key="info-3">
    If you wish to connect with me, drop me an {socialLinks.email} - I&apos;m
    quick when it comes to responding to emails. Or leave a message for me on{' '}
    {socialLinks.linkedin}. I&apos;m rare species of millennial that
    doesn&apos;t like using the tiny QWERTY touch-pad in my smart-phone, but I
    will get back.
  </p>,
];