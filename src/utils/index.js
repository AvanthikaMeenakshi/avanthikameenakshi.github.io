import React from 'react';
import moment from 'moment';

export const socialLinks = {
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

export const staticContent = [
  <p key="info-1">
    I'm a programmer and a learner. I was that kid who was ridiculed for asking
    questions. Years down the lane, I aspire to architect solutions. I'm
    obsessed with coding, but I believe in thinking and planning before writing
    the code. I go mad when code isn't aligned. I like keeping the code DRY. The
    amount of code I punch in is directly proportional to the tea I consume. I
    cannot survive without stackoverflow.
  </p>,
  <p key="info-2">
    While I'm not coding or doing stuff related to tech, you can find me
    reviewing a book {socialLinks.goodreads} or in a library. Or spending time
    with my cat, Anjali. She's a {moment().diff('2012-10-02', 'years', false)}{' '}
    year old white cat with beautiful yellow eyes.
  </p>,
  <p key="info-3">
    If you wish to connect with me, drop me an {socialLinks.email} or leave a
    message for me on {socialLinks.facebook}. I'm rare species of millennial
    that doesn't like using the tiny QWERTY touch-pad in my smart-phone, but I
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

export const particlesSettings = {
  particles: {
    number: { value: 90, density: { enable: false, value_area: 7135 } },
    color: { value: '#ffffff' },
    shape: {
      type: 'circle',
      stroke: { width: 0, color: '#000000' },
      polygon: { nb_sides: 5 }
    },
    opacity: {
      value: 0.2,
      random: true,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 1.5,
      random: false,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: false,
      distance: 500,
      color: '#ffffff',
      opacity: 0.2,
      width: 2,
    },
    move: {
      enable: true,
      speed: 3,
      direction: 'bottom',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: { enable: true, mode: 'repulse' },
      onclick: { enable: false, mode: 'remove' },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 0.5 } },
      bubble: {
        distance: 400,
        size: 4,
        duration: 0.3,
        opacity: 1,
        speed: 3,
      },
      repulse: { distance: 90, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
};
