import React from 'react';
import useReviews from '../Hook/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews]=useReviews();
    console.log(reviews);
    return (
        <div className='container mx-auto grid grid-cols-3 gap-5 mt-5'>
          {reviews.map(itemReview=> <Review
          key={itemReview.id}
          itemReview={itemReview}
          ></Review>)}
        </div>
    );
};

export default Reviews;