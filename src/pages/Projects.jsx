import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import ProjectData from '../data/ProjectData';

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15, // delay between each card
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" },
    },
};

const Projects = () => {
    return (
        <motion.div
            className="grid grid-cols-12 gap-2 flex-grow-1 justify-center p-2 md:p-4 xl:p-8 h-[calc(100vh-10rem)] md:h-[calc(100vh-11.35rem)] overflow-y-auto no-scrollbar"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {ProjectData.map(project => (
                <motion.div
                    key={project.id}
                    variants={cardVariants}
                    className="col-span-12 sm:col-span-6 lg:col-span-4" // ✅ keeps your grid sizing
                >
                    <ProjectCard project={project} />
                </motion.div>
            ))}
        </motion.div>
    );
};

export default Projects;
