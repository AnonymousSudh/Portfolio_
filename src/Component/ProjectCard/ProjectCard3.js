import React from 'react'
import "./ProjectCard3.css"
import digitalClock from '../../image/digitalClock.png'
import githubWhite from "../../image/githubWhite.png"
import open from "../../image/open.png"

function ProjectCard(props) {
    return (
        <>
            <div className='ProjectCardDiv'>
                <div className='ProjectCardcontainer'>
                    <div className='ImgDiv '>
                        <img src={digitalClock} />
                    </div>
                    <div className='ProjectInfoDiv'>

                        <h1 className='ProjectTitle'>Digital Clock</h1>

                        <div className='ProjectTechnology'>
                            <div className='TechnologyHeading'>
                                <h6>HTML </h6>
                                <h6>Javascript</h6>
                            </div>

                            <div className='Imglink'>
                                <a href='https://github.com/AnonymousSudh/Digital-clock' target='_blank'>

                                    <img src={githubWhite} />
                                </a>
                                <a href='https://digital-clock-self.vercel.app/' target='_blank'>

                                    <img src={open} />
                                </a>
                            </div>
                        </div>


                        {/* <div className='ProjectDesContainer'> */}
                        <div className='ProjectDecParagraph'>
                            <p>This website contain One Digital clock and simulteneously one Analog clock. Based on  concept of date and time method in javascript.
                            </p>
                  
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectCard