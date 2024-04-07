import React from 'react';
import './skills.css'
import buisness2 from './wholefoods.png'
import gear from './costco.png'
import python from './chipotle.png'
import react2 from './olivegarden.png'

const Skills = () => {
    return (
        <section id='skills'>
            <span className='skillTitle'>Information</span>
            <span className='skillDesc'>Many companies often have left over ingreients and product at the end of the evening. Tons struggle with the ability of atttaining the necesary nutrtrients or caloric intake. This is due to the disparities in society. Many people even if they can afford food can not afford the food with the positve impact on their health. This often leads to many problems including decline productivity. In addition a decline in both health and socially.</span>
            <span className='skillDesc'>-----</span>
            <span className='skillDesc'>Overall this could be improved with the food offered at the following establishments. They can offer up the rest of their not used food for the less fortunate.</span>
            <div className='skillBars'>
                <div className='skillbar'>
                    <img src={python} alt='python' className='skillBarImg' />
                    <div className='skillbarText'>
                        <h2>Chipotle</h2>
                        <p>Chipotle has to keep up a large stock and is considered one of the more healthier options of "fast food."</p>
                    </div>
                </div>
                <div className='skillbar'>
                    <img src={react2} alt='react2' className='skillBarImg' />
                    <div className='skillbarText'>
                        <h2>Olive Garden</h2>
                        <p>Italian cuisine that offers a tremendous amount of caloric intake.</p>
                    </div>
                </div>
                <div className='skillbar'>
                    <img src={gear} alt='gear' className='skillBarImg' />
                    <div className='skillbarText'>
                        <h2>costco</h2>
                        <p>Another company that can offer a ton of caloric intake. Wholesalers buy in bulk and if they cant sell it all they do not go to waste. They go to here to Holistic Food Fix</p>
                    </div>
                </div>
                <div className='skillbar'>
                    <img src={buisness2} alt='buisness2' className='skillBarImg' />
                    <div className='skillbarText'>
                        <h2>Whole Foods</h2>
                        <p>Whole Foods is the organic food capital where the best food can be found. They can provide tremendous nutritional value to the less fortunate.</p>
                    </div>
                </div>
                <span className='skillTitle'>How to find a location near you.</span>
                <div className='locationDropdowns'>
                    <select>
                        <option>Closest Chipotle location</option>
                        {/* Add options for Chipotle locations */}
                    </select>
                    <select>
                        <option>Closest Olive Garden location</option>
                        <option>White Marsh: 5.2 miles</option>
                        <option>Arundel Mills: 21.8 miles</option>
                    </select>
                    <select>
                        <option>Closest Costco location</option>
                        <option>Middle River: 7.7 miles</option>
                        <option>Glen Burnie: 10.0 miles</option>
                        <option>Owings Mills: 11.7 miles</option>
                    </select>
                    <select>
                        <option>Cosest Whole Foods location</option>
                        <option>West Baltimore: 3.8 miles</option>
                        <option>South Baltimore: 4.1 miles</option>
                        <option>Towson: 4.1 miles</option>


                    </select>
                    <select>
                        <option>Other Pickup Locations</option>
                        {/* Add options for Whole Foods locations */}
                    </select>
                </div>
            </div>
        </section>
    )
}

export default Skills