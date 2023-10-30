import React from 'react';

const DatabaseAndTools = () => {
    return (
        <div className='skills_content'>
            <h3 className='skills_title'>Databases & Tools</h3>
            <div className='skills_box'>
                {/*Databases*/}
                <div className='skills_group'>
                    <div className='skills_data'>
                        <i class='bx bx-badge-check' ></i>
                        <div>
                            <h3 className='skills_name'>Firebase</h3>
                            <span className='skills_level'>Intermediate</span>
                        </div>
                    </div>
                    <div className='skills_data'>
                        <i class='bx bx-badge-check' ></i>
                        <div>
                            <h3 className='skills_name'>MongoDB</h3>
                            <span className='skills_level'>Basic</span>
                        </div>
                    </div>
                    <div className='skills_data'>
                        <i class='bx bx-badge-check' ></i>
                        <div>
                            <h3 className='skills_name'>MySQL</h3>
                            <span className='skills_level'>Basic</span>
                        </div>
                    </div>
                </div>

                {/*Tools*/}
                <div className='skills_group'>
                    <div className='skills_data'>
                        <i class='bx bx-badge-check' ></i>
                        <div>
                            <h3 className='skills_name'>AWS</h3>
                            <span className='skills_level'>Basic</span>
                        </div>
                    </div>
                    <div className='skills_data'>
                        <i class='bx bx-badge-check' ></i>
                        <div>
                            <h3 className='skills_name'>GCP</h3>
                            <span className='skills_level'>Basic</span>
                        </div>
                    </div>
                    <div className='skills_data'>
                        <i class='bx bx-badge-check' ></i>
                        <div>
                            <h3 className='skills_name'>Git</h3>
                            <span className='skills_level'>Basic</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DatabaseAndTools;