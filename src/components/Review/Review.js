import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faStar } from '@fortawesome/free-solid-svg-icons'

const Review = ({itemReview}) => {
    const { name, image, ratings, review } = itemReview;

    return (
        <div className='grid-item border-2 gap-5 bg-[goldenrod] p-5 rounded-xl'>
            <div className='review-info flex '>
                <img className='w-14 h-14 rounded-3xl ' src={image} alt="review_user" />
                <div className='ml-5'>
                    <h3><b>Name:</b> {name}</h3>
                    <p><b>Rating:</b> {ratings} <FontAwesomeIcon className='text-[goldenrod]' icon={faStar}></FontAwesomeIcon>
 </p>
                </div>


            </div>
            <div className='mt-5'>

                <p>{review}</p>
            </div>

        </div>
    );
};

export default Review;