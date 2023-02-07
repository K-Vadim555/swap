import React from 'react'
import logo from '../../img/Group 1.png'
import '../pages/pages.scss'
import logoText from '../../img/Vector (2).svg'
import person from '../../img/Vector.svg'
import { Link , useParams } from "react-router-dom";
import SwipeableTemporaryDrawer from '../componentParts/CC2'
export default function Header() {
  return (
    <div className='header'>
         <Link to='/' className="logo-group">
            <img className='img1' src={logo} alt="" />
            <img className='img2' src={logoText} alt="" />
         </Link>
         <div className="link-group">
            <Link to='/aboutUs'>About</Link>
            <Link to='/FAQ'>FAQ</Link>
            <Link to='/Support'>Support</Link>
         </div>
         <Link to={'/orders'} className="Myorders">
            <img  src={person} alt="" />
            <p >My Orders</p>
            
         </Link>
         <div className="mob">
           <SwipeableTemporaryDrawer/>
         </div>
    </div>
  )
}
