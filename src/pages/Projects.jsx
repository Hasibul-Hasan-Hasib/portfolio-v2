import React from 'react';
import ProjectCard from '../components/ProjectCard';
import ProjectData from '../data/ProjectData';

const Projects = () => {
    return (
        <div className='grid grid-cols-12 gap-4 flex-grow-1 justify-center p-8'>
            {
                ProjectData.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))
            }
        </div>
    );
};

export default Projects;