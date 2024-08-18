'use client';

import React, { ChangeEvent, useState } from 'react';

const Form = () => {
    const [email, setEmail] = useState<string>('');
    const [subject, setSubject] = useState<string>('');
    const [body, setBody] = useState<string>('');

    const myEmail = "endangtriyanacareer@gmail.com";

    const handleSubmit = () => {
        const mailtoLink = `mailto:${myEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoLink;

        setTimeout(() => {
            setEmail('');
            setSubject('');
            setBody('');
        }, 3000);
    };


    return (
        <div className='w-full h-screen flex flex-col justify-center items-center gap-4 bg-gradient-to-b from-blue-200 to-fuchsia-100 text-white'>
            <label className="w-96 input input-bordered flex items-center gap-2">
                <input type="email" className="grow" placeholder="Email" value={email} onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
            </label>

            <label className="w-96 input input-bordered flex items-center gap-2">
                <input type="text" className="grow" placeholder="Subject" value={subject} onChange={(e: ChangeEvent<HTMLInputElement>) => setSubject(e.target.value)} />
            </label>

            <textarea
                className="w-96 h-96 md:h-72 resize-none textarea textarea-bordered"
                placeholder="Type here"
                value={body}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setBody(e.target.value)}
            ></textarea>

            <button className='btn btn-primary w-96' onClick={handleSubmit}>
                Send
            </button>
        </div>
    );
};

export default Form;