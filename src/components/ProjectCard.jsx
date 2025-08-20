import React from 'react';

const ProjectCard = ({project}) => {
    return (
        <div className='col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3 flex flex-col text-slate-400 border p-4 m-2 rounded-lg hover:shadow-md shadow-orange-500 transition-all duration-500 bg-slate-900'>
            <img src={project.image} className="mb-2" alt="" />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <ul>
                {project.technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                ))}
            </ul>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
    );
};

export default ProjectCard;