import React from 'react';
import './skills.css'
import buisness2 from './buisness.png'
import gear from './gear.png'
import python from'./pythonlogo.png'
import react2 from'./reactlogoo.png'

const Skills = () => {
    return (
        <section id='skills'>
            <span className='skillTitle'>My Speacialties</span>
            <span className='skillDesc'>I am most skilled with web development and is the most relatable to my buisness world.</span>
            .<div className='skillBars'>
                <div className='skillbar'>
                    <img src={python} alt='python' className='skillBarImg' />
                    <div className='skillbarText'>
                        <h2>Proficiency In Python</h2>
                        <p>Python is my main language that I use primarily in university but also to solve most of the problems I encounter</p>
                    </div>
                </div>
                <div className='skillbar'>
                    <img src={react2} alt='react2' className='skillBarImg' />
                    <div className='skillbarText'>
                        <h2>Design In React</h2>
                        <p>React is what I mainly use when designing user interaces and enjoy being creative with it.</p>
                    </div>
                </div>
                <div className='skillbar'>
                    <img src={gear} alt='gear' className='skillBarImg' />
                    <div className='skillbarText'>
                        <h2>Website Building</h2>
                        <p>I really enjoy building websites and as I create this website im also working on one for my buisness which is my most complicated project.</p>
                    </div>
                </div>
                <div className='skillbar'>
                    <img src={buisness2} alt='buisness2' className='skillBarImg' />
                    <div className='skillbarText'>
                        <h2>Buisness Advancements</h2>
                        <p>Owning and running a buisnes for years I see the importance of marketing, communcication, managment, and other aspects that are crucial for its success.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills