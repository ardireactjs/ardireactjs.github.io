import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithubSquare, FaInstagramSquare } from 'react-icons/fa'

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://linkedin.com" target="_blank" without="true" rel="noreferrer"><BsLinkedin /></a>
            <a href="https://github.com" target="_blank" without="true" rel="noreferrer"> <FaGithubSquare /></a>
            <a href="https://instagram.com" target="_blank" without="true" rel="noreferrer"> <FaInstagramSquare/> </a>
        </div>
    )
}

export default HeaderSocials