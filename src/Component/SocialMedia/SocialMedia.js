import React from 'react'
import './SocialMedia.css'
import linkdin from "../../image/linkdin.png"
import github from "../../image/github.png"
import twitter from "../../image/twitter.png"

function SocialMedia() {
    return ( 
        <div className='SocialParent'>
            <div className='SocialMedia'>
                <div className='SocialMediaContainer'>
                    <div className='SocialICon' >
                        <a href='https://github.com/AnonymousSudh' target='_black'>
                            <img src={github} />

                        </a>
                    </div>
                    <div className='SocialICon'>
                        <a href='https://www.linkedin.com/in/sudhanshu-maurya88/' target='_black'>
                            <img src={linkdin} />
                        </a>

                    </div>
                    <div className='SocialICon'>
                        <a href='https://twitter.com/SudhnshuM' target='_black'>
                            <img src={twitter} />
                        </a>

                    </div>
                </div>

                <div className='Line'></div>

            </div>
        </div>
    )
}

export default SocialMedia