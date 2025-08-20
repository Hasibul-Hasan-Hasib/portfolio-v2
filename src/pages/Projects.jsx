import React from 'react';
import ProjectCard from '../components/ProjectCard';
import ProjectData from '../data/ProjectData';

const Projects = () => {
    return (
        <div className='grid grid-cols-12 gap-2 flex-grow-1 justify-center p-2 md:p-4 xl:p-8 h-[calc(100vh-10rem)] md:h-[calc(100vh-11.35rem)] overflow-y-auto no-scrollbar'>
            {
                ProjectData.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))
            }
        </div>
    );
};

export default Projects;