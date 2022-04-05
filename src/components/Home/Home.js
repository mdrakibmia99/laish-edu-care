import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../Hook/useReviews';
import Review from '../Review/Review';
import suzuki_bike from './suzuki_bike.jpg';

const Home = () => {
    const [reviews] = useReviews();
    return (
        <div className='mt-5'>
            <section className='flex lg:flex-row md:flex-row flex-col items-center justify-center my-8 bg-white p-4 rounded-lg'>
                <article className='lg:w-2/4 md:w-2/4 p-12'>
                    <h1 className='text-5xl text-black'>Someone is <span className='text-[#00b838]'>waiting for </span></h1>
                    <p className='text-white-500 mt-4'>Your loved ones and your family needs you to get home safe every time! Drive safely and remember, everyone on the road with you is someone's family. The most important thing in the world is family.</p>
                </article>
                <div className='lg:w-2/4 md:w-2/4 lg:pt-0 md:pt-0 pt-4'>
                    <img src={suzuki_bike} alt="" className='mx-auto' />
                </div>
            </section>
            <div className='text-center bg-[#fd627a] mb-3 py-2 text-white text-2xl'>
                <h2>
                    Review
                </h2>
            </div>
            <div className=' container mx-auto grid md:grid-cols-3 gap-5 sm:grid-cols-1'>
                {reviews.slice(0, 3).map(itemReview => <Review

                    key={itemReview.id}
                    itemReview={itemReview}
                ></Review>

                )}
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