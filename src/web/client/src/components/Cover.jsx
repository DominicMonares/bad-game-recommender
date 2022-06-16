import React from 'react';

import Rating from './Rating.jsx';

const Cover = (props) => {
  const url = props.url;
  const rating = props.rating;

  return (
    <div>
      <a href={url} target="_blank">
        <Rating rating={rating} />
        <div>
          <span>
            <span>
              <span>
                <img src={url} />
              </span>
            </span>
          </span>
        </div>
      </a>
    </div>
  );
}

export default Cover;
