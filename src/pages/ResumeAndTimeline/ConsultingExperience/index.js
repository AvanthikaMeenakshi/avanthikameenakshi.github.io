import React from 'react';
import Timeline from '../../../components/Timeline';

const ProbonoConsulting = () => {
  return (
    <>
      <h1 className="sub-heading resume-title">Pro Bono_</h1>
      <Timeline>
        <Timeline.Item
          key={'thinkful'}
          title={'Thinkful'}
          subtitle={'Mentor'}
          side={'left'}
          content={
            <div className="timeline-skills">
              I mentor engineering immersion, web technology courses and full
              stack web development courses on Thinkful. I've mentored and
              trained around 50 students so far, Im proud about this job of
              mine.
            </div>
          }
        />
      </Timeline>
    </>
  );
};

export default ProbonoConsulting;