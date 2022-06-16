import React from 'react';

import Rating from './Rating.jsx';

const Cover = (props) => {
  const url = props.url;
  const cover_url = props.cover_url;
  const rating = props.rating;

  return (
    <div className="cover_container">
      <a href={url} target="_blank">
        <Rating rating={rating} />
        <img className="cover" src={cover_url} />
      </a>
    </div>
  );
}

export default Cover;
