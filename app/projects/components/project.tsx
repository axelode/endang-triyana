import Link from 'next/link';
import React, { FC } from 'react';

interface ProjectProps {
    project: IProject;
}

const Projects: FC<ProjectProps> = ({ project }) => {
    return (
        <div className="w-full flex flex-col gap-4">
            {/* header */}
            <div className='flex items-center gap-2'>
                <h1 className='text-2xl text-black font-bold'>{project.name}</h1>
                {!project.isResponsive && (
                    <div className="badge badge-accent">Unresponsive</div>
                )}
            </div>

            {/* carousel */}
            <div className="carousel rounded w-full">
                {project.attachment.map((item, index) => (
                    <div key={index} className="carousel-item w-full">
                        <img
                            src={item}
                            width={'100%'}
                            alt="project-documentation" />
                    </div>
                ))}
            </div>
            <p className='text-center text-slate-400'>&lt;-- Swipe left or right --&gt;</p>

            {/* detail */}
            <div className='flex flex-col justify-center items-center text-center text-black'>
                <p className='font-bold'>{project.time}</p>
                <p>{project.description}</p>
                <p className='mt-2'><span className='font-bold'>Stacks: </span>{project.stacks}</p>
            </div>

            {/* contributor */}
            {project.contributor && project.contributor.length !== 0 && (
                <div className='w-full flex flex-col'>
                    <p className='text-center font-bold text-black'>Contributor:</p>
                    {project.contributor.map((data) => (
                        <div className='flex text-black mb-2'>
                            <p className='flex flex-1'>{data.name}</p>
                            <Link href={data.linkedin} target='_blank'>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                    <rect width="4" height="12" x="2" y="9" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                            </Link>
                        </div>
                    ))}
                </div>
            )}

            <Link href={project.link} target='_blank' className='btn text-white'>
                Launch App
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 text-white"
                >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                </svg>

            </Link>
        </div>
    );
};

export default Projects;