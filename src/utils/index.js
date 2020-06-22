import React from 'react';
import moment from 'moment';

export const skills = [
  { skill: 'react', percent: 90 },
  { skill: 'node.js', percent: 90 },
  { skill: 'javascript', percent: 70 },
  { skill: 'jQuery', percent: 60 },
  { skill: 'TypeScript', percent: 70 },
  { skill: 'Postgresql', percent: 80 },
  { skill: 'Mongo', percent: 50 },
  { skill: 'MySQL', percent: 80 },
  { skill: 'GraphQL', percent: 70 },
  { skill: 'Python', percent: 40 },
  { skill: 'Go', percent: 20 },
  { skill: 'HTML', percent: 70 },
  { skill: 'CSS/SCSS/SASS', percent: 70 },
  { skill: 'Vue', percent: 40 },
  { skill: 'Svelte', percent: 30 },
  { skill: 'Test driven development', percent: 80 },
  { skill: 'REST', percent: 70 },
];

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
  ebay: {
    companyName: 'eBay Inc',
    role: 'Full stack developer',
    skills: [
      'react',
      'react-hooks',
      'typescript',
      'redux',
      'context',
      'SASS/LESS',
      'Mocha',
      'Chai',
      'Enzyme',
      'React Testing library',
      'Java',
      'Micro front-end architecture',
      'Marko',
      'Node.js',
    ],
    workDetails: [
      'Worked predominantly in front-end to build micro-frontend apps using react.',
      'Worked with react, redux, react hooks, context API and HOCs to create standalone apps.',
      'Worked with micro service architecture to deploy apps individually.',
      'Converted acceptance criteria into functionalities - coded test driven components.',
      'Used cypress to write integration test cases and achieved 85% test coverage.',
      'Refactored and maintained code standards. Helped keeping the code DRY. Actively reviewed code.',
    ],
  },
  headforwards: {
    companyName: 'Headforwards',
    role: 'Frontend Javascript Developer',
    skills: [
      'react',
      'react-hooks',
      'redux',
      'context',
      'Enzyme',
      'SASS',
      'React Testing library',
      'node.js',
      'micro front-end architecture',
      'cypress',
    ],
    workDetails: [
      'Worked predominantly in front-end to build micro-frontend apps using react.',
      'Worked with react, redux, react hooks, context API and HOCs to create standalone apps.',
      'Worked with micro service architecture to deploy apps individually.',
      'Converted acceptance criteria into functionalities - coded test driven components.',
      'Used cypress to write integration test cases and achieved 85% test coverage.',
      'Refactored and maintained code standards. Helped keeping the code DRY. Actively reviewed code.',
    ],
  },
  apiary: {
    companyName: 'Apiary Technologies India Pvt Ltd.,',
    role: 'Senior Software Engineer',
    skills: [
      'react',
      'react-hooks',
      'graphql',
      'redux',
      'context',
      'kafka',
      'postgresql',
      'MySQL',
      'redis',
      'Supertest',
      'Mocha',
      'Chai',
      'Enzyme',
      'SASS',
    ],
    workDetails: [
      'Worked with React and Apollo-client to integrate the graphql backend.',
      'Worked with express and nodejs in the backend to build graphql server.',
      'Converted acceptance criteria to test cases and wrote test driven components and code.',
      'Used kafka for real-time data feeds to achieve fault tolerance.',
      'Maintained code standards and helped keeping the code DRY. Actively reviewed code.',
      'Worked extensively with React and Redux to integrate the backend.',
      'Worked with various graphing libraries and Node JS backend (Express, postgres & MySQL).',
      'Collaborated across timezones, actively contributed in sprint plannings and worked closely with graphic designers to visualise data better.',
      'Maintained, reviewed & refactored code standards.',
    ],
  },
  developscripts: {
    companyName: 'Developscripts LLC',
    role: 'Product Engineer',
    skills: [
      'react',
      'jQuery',
      'express.js',
      'node.js',
      'TDD',
      'javascript',
      'HTML3',
      'MySQL',
    ],
    workDetails: [
      'Worked, architected and reviewed code for various products of the company. Extensively used MERN stack. Migrated projects from JavaScript to React JS.',
      'Migrated products from PHP & MySQL to Node JS & MySQL.',
      'Managed team of developers to complete tasks. Worked on web-sockets to provide real-time experience. Worked with payment gateways like paypal, wepay, payUBiz, PayUMoney, Citrus and Braintree.',
      'Worked on stores concept, developed it with Node JS. Allowed users to design their own stores with DIY provision.',
      'Architected an API server which handled thousands of requests every second. Worked closely with graphic designers to convert illustrations to visualisations.',
      'Volunteered to lead API Server. Worked on NDTV’s mojarto project, DIY for forward and reverse auctions, worked on core products. Also took initiative to work on: agribay.com, duavivo.in, iquippo.com, slibuy.com.',
    ],
  },
  skcript: {
    companyName: 'Skcript',
    role: 'Product Engineer',
    skills: ['react', 'HTML', 'CSS', 'SCSS/SASS'],
    workDetails: [
      'Kick started my career at Skcript as an Intern and secured position as Front-End Engineer. Worked extensively and learnt a lot of technologies. Worked as JavaScript developer and learnt React JS. Used React JS along with Ruby on Rails.',
      'Worked on the following projects: allt.in, shrink.in, ILTB, SocialX.',
      'Primarily used React JS, SASS.',
    ],
  },
};
