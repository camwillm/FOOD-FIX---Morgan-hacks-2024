import React from 'react';
import './contact.css'
import fb from './facebook.png'
import insta from './instagram.png'
import twitter from './twitter.png'
import li from './linkedin.png'
import gh from './github.png'

const Contact = () => {
    return (
        <nav className="contactPage">
            <div id='contact'>
                <h1 className='contactPageTitle'>Donate to the Cause</h1>
                <span className='contactDesc'>If you wish to volunteer, fill out the form or, it can be submit directly.</span>
                <form className='contactForm'>
                    <input type="text" className='name' placeholder='Your Name' />
                    <input type="email" className='email' placeholder='Your Email' />
                    <textarea className='message' name='message' rows='5' placeholder='Your message' ></textarea>
                    <button type='submit' value='send' className='submitBtn'>Submit</button>
                    <div className='links'>
                        <img src={fb} alt='' className='link' />
                        <img src={insta} alt='' className='link' />
                        <img src={twitter} alt='' className='link' />
                        <img src={li} alt='' className='link' />
                        <img src={gh} alt='' className='link' />
                    </div>
                </form>


            </div>
        </nav>
    )
}

export default Contact