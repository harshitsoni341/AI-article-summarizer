
import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-gray-800 text-white text-center py-0.5 fixed bottom-0 w-full text-sm">
            <p>&copy; {currentYear} Harshit singh. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
