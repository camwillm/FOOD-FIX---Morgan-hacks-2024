import React from 'react'
import './intro.css'
import bg from '../Intro/reactimage-removebg-preview.png'
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id='intro'>
            <div className='introcontent'>
                <span className='hello'>hello</span>
                <span className='introtxt'>I'm<span className='introname'>Cam</span></span><span className='introjob'>Front-End Developer</span>
                <p className='introparagraph'>I'm a talented developer, passionate about my craft, by creating visual and functional apps.</p>
                <Link><button className='HireBtn'>Hire Me</button></Link>
            </div>
            <img src={bg} alt="profile" className='bg' />
        </section >
    )
}

export default Intro