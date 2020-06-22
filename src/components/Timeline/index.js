import React from 'react';
import PropTypes from 'prop-types';

const Timeline = ({ children }) => {
  return <div className="timeline-container">{children}</div>;
};

const TimelineItem = ({ side, title, subtitle, content }) => {
  return (
    <div className={`timeline-item timeline-item-${side}`}>
      <h5>
        <i className="timeline-icon fas fa-laptop-code"></i>
        {title}
      </h5>
      <h6 className="timeline-subtitle">{subtitle}</h6>
      <div className="timeline-content">{content}</div>
    </div>
  );
};

TimelineItem.propTypes = {
  side: PropTypes.string
};

TimelineItem.defaultProps = {
  side: 'left'
};

Timeline.Item = TimelineItem;

export default Timeline;
