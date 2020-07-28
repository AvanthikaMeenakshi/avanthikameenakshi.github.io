import React from 'react';
import Timeline from '../../../components/Timeline';

const Education = () => {
  return (
    <>
      <h1 className="sub-heading resume-title">Education_</h1>
      <Timeline>
        <Timeline.Item
          key={'education'}
          title={'Bachelor of Technology'}
          subtitle={'Information Technology'}
          side={'left'}
          content={
            <div className="timeline-skills">
              Department topper, active volunteer and vice-president of Tamizh
              Mandram, SSE-Wings volunteer.
            </div>
          }
        />
      </Timeline>
    </>
  );
};

export default Education;