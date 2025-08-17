import React from 'react';
import { Link } from 'react-router-dom';

const HomeHeroSection = () => {
    return (
        <div className='col-span-5 m-auto p-8'>
            <h3 className='text-slate-400 mb-2'>Hi I am,</h3>
            <h1 className='lg:text-7xl md:text-6xl text-4xl mb-4'>Hasibul Hasan</h1>
            <h6 className='mb-8 text-purple-500 text-xl md:text-2xl'>&gt; Front-end Developer</h6>
            <h6 className='mb-4 text-slate-400'>// Find my Profile on Github:</h6>
            <h6 className=''>
                <span className='text-blue-400'>const</span>&nbsp;
                <span className='text-green-400'>githubLink</span>
                &nbsp;=&nbsp;
                <Link to='https://github.com/Hasibul-Hasan-Hasib' className='text-pink-400 break-all'>"https://github.com/Hasibul-Hasan-Hasib"</Link>
                <span className='text-blue-400'>;</span>
            </h6>
        </div>
    );
};

export default HomeHeroSection;