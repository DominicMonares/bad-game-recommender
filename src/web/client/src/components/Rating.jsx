import React from 'react';

const Rating = (props) => {
  const rating = props.rating;

  return (
    <div>
      <p>{`${Math.floor(rating)}/100`}</p>
    </div>
  );
}

export default Rating;
