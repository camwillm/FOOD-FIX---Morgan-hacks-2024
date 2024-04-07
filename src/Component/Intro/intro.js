import React from 'react'
import './intro.css'
import bg from '../Intro/sweetcorn.png'
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id='intro'>
            <div className='introcontent'>
                <span className='hello'>Let Us Stop Hunger Together.</span>
                <span className='introtxt'>We're<span className='introname'>Holistic Food Fix,</span></span><span className='introjob'>Providing equitable nutrition</span>
                <p className='introparagraph'>for all, no matter the situation</p>
                <Link><button className='HireBtn'>More Info</button></Link>
            </div>
            <img src={bg} alt="profile" className='bg' />
        </section >
    )
}

export default Intro