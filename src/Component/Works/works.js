import React from 'react'
import './works.css'
import pc1 from'./placecard1.jpg'
import pc2 from'./placecard2.jpg'
import pc3 from'./placecard3.jpg'
import pc4 from'./placecard4.jpg'
import pc5 from'./placecard5.jpg'
import pc6 from'./placecard6.jpg'

const Works = () => {
    return(
        <section id='works'>
            <h2 className='workstitle'>My Portfolio</h2>
            <span className='worksDesc'>Showing off some of my up to date projects in addition to the progress. I am still learning so while these are not complete examples they are a small showing.</span>
            <div className='worksImgs'>
                <img src={pc1} alt='' className='worksImg'/>
                <img src={pc2} alt='' className='worksImg'/>
                <img src={pc3} alt='' className='worksImg'/>
                <img src={pc4} alt='' className='worksImg'/>
                <img src={pc5} alt='' className='worksImg'/>
                <img src={pc6} alt='' className='worksImg'/>
            </div>
            <button className='workBtn'>See More</button>
        </section>
    )
}

export default Works