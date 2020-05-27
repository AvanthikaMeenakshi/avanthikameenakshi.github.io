import React from 'react';
import moment from 'moment';

export const socialLinks = {
  email: (
    <a className="desc-links" href="mailto:hello@avanthikameenakshi.com">
      email
    </a>
  ),
  facebook: (
    <a
      target="_blank"
      className="desc-links"
      rel="noopener noreferrer"
      href="https://www.facebook.com/avanthika.meenakshi"
    >
      facebook
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
      href="https://github.com/AvanthikaMeenakshi"
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
      href="https://www.facebook.com/avanthika.meenakshi"
      rel="noopener noreferrer"
      target="_blank"
    >
      <i className="fab fa-medium-m"></i>
    </a>
  ),
  stackoverflowIcon: (
    <a
      href="https://www.facebook.com/avanthika.meenakshi"
      rel="noopener noreferrer"
      target="_blank"
    >
      <i className="fab fa-stack-overflow"></i>
    </a>
  ),
};

export const staticContent = [
  <p key="info-1">
    I&apos;m a programmer and a learner. I was that kid who was ridiculed for
    asking questions. Years down the lane, I aspire to architect solutions.
    I&apos;m obsessed with coding, but I believe in thinking and planning before
    writing the code. I go mad when code isn&apos;t aligned. I like keeping the
    code DRY. The amount of code I punch in is directly proportional to the tea
    I consume. I cannot survive without stackoverflow.
  </p>,
  <p key="info-2">
    While I&apos;m not coding or doing stuff related to tech, you can find me
    reviewing a book {socialLinks.goodreads} or in a library. Or spending time
    with my cat, Anjali. She&apos;s a{' '}
    {moment().diff('2012-10-02', 'years', false)} year old white cat with
    beautiful yellow eyes.
  </p>,
  <p key="info-3">
    If you wish to connect with me, drop me an {socialLinks.email} - I&apos;m
    quick when it comes to responding to emails. Or leave a message for me on{' '}
    {socialLinks.facebook}. I&apos;m rare species of millennial that
    doesn&apos;t like using the tiny QWERTY touch-pad in my smart-phone, but I
    will get back.
  </p>,
];

export const workExp = {
  headforwards: {
    companyName: 'Headforwards',
    client: 'NTT Japan',
    role: 'Frontend Javascript Developer',
    workDetails: [
      'Worked predominantly in front-end to build micro-frontend apps using react.',
      'Worked with react, redux, react hooks, context API and HOCs to create standalone apps.',
      'Worked with micro service architecture to deploy apps individually.',
      'Converted acceptance criteria into functionalities - coded test driven components.',
      'Used cypress to write integration test cases and achieved 85% test coverage.',
      'Refactored and maintained code standards. Helped keeping the code DRY. Actively reviewed code.',
    ],
  },
};