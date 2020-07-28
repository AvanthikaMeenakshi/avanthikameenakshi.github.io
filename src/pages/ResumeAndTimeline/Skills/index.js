import React from 'react';
import skills from './skills.json';
import { Progress } from 'reactstrap';

const Skills = () => {
  const halfLength = Math.ceil(skills.length / 2);
  const renderSkills = (skillsList) =>
    skillsList.map(({ skill, percent }) => (
      <div key={skill}>
        <div className="progress-skill-title">
          <div className="skill-display">{skill}</div>
          <div className="skill-percent">{percent}%</div>
        </div>
        <Progress value={percent} />
      </div>
    ));
  return (
    <>
      <h1 className="sub-heading resume-title">Skills_</h1>
      <div className="skills-section">
        <div style={{ marginRight: '20px' }} className="section">
          {renderSkills(skills.slice(0, halfLength))}
        </div>
        <div className="section">
          {renderSkills(skills.slice(halfLength, skills.length))}
        </div>
      </div>
    </>
  );
};

export default Skills;
