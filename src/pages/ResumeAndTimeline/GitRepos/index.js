import React, { useState, useEffect } from 'react';
import { Card } from 'reactstrap';
import axios from 'axios';

const GitRepos = () => {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    axios
      .get('https://api.github.com/users/AvanthikaMeenakshi/repos')
      .then((resp) => {
        const reposList = resp.data.filter((repo) => !repo.private);
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

export default GitRepos;
