import React from 'react'
import "./Project.css"
import SocialMedia from '../Component/SocialMedia/SocialMedia'
import Email from '../Component/Email/Email'
import Header from '../Component/Header.js'
import ProjectCard from '../Component/ProjectCard/ProjectCard'
import ProjectCard2 from '../Component/ProjectCard/ProjectCard2'
import ProjectCard3 from '../Component/ProjectCard/ProjectCard3'


function Project() {
  return (
    <>
      <Header />
      <SocialMedia />
      <div className='ProjectDiv'>
        <div className='ProjectContainer'>

          <div className='Project project1'>
            <ProjectCard />
          </div>
          <div className='Project project2'>
            {/* <ProjectCard2 /> */}
          </div>
          <div className='Project project3'>
            <ProjectCard3 />
          </div>
        </div>
      </div>
      <Email />

    </>
  )
}

export default Project