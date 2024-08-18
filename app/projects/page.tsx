'use client';

import React from 'react';
import Navbar from '../component/navbar';
import Projects from './components/project';
import dataProjects from '../data/projects.json';
import Footer from '../component/footer';

const Post = () => {
    return (
        <div className="w-full h-screen">
            <Navbar />
            <div className='flex flex-col gap-12 bg-gradient-to-b from-blue-200 to-fuchsia-100 p-4 md:px-96 pt-24 pb-12'>
                {dataProjects.map((data, index) => (
                    <Projects key={index} project={data} />
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Post;