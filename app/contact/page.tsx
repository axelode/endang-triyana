'use client'

import React from 'react';
import Navbar from '../component/navbar';
import Form from './components/form';
import Footer from '../component/footer';

const Contact = () => {
    return (
        <div className="w-full h-screen">
            <Navbar />
            <Form />
            <Footer />
        </div>
    );
};

export default Contact;