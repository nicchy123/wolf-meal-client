import React from 'react';

const About = () => {
    return (
        <div className='md:flex container lg:flex justify-between items-center gap-10 w-4/5 mx-auto lg:my-40 my-20'>
            <div className='md:w-1/2 lg:w-1/2 w-5/4'>
                <h1 className='text-3xl font-bold mb-8'>About Us</h1>
                <p className='mb-4'>Food-Age has been a key online resource for the global food and beverage industry,
                    acting as a source of information and a forum for discussion.</p>
                <p className='mb-4'>
                    Through a variety of media, including a monthly online issue,
                    online articles, podcasts and global events, Food-Age ensures that
                    every corner of the food and beverage industry is represented, from farm
                    field to supermarket shelf.
                </p>
                <p>
                    Cooperation and collaboration are key in any industry, and food and beverage
                    is no different. With the expert guidance of a cross-sector advisory board,
                    Food-Age it will always proudly represent one of the most exciting
                    and crucial industries in our society.
                </p>
            </div>
            <div className='md:w-1/2 lg:w-1/2 w-5/4'>
                <img className='w-full h-96 rounded object-cover' src="https://media.self.com/photos/5a316fd183ab3f54feacf768/4:3/w_2560%2Cc_limit/Roasted-pork.jpg" alt="" />
            </div>
        </div>
    );
};

export default About;