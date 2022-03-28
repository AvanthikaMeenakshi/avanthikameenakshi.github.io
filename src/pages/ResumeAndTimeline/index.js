import React from 'react';
import WorkExperience from './WorkExperience';
import ProbonoConsulting from './ConsultingExperience';
import Education from './Education';
import Skills from './Skills';
import moment from 'moment';

const ResumeAndTimeline = () => {
  return (
    <>
      <div className="resume-content">
        I&apos;ve worked mainly with fullstack javascript(react and node) and
        various databases(MySql, Mongo, Postgres and redis) for the past{' '}
        {moment().diff('2016-01-01', 'years', true).toFixed(1)} years. I also have experience with Java, Python and Go. 
        I have also worked with production alerting systems and montioring tools like Sherlock, Grafana and Sentry.
        I strive for excellence, I&apos;m adept
        at completing projects according to tight deadlines. I&apos;m a complex
        problem-solver, I&apos;d be able to review, fix and improve code to
        maximise product performance and usability.
      </div>
      <Skills />
      <WorkExperience />
      <ProbonoConsulting />
      <Education />
    </>
  );
};

export default ResumeAndTimeline;
