// import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp, BsFacebook } from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com';
import { Alert } from 'antd'

const Contact = () => {
  const form = useRef();
  const alertSuccess = (result) => {
    return (
      <Alert
        message="Send Message Success"
        // description="Your Message Success Delivery"
        description={result.text}
        type="success"
        showIcon
      />
    )
  }

  const alerGagal = (error) => {
    return (
      <Alert
        message="Error"
        description={error.text}
        type="error"
        showIcon
      />
    )
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ocushdh', 'template_wnw502s', form.current, 'Gj7Gl1FZA5mnV25yL')
      .then((result) => {
        console.log(result.text);
        e.target.reset()
        {() => alertSuccess(result) }
        alert(result.text)
      }, (error) => {
        console.log(error.text);
        {() => alerGagal(error)}
        alert(error.text)
      });
  };

  const articleContact = [
    { id: 1, span: <MdOutlineEmail className='contact__option-icon' />, title: "Email", subtitle: "ardiyantop8@gmail.com", link: "mailto:ardiyantop8@gmail.com", pesanLink: "Send a Massage", target: "_blank" },
    { id: 2, span: <BsFacebook className='contact__option-icon' />, title: "Facebook", subtitle: "ardy.putra.5", link: "https://www.facebook.com/ardy.putra.5", pesanLink: "Send a Massage", target: "_blank" },
    { id: 3, span: <BsWhatsapp className='contact__option-icon' />, title: "WhatsApp", subtitle: "+62-81388-55-1206", link: "https://api.whatsapp.com/send?phone+6281388551206", pesanLink: "Send a Massage", target: "_blank" },
  ];
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className='contact__options'>
          {articleContact.map((item, index) => (
            <article key={index} className='contact__option'>
              {item.span}
              <h4>{item.title ? item.title : ''}</h4>
              <h5>{item.subtitle ? item.subtitle : ''}</h5>
              <a href={item.link} target={item.target}>{item.pesanLink ? item.pesanLink : ''}</a>
            </article>
          ))}
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="text" name='email' placeholder='Your Email Active' required />
          <textarea name="message" cols="30" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send a Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact