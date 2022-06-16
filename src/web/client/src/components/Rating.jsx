import React from 'react';

const Rating = (props) => {
  const rating = props.rating;

  return (
    <div className="rating-container">
      <span className="rating">
        {`${Math.floor(rating)}/100`}
      </span>
    </div>
  );
}

export default Rating;
