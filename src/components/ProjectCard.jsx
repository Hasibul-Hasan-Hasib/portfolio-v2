import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    return (
        <div className='col-span-12 md:col-span-6 lg:col-span-4 flex flex-col text-slate-400 border p-4 m-2 rounded-lg hover:shadow-lg shadow-orange-500 transition-all duration-500 bg-slate-900 hover:translate-y-[-5px]'>
            <img src={project.image} className="mb-2" alt="" />
            <div className='mt-auto'>
                <h2 className='text-xl text-slate-300 font-semibold mt-8 mb-6'>{project.title}</h2>
                <p className='my-4'>{project.description}</p>
                <ul className='my-4 flex flex-wrap gap-2 text-sm'>
                    {project.technologies.map((tech, index) => (
                        <li className='p-1 px-2 bg-slate-800 border border-orange-500 rounded-full' key={index}>{tech}</li>
                    ))}
                </ul>
                <div className='flex justify-start mt-4'>
                    <Link to={project.link} className='pr-4 mr-4 border-r text-orange-500' target="_blank" rel="noopener noreferrer">Demo</Link>
                    <Link to={project.link} className='pr-4 text-orange-500' target="_blank" rel="noopener noreferrer">Sourse</Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;