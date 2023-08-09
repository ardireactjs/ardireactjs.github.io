import { useState } from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineUser, AiOutlineContacts } from 'react-icons/ai'
import { BsFillBookFill } from 'react-icons/bs'
import { RiServiceLine } from 'react-icons/ri'
import { ImProfile } from 'react-icons/im'
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#header')
  return (
    <nav>
      <a href="#header" onClick={() => setActiveNav('#header')} className={activeNav ==='#header' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BsFillBookFill /></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><ImProfile /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineContacts /></a>
    </nav>
  )
}

export default Nav