import React from 'react'
import logo from '../../img/Group 1.png'
import '../pages/pages.scss'
import logoText from '../../img/Vector (2).svg'
import person from '../../img/Vector.svg'
import { Link , useParams } from "react-router-dom";
import { Divider } from '@mui/material'
import inst from '../../img/Group 53.svg'
import tg from '../../img/Group 54.svg'
import f from '../../img/Group 55.svg'
import yt from '../../img/Group 56.svg'

export default function Footer() {
  return (
    <div className='footer'>
        <div className="footer-block1">

       
                <div  >
                    <Link to='/' className="logo-group">
                         <img className='img1' src={logo} alt="" />
                        <img className='img2' src={logoText} alt="" />
                    </Link>
                   <p className='logo-group-p'>© 2018–2022. SWAPCOINS. All rights reserved.</p>
                </div>
                <div className="link-group">
                    <Link to='/aboutUs'>About</Link>
                    <Link to='/FAQ'>FAQ</Link>
                    <Link to='/Support'>Support</Link>
                </div>
                <div  className="terms">
                   
                    <p >Terms and conditions</p>
                    <p>Privacy Policy</p>
                    
                </div> 
             
                
        </div>   
         <Divider  color='white' />
         <div className="footer-block2">
                    <Link to='/'><img src={inst} alt="" /></Link>
                    <Link to='/'><img src={tg} alt="" /></Link>
                    <Link to='/'><img src={f} alt="" /></Link>
                    <Link to='/'><img src={yt} alt="" /></Link>
         </div>
               
    </div>
  )
}
