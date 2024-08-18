import Link from 'next/link';
import React, { SVGProps } from 'react';

const Summary = () => {
    return (
        <div id='summary' className='w-full min-h-screen flex flex-col justify-center items-center gap-12 p-4 md:px-96 py-24 bg-slate-900'>
            {/* summary */}
            <div className='flex flex-col items-center justify-center gap-6'>
                <p className='text-2xl text-white font-bold'>SUMMARY</p>
                <div className="avatar">
                    <div className="ring-primary ring-offset-slate-900 w-24 rounded-full ring ring-offset-2">
                        <img
                            src="https://res.cloudinary.com/dbzdxsmvy/image/upload/v1720216352/profile-pic.jpg"
                            alt='profile-pic'
                        />
                    </div>
                </div>

                <p className='text-justify text-white'>
                    Hello everyone, I&apos;m Endang Triyana, a full-stack developer with less than a year of experience. 20 years old and based in Ciputat, South Tangerang. Mastering javascript and typescript programming languages. Using postgreSQL as database and prism as ORM. Has produced several projects that can be seen on the <Link href={'/projects'} className='text-green-500 font-bold underline'>Projects</Link> page.
                </p>
            </div>

            {/* educations */}
            <div className='flex flex-col items-center justify-center gap-6'>
                <p className='text-2xl text-white font-bold'>EDUCATIONS</p>
                {/* vocational high school */}
                <div className='flex flex-col justify-center items-center gap-4'>
                    <img
                        src="https://res.cloudinary.com/dbzdxsmvy/image/upload/v1723957781/kompes.png"
                        width={'25%'}
                        alt='logo'
                    />

                    <div className='flex flex-col justify-center items-center'>
                        <p className='text-md font-bold text-white'>SMK Komputama Pesahangan</p>
                        <p className='text-slate-300'>June 2019 - May 2022</p>
                        <p className='text-slate-300'>Focus: Motorcycle Engineering and Business</p>
                        <p className='text-slate-300'>Skills: Maintain, Repair, Measure</p>
                    </div>
                </div>

                {/* bootcamp */}
                <div className='flex flex-col justify-center items-center gap-4'>
                    <img
                        src="https://res.cloudinary.com/dbzdxsmvy/image/upload/v1716298002/dw.png"
                        width={'25%'}
                        alt='logo'
                    />

                    <div className='flex flex-col justify-center items-center'>
                        <p className='text-md font-bold text-white'>PT Dumbways Indonesia</p>
                        <p className='text-slate-300'>April 2024 - August 2024</p>
                        <p className='text-slate-300'>Focus: Full-stack</p>
                        <p className='text-slate-300 text-center'>Skills: Express Js, Nest Js, React Js, React Native, PostgreSQL, Prisma ORM, Tailwind, Material UI</p>
                    </div>
                </div>
            </div>

            {/* experience */}
            <div className='flex flex-col items-center justify-center gap-6'>
                <p className='text-2xl text-white font-bold'>EXPERIENCE</p>
                <div className='flex items-center gap-4'>
                    <img
                        src="https://res.cloudinary.com/dbzdxsmvy/image/upload/v1723953987/skills/core-initiative.jpg"
                        width={'25%'}
                        alt='Core-initiative'
                        className='rounded'
                    />

                    <div className='flex flex-col'>
                        <p className='text-md font-bold text-white'>Front-end Project Based Internship</p>
                        <p className='text-slate-300'>December 2023 - December 2023</p>
                        <p className='text-slate-300'>Focus: Front-end</p>
                        <p className='text-slate-300'>Skills: Vue Js, HTML, CSS</p>
                    </div>
                </div>
                <p className='text-justify text-white'>
                    Selected as one of the interns at Core Initiative x Rakamin Academy project-based internship program to build an e-commerce web page based on the design provided by the Core Initiative UI/UX team.
                </p>
            </div>

            <div className="mt-10">
                <a href="#skills">
                    <ArrowDownIcon className="w-10 h-10 text-white animate-bounce" />
                </a>
            </div>
        </div>
    );
};

export default Summary;

function ArrowDownIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
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
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
        </svg>
    );
}