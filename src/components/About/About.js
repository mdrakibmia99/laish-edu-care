import React from 'react';
import suzuki_bike from './suzuki_bike.jpg';

const About = () => {
    return (
        <div className='flex lg:flex-row md:flex-row flex-col items-center justify-between my-8'>
            <article className='lg:w-2/4 md:w-2/4 p-16'>
                <h1 className='text-3xl'>Helps To Do All Alternative Vital Tasks</h1>
                <p>
                    Being the desired and best hospital does not mean that you have to have a wide area and you can gain a lot. But the nice administration and management skills of all the staffers, nurses, and doctors to realize results, Managing and maintaining up-to-date information on patient care, medications and alternative technological methodology of providing service, etc. are the basic components of measurement for a quality score to be the best. And if you have got an automatic system that may pay attention to relieve you to try and do alternative vital tasks.
                </p>
            </article>
            <div className='lg:w-2/4 md:w-2/4'>
                <img src={suzuki_bike} alt="" className='ml-auto' />
            </div>
        </div>
    );
};

export default About;