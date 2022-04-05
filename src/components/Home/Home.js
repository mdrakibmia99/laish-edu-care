import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../Hook/useReviews';
import Review from '../Review/Review';

const Home = () => {
    const [reviews]=useReviews();
    return (
        <div className='mt-5'>
          <div className='text-center bg-[#fd627a] mb-3 py-2 text-white text-2xl'>
                <h2>
                    Review
                </h2>
            </div>
            <div className=' container mx-auto grid md:grid-cols-3 gap-5 sm:grid-cols-1'>
            {reviews.slice(0,3).map(itemReview=> <Review
             
             key={itemReview.id}
             itemReview={itemReview}
             ></Review>
         
              ) }
        </div>
        <div className='text-center mt-3'>
                <Link to={'/reviews'}>
                    <button className='bg-[#fd627a] px-4 py-2 text-white rounded-md hover:bg-[#ffd13c] hover:text-black transition-all duration-200'>See More</button>
                </Link>
           

        </div>
        </div>
    ); 
};

export default Home;