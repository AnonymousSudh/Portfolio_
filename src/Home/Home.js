import React from 'react'
import "./Home.css"
import SocialMedia from '../Component/SocialMedia/SocialMedia'
import Email from '../Component/Email/Email'
import Header from '../Component/Header'
import giff from '../image/s.svg'


function Home() {

  return (
    <>
      <Header />
        <SocialMedia />
      <section class="HomeSection">

        <div class="HomeContainer">
          <div class="introDiv">
            <h1 class="">Hi,
              I am <span className='span'>Sudhanshu Kumar</span></h1>
            <h3 class="Profession">Web & Android Developer</h3>
          </div>

          <div class="">
            <img class="GifImage" alt="hero" src={giff} />
          </div>

        </div>

        <Email />


      </section>

    </>
  )
}

export default Home