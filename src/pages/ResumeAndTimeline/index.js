import React from 'react';
import WorkExperience from './WorkExperience';
import ProbonoConsulting from './ConsultingExperience';
import Education from './Education';
import Skills from './Skills';

const ResumeAndTimeline = () => {
  return (
    <>
      <div className="resume-content">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </div>
      <Skills />
      <WorkExperience />
      <ProbonoConsulting />
      <Education />
    </>
  );
};

export default ResumeAndTimeline;
