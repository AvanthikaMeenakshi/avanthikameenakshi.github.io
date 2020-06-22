import React, { useState, useEffect } from 'react';
import Timeline from '../../components/Timeline';
import { workExp, skills } from '../../utils';
import { Badge, Progress, Card } from 'reactstrap';
import axios from 'axios';

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

const TimeLineViewer = () => {
  const [expandedExperiences, setExpandedExperiences] = useState({});
  const toggleShow = (expandedWorkplace) => {
    setExpandedExperiences({
      ...expandedExperiences,
      [expandedWorkplace]: !expandedExperiences[expandedWorkplace],
    });
  };
  return (
    <>
      <h1 className="sub-heading resume-title">Work Experience_</h1>
      <Timeline>
        {Object.keys(workExp).map((workplace, index) => {
          const exp = workExp[workplace];
          const side = index % 2 === 0 ? 'left' : 'right';
          const entriesToShow = expandedExperiences[workplace]
            ? exp.workDetails
            : [];
          return (
            <Timeline.Item
              key={workplace}
              title={exp.companyName}
              subtitle={exp.role}
              side={side}
              content={
                <>
                  <div className="timeline-skills">
                    {exp.skills.map((skill) => (
                      <Badge
                        key={`${exp.companyName}${skill}`}
                        color="secondary"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  {entriesToShow.map((detail) => {
                    return <div key={detail}>- {detail}</div>;
                  })}
                  <a
                    href="javascript:void(0)"
                    className="timeline-show-link"
                    onClick={() => toggleShow(workplace)}
                  >
                    Show {expandedExperiences[workplace] ? 'less' : 'more'}
                  </a>
                </>
              }
            />
          );
        })}
      </Timeline>
    </>
  );
};

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

const GitRepos = () => {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    axios
      .get('https://api.github.com/users/AvanthikaMeenakshi/repos')
      .then((resp) => {
        const reposList = resp.data.filter(repo => !repo.private);
        setRepos(reposList);
      });
  }, []);
  return (
    <>
      <h1 className="sub-heading resume-title">Repos_</h1>
      <div className="repos">
        {repos.map((repo) => (
          <Card key={repo.id} className="card-resume">
            <a
              className="repo-link"
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
            >
              <span className="language">{repo.language}</span>
              <h6>{repo.name}</h6>
              <p className="description">{repo.description}</p>
            </a>
          </Card>
        ))}
      </div>
    </>
  );
};

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
      <TimeLineViewer />
      <Education />
      <GitRepos />
    </>
  );
};

export default ResumeAndTimeline;
