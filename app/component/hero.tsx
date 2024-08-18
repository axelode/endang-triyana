'use client';

import { JSX, SVGProps } from "react";

export default function Hero() {
    return (
        <div className="w-full min-h-screen bg-gradient-to-b from-blue-200 to-fuchsia-100 flex flex-col items-center justify-center">
            <div className="text-center mt-10">
                <h1 className="text-4xl font-bold text-black">
                    <span className="inline-block">&lt;</span>
                    <span className="mx-2">ENDANG TRIYANA</span>
                    <span className="inline-block">/&gt;</span>
                </h1>
                <h2 className="text-6xl font-bold text-blue-600 mt-4">FULL-STACK DEVELOPER</h2>
            </div>

            <div className="flex space-x-6 mt-10">
                <a href="https://instagram.com/endg_666" target="_blank" aria-label="Instagram">
                    <InstagramIcon className="w-10 h-10 text-black" />
                </a>
                <a href="https://github.com/axelode" target="_blank" aria-label="GitHub">
                    <GitlabIcon className="w-10 h-10 text-black" />
                </a>
                <a href="https://www.linkedin.com/in/endang-triyana/" target="_blank" aria-label="LinkedIn">
                    <LinkedinIcon className="w-10 h-10 text-black" />
                </a>
            </div>
            <div className="mt-10">
                <a href="#summary">
                    <ArrowDownIcon className="w-10 h-10 text-black animate-bounce" />
                </a>
            </div>
        </div>
    );
}

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

function GitlabIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z" />
        </svg>
    );
}

function InstagramIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
    );
}

function LinkedinIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    );
}