import React, { useState } from 'react'
import { images } from '../../constants'
import { AppWrap, MotionWrap} from '../../wrapper'
import { client } from '../../client'
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({name: '', email: '', message: ''})
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const {name, email, message} = formData
  
  const handleOnChange = (e) => {
    const { name, value } = e.target
    
    setFormData({...formData, [name] : value})
  }

  const handleSubmit = () => {
    setLoading(true)

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    }

    client.create(contact).then(() => {
      setLoading(false)
      setIsFormSubmitted(true)
    })
  }

  return (
    <>
      <h2 className='head-text'> Let's get in touch! </h2>

      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt='email' />
          <a href='mailto:rinriukato@gmail.com' className='p-text'>rinriukato@gmail.com (preferred!)</a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt='phone' />
          <a href='tel :+1 (352) 223-4853' className='p-text'>:+1 (352) 223-4853</a>
        </div>
      </div>

      {!isFormSubmitted ? 
      <div className='app__footer-form app__flex'>
        <div className='app__flex'>
          <input className='p-text' type='text' placeholder='Your Name' name='name' value={name} onChange={handleOnChange}/>
        </div>
        <div className='app__flex'>
          <input className='p-text' type='text' placeholder='Your Email' name='email' value={email} onChange={handleOnChange}/>
        </div>
        <div>
          <textarea
            className='p-text'
            placeholder='Your Message'
            value={message}
            name='message'
            onChange={handleOnChange}
          />    
        </div>
        <button type='button' className='p-text' onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'}</button>
      </div>
     : <div>
      <h3 className='head-text'> Thank you for getting in touch!</h3> 
     </div> }
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app_primarybg'
)