import React from 'react';
import { Bungee } from 'next/font/google';
import Link from 'next/link';

const bungee = Bungee({
    subsets: ['latin'],
    weight: '400',
});

const Navbar = () => {
    const buttonAction = () => {
        console.log('portfolio');
    };

    return (
        <div className="navbar bg-slate-800 px-4 md:px-8 lg:px-12 fixed z-50">
            <div className="flex-1">
                <a className={`${bungee.className} text-md md:text-lg lg:text-xl text-white font-bold`}>
                    &lt;ENDANG TRIYANA /&gt;
                </a>
            </div>
            <div className="flex-none">
                <div className='hidden md:flex items-center gap-8 font-bold text-lg text-white'>
                    <Link href={'/'}>Home</Link>
                    <Link href={'/projects'}>Projects</Link>
                    <Link href={'/contact'}>Contact</Link>
                </div>

                <div className="dropdown block md:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="white">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                    </div>
                    <div
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-slate-800 rounded-box right-0 mt-3 p-4 text-white shadow"
                    >
                        <Link href={'/'} className='mb-4'>
                            Home
                        </Link>

                        <Link href={'/projects'} className='mb-4'>
                            Projects
                        </Link>

                        <Link href={'/contact'}>
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Navbar;