import React, { useRef } from 'react'
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import { ImHome } from 'react-icons/im';
import { BsInfoSquareFill } from 'react-icons/bs';
import { AiFillProject } from 'react-icons/ai';
import { IoDocumentText } from 'react-icons/io5';
import { MdPermContactCalendar } from 'react-icons/md';
import { TbCertificate } from 'react-icons/tb';

function Navbar() {
    const checkRef = useRef();

    const handleClick = () => {
        checkRef.current.checked = false;
    }

    return (
        <div className="nav-bar">
            <div className="logo">
                <Link to='/' className='d-flex align-items-center'>
                    <img src="avatarlogo.png" alt="Profile" />
                    <span className='ms-3 fs-3 fw-bolder'>Subrata Das</span>
                </Link>
            </div>
            <div className="navbar-items">
                <input id="toggleChecker" ref={checkRef} type="checkbox" />
                <label id="togglerLable" htmlFor="toggleChecker">
                    <div className="checkboxtoggler">
                        <div className="line-1"></div>
                        <div className="line-2"></div>
                        <div className="line-3"></div>
                    </div>
                </label>
                <div className="navbar-links">
                    <NavLink to='/' onClick={handleClick}><ImHome />Home</NavLink>
                    <NavLink to='/about' onClick={handleClick}><BsInfoSquareFill />About</NavLink>
                    <NavLink to='/projects' onClick={handleClick}><AiFillProject />Projects</NavLink>
                    {/* <NavLink to='/resume' onClick={handleClick}><IoDocumentText />Resume</NavLink> */}
                    <NavLink to='/certificates' onClick={handleClick}><TbCertificate />Certificates</NavLink>
                    <NavLink to='/contact' onClick={handleClick}><MdPermContactCalendar />Contact</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar;