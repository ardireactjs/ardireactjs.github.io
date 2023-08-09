import React from 'react'
import IMGABOUT from '../../assets/img/aboutMe.jpeg'
import { FaAward, FaChartBar } from 'react-icons/fa'
import { GiReceiveMoney } from 'react-icons/gi'
import './about.css'

const About = () => {
  const lamaWorking = '3+ Years Working In PT.Bank Rakyat Indonesia';
  const positionWorking = 'Front End Web Developer BRISPOT APP Division';
  const countProject = '50+ Project done';
  const penjelasanRinciAbout = 'I currently work for a company engaged in the financial sector, namely PT. Bank Rakyat Indonesia (BRI). My placement was in the APP division of the BRISPOT section as a front end web developer since June 2020 until now.'

  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={IMGABOUT} alt="AboutImage" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>{lamaWorking} </small>
            </article>
            
            <article className='about__card'>
              <GiReceiveMoney className='about__icon' />
              <h5>Position</h5>
              <small>{positionWorking} </small>
            </article>

            <article className='about__card'>
              <FaChartBar className='about__icon' />
              <h5>Project</h5>
              <small>{countProject} </small>
            </article>
          </div>

          <p className="about__content__details">{penjelasanRinciAbout}</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About