import { useState } from 'react'
import './portfolio.css'
import IMG1 from '../../assets/img/loanAwal.png'
import IMG2 from '../../assets/img/registLoanWeb.png'
import IMG3 from '../../assets/img/registLoanMobile1.png'
import { Modal, Button } from 'antd'

const Portfolio = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const arrayArticle = [
    { id: 1, classArticle: 'portfolio__item', portItemImage: 'portfolio__item-image', portImg: `${IMG1}`, title: 'Register and login loan.bri.co.id', portLink1: 'http://google.com', portLink2: 'http://google.com', },
    { id: 2, classArticle: 'portfolio__item', portItemImage: 'portfolio__item-image', portImg: `${IMG2}`, title: 'Katalog Pengajuan KUR', portLink1: 'http://google.com', portLink2: 'http://google.com', },
    { id: 3, classArticle: 'portfolio__item', portItemImage: 'portfolio__item-image', portImg: `${IMG3}`, title: 'Web View Localoka', portLink1: 'http://google.com', portLink2: 'http://google.com', },
  ]
  const ArticlePortfolio = () => {
    return (
      <>
        {arrayArticle.map((item, index) => (
          <article key={index} className={item.classArticle}>
            <div className={item.portItemImage}>
              <img src={item.portImg} alt="" />
            </div>
            <h3>{item.title}</h3>
            <div className="portfolio__item-cta">
              {/* <Button className='btn' onClick={showModal}>
                Open Modal
              </Button> */}
              <a className='btn' onClick={showModal}>Detail</a>
              <a href={item.portLink2} className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
            </div>
          </article>
        ))}
        <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <p>ON DEVELOP...</p>
        </Modal>
      </>
    )
  }
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <ArticlePortfolio />
      </div>
    </section>
  )
}

export default Portfolio