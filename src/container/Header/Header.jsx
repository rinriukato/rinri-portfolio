import React from 'react'
import {motion} from 'framer-motion'
import { AppWrap } from '../../wrapper'
import {images} from '../../constants'

import './Header.scss';
const scaleVariants = {
  whileInView : {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0,1]}}
        transition={{ duration: 1}}
        className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>👋</span>
            <div style={ {marginLeft : 20}}>
              <p className='p-text'>Hello, I am</p>
              <h1 className="head-text">Isaiah</h1>
            </div>
          </div>
          
          <div className='tag-cmp app__flex'>
            <p className='p-text'>💻 Aspiring Software Developer</p>
            <p className='p-text'>♞ UCF Alumni</p>
            <p className='p-text'>🍜 All-around Cool Guy</p>
          </div>
        </div> 
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0,1]}}
        transition={{ duration: 1, delayChildren: 0.5}}
        className='app__header-info'
      >
        <img src={images.profile} alt="profile_bg"/>
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.unity, images.python, images.javascript].map((circle, index) => (
          <div className='circle-cmp app__flex' keys={`circle-${index}`}>
            <img src={circle} alt='profile_bg'/>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home')