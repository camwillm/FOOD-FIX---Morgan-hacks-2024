import React from 'react'
import './intro.css'
import { Link } from 'react-scroll';
import react2 from './full_width.png';

const Intro = () => {
    return (
        <section id='intro'>
            <div className='introcontent'>
                <img src={react2} alt='react2' className='bg' />
                <span className='hello'>Let Us Stop Hunger Together.</span>
                <span className='introtxt'>We're<span className='introname'>Holistic Food Fix,</span></span><span className='introjob'>Providing equitable nutrition</span>
                <p className='introparagraph'>for all, no matter the situation</p>
                <Link><button className='HireBtn'>More Info</button></Link>
            </div>



        </section >
    )
}

export default Intro