import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {

  const arrayDev = [
    { valueDev: "Develop new feature with php codeigniter 3 + Bootstrap or Tailwind CSS" },
    { valueDev: "Develop new feature with React JS + Tailwind css + hook + ant design" },
    { valueDev: "Develop existing feature with React JS" },
    { valueDev: "Develop existing feature with codeigniter 3" },
  ]

  const bugFixDev = [
    { valueFix: "Fixing an incorrect code" },
    { valueFix: "Ppdate a code to be more dynamic" },
    { valueFix: "Revamp the coding structure to be more efficient" },
  ]

  const WebDev = () => {
    return (
      <>
        {arrayDev.map((items, index) => (
          <li key={index}>
            <BiCheck className='service__list-icon' />
            <p>{items.valueDev}</p>
          </li>
        ))
        }
      </>
    )
  }

  const BugDev = () => {
    return (
      <>
        {bugFixDev.map((items,index)=> (
          <li key={index}>
          <BiCheck className='service__list-icon' />
          <p>{items.valueFix}</p>
        </li>
        ))}
      </>
    )
  }
  return (
    <section id="services">
      <h5>What i offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <WebDev />
          </ul>
        </article>

        <article className="service">
          <div className='service__head'>
            <h3>Bug Fixing</h3>
          </div>

          <ul className='service__list'>
            <BugDev />
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services