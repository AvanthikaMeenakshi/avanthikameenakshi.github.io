import React from 'react';
import PropTypes from 'prop-types';

const Timeline = ({ children }) => {
  return <div className="timeline-container">{children}</div>;
};

const TimelineItem = ({ side, content }) => (
  <div className={`timeline-item timeline-item-${side}`}>
    <div className="timeline-content">
      
    </div>
  </div>
);

TimelineItem.propTypes = {
  side: PropTypes.string
};

TimelineItem.defaultProps = {
  side: 'left'
};

Timeline.Item = TimelineItem;

export default Timeline;
