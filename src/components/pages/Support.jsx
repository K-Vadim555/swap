import { Link } from 'react-router-dom'
import React from 'react'
import tg from '../../img/Group 611 (1).png'
import Email from '../../img/Group 611.png'
import '../pages/pages.scss'
export default function Support() {
  return (
    <div className='Support'>
        <p className='Support-title'>Support</p>
        <p className='Support-title2'>WE ARE HAPPY TO ASSIST YOU 24/7</p>
        <div className="Support-links">
            <Link to='/' className="Support-link">
                <img src={tg} alt="" />
                <p>Telegram</p>
            </Link>
            <Link to='/' className="Support-link">
            <img src={Email} alt="" />
                <p>Email</p>
            </Link>
        </div>
    </div>
  )
}
