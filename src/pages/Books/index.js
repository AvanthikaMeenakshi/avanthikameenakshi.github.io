import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DOMPurify from 'dompurify';

const Books = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios.get('/api').then((resp) => {
      console.log(resp);
      const {
        $: paginationInfo,
        review: reviewsList,
      } = resp.data.GoodreadsResponse.reviews;
      console.log(paginationInfo, reviewsList);
      setReviews(reviewsList);
    });
  }, []);

  return (
    <div>
      {reviews.map((re) => {
        const reviewText = DOMPurify.sanitize(re.body);
        return (
          <div key={re.id}>
            <a href={re.book.link}>{re.book.title}</a>
            <img src={re.book.image_url} />
            <div>{re.book.authors.author.name}</div>
            <p dangerouslySetInnerHTML={{ __html: reviewText }}/>
          </div>
        );
      })}
    </div>
  );
};

export default Books;
