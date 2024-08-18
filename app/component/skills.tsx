import React, { SVGProps } from 'react';
import skills from '../data/skills.json';

const Skills = () => {
    return (
        <div id='skills' className='w-full min-h-screen flex flex-col justify-center items-center bg-slate-700 gap-8 p-4 md:px-96'>
            <div className='flex flex-col items-center justify-center gap-4'>
                <p className='text-2xl text-white font-bold'>&lt;PROGRAMING LANGUAGES /&gt;</p>
                <div className='flex justify-around items-center bg-white p-4 rounded'>
                    <img
                        src='https://res.cloudinary.com/dbzdxsmvy/image/upload/v1723974881/skills/js.png'
                        alt='javascript'
                        width={'30%'}
                    />

                    <img
                        src='https://res.cloudinary.com/dbzdxsmvy/image/upload/v1723952558/skills/ts.png'
                        alt='typescript'
                        width={'30%'}
                    />
                </div>
            </div>

            <div className='flex flex-col items-center justify-center gap-4'>
                <p className='text-2xl text-white font-bold'>&lt;SKILLS /&gt;</p>
                <div className='flex flex-wrap justify-center items-center bg-white p-2 rounded'>
                    {skills.map((data, index) => (
                        <img
                            key={index}
                            src={data}
                            width={'20%'}
                            className='p-2'
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
