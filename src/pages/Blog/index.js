import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardImg } from 'reactstrap';
import truncate from 'truncate-html';

const getMediumPosts = axios.get(
  'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@avanthikameenakshi'
);

const getLogrocketPosts = axios.get(
  'https://api.rss2json.com/v1/api.json?rss_url=https://blog.logrocket.com/author/avanthikameenakshi/feed/'
);

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  useEffect(() => {
    axios
      .all([getMediumPosts, getLogrocketPosts])
      .then(
        axios.spread((...responses) => {
          const [mediumData, logRocketData] = responses;
          const mediumPosts = mediumData.data.items.filter((item) => {
            if (item.categories.length > 0) {
              item.isMedium = true;
              return item;
            }
          });
          const logRocketPosts = logRocketData.data.items;
          setBlogPosts([...logRocketPosts, ...mediumPosts]);
        })
      )
      .catch((errors) => {
        // react on errors.
      });
  }, []);
  console.log(blogPosts);
  return (
    <div className="repos">
      {blogPosts.map((post) => (
        <Card key={post.guid} className="card-resume">
          <a
            className="repo-link"
            href={post.link}
            target="_blank"
            rel="noreferrer"
          >
            <span className="language">{post.language}</span>
            <h6>{post.title}</h6>
            {post.isMedium ? (
              <div
                className="description"
                dangerouslySetInnerHTML={{
                  __html: truncate(post.description, 175),
                }}
              />
            ) : (
              <p
                className="description"
                dangerouslySetInnerHTML={{ __html: post.description }}
              />
            )}
          </a>
        </Card>
      ))}
    </div>
  );
};

export default Blog;
