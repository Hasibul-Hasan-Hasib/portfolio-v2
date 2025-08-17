import React from 'react';

const HomeHeroSection = () => {
    return (
        <div className='col-span-5 p-8'>
            <h3 className='text-slate-400 mb-2'>Hi I am,</h3>
            <h1 className='text-7xl mb-4'>Hasibul Hasan</h1>
            <h6 className='mb-8 text-purple-500 text-2xl'>&gt; Front-end Developer</h6>
            <p className='text-slate-400 mb-8'>
                I am a front-end developer with a passion for creating beautiful and functional web applications.
            </p>
            <h6 className='mb-4 text-slate-400'>// Find my Profile on Github:</h6>
            <h6>
                <span className='text-blue-400'>const</span>&nbsp;
                <span className='text-green-400'>githubLink</span>
                &nbsp;=&nbsp;
                <span className='text-pink-400'>"https://github.com/Hasibul-Hasan-Hasib"</span>
                <span className='text-blue-400'>;</span>
            </h6>
        </div>
    );
};

export default HomeHeroSection;