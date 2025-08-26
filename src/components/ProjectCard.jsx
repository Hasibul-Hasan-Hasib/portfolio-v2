import { useState } from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {

    const [seeMore, setSeeMore] = useState(false);

    return (
        <div className='h-full col-span-12 md:col-span-6 lg:col-span-4 flex flex-col text-slate-400 border p-4 rounded-lg hover:shadow-lg shadow-teal-500 transition-all duration-400 bg-slate-900 hover:translate-y-[-5px]'>
            <img src={project.image} className="mb-2 aspect-video object-cover rounded-md" alt="" />
            <h2 className='text-xl text-slate-300 font-semibold my-4'>{project.title}</h2>
                <div className='min-h-20 mb-4'>
                    <span>{project.description.length > 90 ? seeMore ? project.description : `${project.description.slice(0, 98)}... ` : project.description}</span>
                    {project.description.length > 90 && <button className='text-teal-500 ' onClick={() => setSeeMore(!seeMore)}>{seeMore ? 'See Less' : 'See More'}</button>}
                </div>
                <ul className='mt-auto flex flex-wrap gap-2 text-sm'>
                    {project.technologies.map((tech, index) => (
                        <li className='p-1 px-2 bg-slate-800 border border-teal-500 rounded-full' key={index}>{tech}</li>
                    ))}
                </ul>
                <div className='flex justify-start mt-4'>
                    <Link to={project.link} className='pr-4 mr-4 border-r text-teal-500' target="_blank" rel="noopener noreferrer">Live</Link>
                    <Link to={project.github.frontend} className='pr-4 mr-4 border-r text-teal-500' target="_blank" rel="noopener noreferrer">FrontEnd</Link>
                    <Link to={project.github.backend} className='pr-4 text-teal-500' target="_blank" rel="noopener noreferrer">server</Link>
                </div>
        </div>
    );
};

export default ProjectCard;
