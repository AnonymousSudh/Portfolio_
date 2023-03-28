import React from 'react'
// import "./ProjectCard.css"
import quoteApp from '../../image/quoteApp.png'
import githubWhite from "../../image/githubWhite.png"
import open from "../../image/open.png"

function ProjectCard() {
    return (
        <>
            <div className='ProjectCardDiv'>
                <div className='ProjectCardcontainer'>
                    <div className='ImgDiv '>
                        <img src={quoteApp} />
                    </div>
                    <div className='ProjectInfoDiv'>

                        <h1 className='ProjectTitle'>Quote App</h1>

                        <div className='ProjectTechnology'>
                            <div className='TechnologyHeading'>
                                <h6>Api</h6>
                                <h6>Javascript</h6>
                            </div>

                            <div className='Imglink'>
                                <a href='https://github.com/AnonymousSudh/Quote_App' target='_blank'>

                                    <img src={githubWhite} />
                                </a>
                                <a href='https://quote-app-theta.vercel.app/' target='_blank'>

                                    <img src={open} />
                                </a>
                            </div>
                        </div>


                        {/* <div className='ProjectDesContainer'> */}
                        <div className='ProjectDecParagraph'>
                            <p>This is a Javascript based project which fetch Quotes from a Api. Every click will gets a new Quote with its auther name also.
                            </p>
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectCard