import React from 'react';

const Footer = () => {
    return (
        <footer className="footer footer-center bg-slate-700 text-white p-4">
            <aside>
                <p className='text-center'>Copyright © {new Date().getFullYear()} - All right reserved by Endang Triyana</p>
            </aside>
        </footer>
    );
};

export default Footer;