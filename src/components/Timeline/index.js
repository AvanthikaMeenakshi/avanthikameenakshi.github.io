import React from 'react';

const Timeline = ({ children }) => {
  return <div className="timeline-container">{children}</div>;
};

Timeline.Item = () => {
  return (
    <div className="timeline-item">
      <div className="timeline-item-line"></div>
      <div className="timeline-head"></div>
      <div className="timeline-content">
        Solve initial network problems 2015-09-01 Solve initial network problems
        2015-09-01 Solve initial network problems 2015-09-01 Solve initial
        network problems 2015-09-01
      </div>
    </div>
  );
};

export default Timeline;
