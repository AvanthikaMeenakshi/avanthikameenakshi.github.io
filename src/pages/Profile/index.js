import React from 'react';
import Typed from 'react-typed';
import Timeline from '../../components/Timeline';
import profilePicture from '../../assets/avanthika.jpg';
import { staticContent, workExp } from '../../utils';

const IntroSection = () => (
  <div className="container">
    <div className="row resume">
      <div className="col-md-12 about__description">
        <h1 className="heading">
          <Typed strings={['Avanthika_']} typeSpeed={70} />
        </h1>
        <p className="about__work">I enjoy coffee, coding, cats!</p>
        {staticContent.map((content) => content)}
      </div>
    </div>
  </div>
);

const WorkTimeLine = () => (
  <div className="container">
    <div className="row timeline">
      <div className="col-md-12">
        <p className="sub-heading">Work Experience</p>
        <Timeline>
          <Timeline.Item
            title="Work Title"
            subtitle="Subtitle"
            content={<>dksjkd</>}
          />
          <Timeline.Item side="right" />
          <Timeline.Item />
        </Timeline>
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
