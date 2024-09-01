import React from 'react';
import "../App.css"

const Hero = () => {
  return (
    <>
      <img className='background' src='\background.gif' />

    <div className='hero-top-div px-5 px-sm-1'>
     
        <div className='hero-left-div'>
            <div>
              <h2><span>Hi,</span> It's me</h2>
              <h1>Vishal Jaiswal</h1>
              <p>I am a BCA studend</p>
              <h4> a <span>Full stack developer</span></h4>
              <div className='buttons'>
                <a href="tel:+917352721419">
                  <button><i class="fa-solid fa-phone-volume"></i>&nbsp;&nbsp; Call me</button>
                </a>
                <a href='\myImage.jpeg' download="Resume" >
                  <button><i class="fa-regular fa-circle-down"></i>&nbsp;&nbsp;Resume</button>
                </a>
              </div>
            </div>
        </div>
        <div className='hero-right-div px-5 px-sm-1'>
            
            <div className='portfolio-image-div'>
                <img src='\myImage.jpeg' />
            </div>
        </div>

    </div>
    {/* <div className='arrow'>
      <i class="fa-solid fa-angles-right"></i>
    </div> */}
    </>
  )
}

export default Hero