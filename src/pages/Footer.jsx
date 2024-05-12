import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            Copyright &copy; 2024 all rights reserved, Designed by <Link to="/">Subrata</Link>
        </footer>
    )
}

export default Footer;