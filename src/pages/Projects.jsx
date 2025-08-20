import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
    return (
        <div>
            this is projects page
            {
                [1,2,3,4,5,6,7,8,9,10].map(num => (
                    <ProjectCard key={num} />
                ))
            }
        </div>
    );
};

export default Projects;