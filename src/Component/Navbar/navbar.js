import React from 'react';
import './navbar.css'
import logo from '../Navbar/circle.png';
import { Link } from 'react-scroll';
const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="" className='imgsizing' />
            <div className='desktopMenu'>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={700} className='desktopMenuListItem'>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={700} className='desktopMenuListItem'>Distribution</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={100} duration={700} className='desktopMenuListItem'>Food Drive</Link>
            </div>
            <button className='desktopMenuBtn' onClick={() => {
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }}>
                <img src="" alt="" className="desktopMenuImg" />Donate</button>
        </nav>
    )
}

export default Navbar