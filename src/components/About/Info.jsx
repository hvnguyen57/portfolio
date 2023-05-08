import React from 'react';

const Info = () => {
    return(
        <div className='about_info grid'>
            <div className='about_box'>
                <i class='bx bx-award about_icon' ></i>
                <h3 className='about_title'>Experience</h3>
                <span className='about_subtitle'>0-1 years</span>
            </div>

            <div className='about_box'>
                <i class='bx bx-time about_icon'></i>
                <h3 className='about_title'>Year</h3>
                <span className='about_subtitle'>Junior Year</span>
            </div>

            <div className='about_box'>
                <i class='bx bx-time about_icon'></i>
                <h3 className='about_title'>Current Tools</h3>
                <span className='about_subtitle'>Java, Python, React</span>
            </div>
        </div>
    )
}

export default Info;
