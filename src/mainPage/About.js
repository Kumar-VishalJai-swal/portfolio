import React from 'react'

const About = () => {
  return (
    <div className='about-me-top-div'>
       <div className='about-me'>
       <div className='about-left-image'>
            <img src='\developer.gif' />
        </div>
        <div className='about-me-disc'>
            <p>Hello, I am <span>Vishal Jaiswal</span>, a dedicated and passionate student currently pursuing <span>Bachelor degree in Computer Application</span> at <span>MAULANA MAZHARUL HAQUE ARABIC & PERSIAN UNIVERSITY</span>. With a strong foundation in <span>web development</span>, I am eager to apply my knowledge and skills to real-world challenges. Throughout my academic journey, I have developed a deep interest in <span>Full Stack Development</span>, which has driven me to actively seek opportunities for growth and learning.
              My portfolio showcases a collection of projects, assignments, and experiences that reflect my commitment to excellence and my desire to make meaningful contributions in my field. As I continue to develop my skills, I am excited to explore new opportunities and collaborate with others who share my passion for It Industry.</p>
        </div>
       </div>
        <div className='bird-div'>
          <img src='\birdgif.gif' loading='lazy'/>
        </div>
    </div>
  )
}

export default About