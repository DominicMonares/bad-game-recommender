import React from 'react';

import Rating from './Rating.jsx';

const Cover = (props) => {
  const url = props.url;
  const rating = props.rating;

  return (
    <div className="cover_container">
      <a href={url} target="_blank">
        <Rating rating={rating} />
        <div className="cover">
          <img className="cover_img" src={url} />
        </div>
      </a>
    </div>
  );
}

export default Cover;
