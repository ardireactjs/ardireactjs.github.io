import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  const language = [
    { bahasa: 'HTML', level: '3+ Years', },
    { bahasa: 'CSS', level: '3+ Years', },
    { bahasa: 'PHP', level: '3+ Years', },
    { bahasa: 'Javascript', level: '2+ Years', },
    { bahasa: 'React.JS', level: '1+ Years', },
  ];

  const toolsLanguage = [
    { tools: 'Sourcetree', level: '3+ Years' },
    { tools: 'Github', level: '3+ Years' },
    { tools: 'Navicat', level: '3+ Years' },
    { tools: 'Postman', level: '3+ Years' },
  ];

  const libraryLanguage = [
    { label: "TailwindCSS", level: "2+ Years", },
    { label: "Bootstrap 5", level: "3+ Years", },
    { label: "Ant Design", level: "1+ Years", },
    { label: "Hook", level: "1+ Years", },
    { label: "Redux", level: "1+ Years", },
  ]

  const IsiArticleLanguage = () => {
    return (
      <>
        {language.map((item, index) => (
          <article key={index} className='experience__details'>
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>{item.bahasa}</h4>
              <small>{item.level}</small>
            </div>
          </article>
        ))}
      </>
    )
  }

  const IsiArticleLibrary = () => {
    return (
      <>
        {libraryLanguage.map((library, index) => (
          <article key={index} className='experience__details'>
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>{library.label}</h4>
              <small>{library.level}</small>
            </div>
          </article>
        ))}
      </>
    )
  }

  const IsiArticleTools = () => {
    return (
      <>
        {toolsLanguage.map((item, index) => (
          <article key={index} className='experience__details'>
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>{item.tools}</h4>
              <small>{item.level}</small>
            </div>
          </article>
        ))}
      </>
    )
  }

  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__language">
          <h3>Language Programming</h3>
          <div className="experience__content">
            <IsiArticleLanguage />
          </div>
        </div>

        <div className="experience__library">
          <h3>Library Language</h3>
          <div className="experience__content">
            <IsiArticleLibrary />
          </div>
        </div>

        <div className="experience__tools">
          <h3>Tools Language</h3>
          <div className="experience__content">
            <IsiArticleTools />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience