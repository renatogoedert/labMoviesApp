import React from "react";

const MovieReview = ({ review }) => {
  console.log(review);
  return (
    <>
      <p>Review By: {review.author} </p>
      <p>{review.content} </p>
    </>
  );
};
export default MovieReview;
