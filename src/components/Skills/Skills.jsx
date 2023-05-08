import React from 'react';
import "./skills.css";
import Frontend from './Frontend';
import Backend from './Backend';
import DatabaseAndTools from './DatabaseAndTools';


const Skills = () => {
    return(
        <section className="skills section" id='skills'>
            <h2 className="section_title">Skills</h2>
            <div className="section_sub">
                <span className="section_subtitle">Technical Level</span>
            </div>
            
            <div className='skills_container container grid'>
                <Frontend/>
                <Backend/>
                <DatabaseAndTools/>
            </div>
        </section>
        
    )
}

export default Skills;