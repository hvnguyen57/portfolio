import React from 'react';

const Backend = () => {
    return (
        <div className='skills_content'>
            <h3 className='skills_title'>Backend</h3>
            <div className='skills_box'>
                {/*Programming Languages */}
                <div className='skills_group'>
                    <div className='skills_data'>
                        <i class='bx bx-badge-check' ></i>
                        <div>
                            <h3 className='skills_name'>Java</h3>
                            <span className='skills_level'>Advanced</span>
                        </div>
                    </div>
                    <div className='skills_data'>
                        <i class='bx bx-badge-check' ></i>
                        <div>
                            <h3 className='skills_name'>Python</h3>
                            <span className='skills_level'>Intermediate</span>
                        </div>
                    </div>
                    <div className='skills_data'>
                        <i class='bx bx-badge-check' ></i>
                        <div>
                            <h3 className='skills_name'>C++</h3>
                            <span className='skills_level'>Basic</span>
                        </div>
                    </div>
                    <div className='skills_data'>
                        <i class='bx bx-badge-check' ></i>
                        <div>
                            <h3 className='skills_name'>Dart</h3>
                            <span className='skills_level'>Basic</span>
                        </div>
                    </div>
                </div>

                {/*Backend Frameworks*/}
                <div className='skills_group'>
                    <div className='skills_data'>
                        <i class='bx bx-badge-check' ></i>
                        <div>
                            <h3 className='skills_name'>Node.js</h3>
                            <span className='skills_level'>Basic</span>
                        </div>
                    </div>
                    <div className='skills_data'>
                        <i class='bx bx-badge-check' ></i>
                        <div>
                            <h3 className='skills_name'>Express.js</h3>
                            <span className='skills_level'>Basic</span>
                        </div>
                    </div>
                    <div className='skills_data'>
                        <i class='bx bx-badge-check' ></i>
                        <div>
                            <h3 className='skills_name'>Flask</h3>
                            <span className='skills_level'>Basic</span>
                        </div>
                    </div>
                    <div className='skills_data'>
                        <i class='bx bx-badge-check' ></i>
                        <div>
                            <h3 className='skills_name'>Django</h3>
                            <span className='skills_level'>Basic</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Backend;