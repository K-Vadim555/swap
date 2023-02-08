import React, { useEffect, useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import Page from '../../pages/Page';
import Btn from '../../ui/Btn/Btn'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "./Post.scss"
import logo from '../../../img/Group 1.png'
import '../../pages/pages.scss'
import logoText from '../../../img/Vector (2).svg'
import person from '../../../img/Vector.svg'
import Header from '../../pages/Header';
import Footer from '../../pages/Footer';
import copy from '../../../img/Group 603.svg'
import { ButtonBase, Divider } from '@mui/material';
import Qr from '../cc/CoinPrice';

export default function Post({ value , value1, afn1 , afn ,sum,rt1, rt,index, sum1, posts,  setPosts, post ,count  }) {

    let removePostById = (posts, setPosts, id) => {
        let arr = posts.filter((post) => post.id !== id)
        setPosts([...arr])
    }
    let [wait, setwait] = useState('waiting')
    let [val, setval] = useState(value)
    let [val1, setval1] = useState(value1)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '0px',
        left: '50%',
        transform: 'translate(-50%, 0%)',
        maxWidth:'1440px',
        width: '100%',
        height:'fit-content',
        overflow:'auto',
        bgcolor: 'background.paper',
       
        boxShadow: 24,
        overflowY: 'scroll',
        paddingTop:'20px',
   
      };
      
      const [anchorEl, setAnchorEl] = React.useState(null);

      let [min, setmin] = useState(30)
      const [ seconds, setSeconds ] = React.useState(0);
      let [min1, setmin1] = useState(0)
      const [ seconds1, setSeconds1 ] = React.useState(0);
  const [ timerActive, setTimerActive ] = React.useState(true);

  useEffect(() => {
    setTimeout(setSeconds1, 1000, seconds1 + 1);
    if ( seconds1 == 60) {
        setmin1(min1 + 1)
        setSeconds1(0)
    }
        
    if ( open == true && seconds > 0 && min > 0 ) {
        setTimeout(setSeconds, 1000, seconds - 1);
        
    } 
   if ( seconds == 0 && min > 0) {
       setmin(min - 1)
       setSeconds(60)
   }
   if ( seconds > 0 && min == 0) {
    setTimeout(setSeconds, 100, seconds - 1);
}
    if ( seconds == 0 && min == 0) {
    setmin(0 +"0")
    setSeconds(0 +"0")
} 

 if ( min == 0 +"0" && seconds == 0 +"0") {
    setOpen(false)
    setwait('falled')
} 
  
  }, [seconds , open , seconds1 ]);
 /*  React.useEffect(() => {
    if (seconds > 0 && timerActive) {
      setTimeout(setSeconds, 100, seconds - 1);
    } else {
         setTimerActive(!timerActive) 
       setSeconds(60) 
    }
  }, [ seconds, timerActive ]); */
    return ( 
         <div key={post.id} className="post">
           
            <div style={{
                
                justifyContent:'space-around',
                position:'relative'
            }} className="inner">
          
       
          <p className='postlist-post-title'>Your order <span className='postlist-post-title-span'>#{post.id}</span> is {wait}</p>
                <Divider width='auto' color='white'/> 
                <p className='seconds1' style={{color:'black'}}>{'a'+ min1+'m'+ 'and'+ seconds1 +'seconds ago '}</p>
              
          <div className='pp' > 
                
                <p style={{color:'black'}}>{post.title || 'none'}</p>
               {/*  <p style={{color:'black'}}>{post.content|| 'none'}</p>
                <p style={{color:'black'}}>{post.count || 'none'}</p>
                <p style={{color:'black'}}>{post.d || 'none'}</p>
                
                <p style={{color:'black'}}>{post.b || 'none'}</p>
                <p style={{color:'black'}}>{post.v || 'none'}</p>
                <p style={{color:'black'}}>{post.n || 'none'}</p>
                <p style={{color:'black'}}>{afn || 'none'}</p>
                <p style={{color:'black'}}>{afn1 || 'none'}</p> */}
               
               {/*  <p style={{color:'black'}}>{post.count*post.title }</p> */}
              
           </div>
           
          <div className="pp">     
          {/* <p style={{color:'black'}}>{post.d}</p> */}
         
             <p style={{color:'black'}}>{post.adress}</p>
        
          </div>
                
            </div>
          
            
                   <Btn className="btn" text={'OPEN'} func={handleOpen} />
                 
         
              
           


            
      <Modal
        open={open}
        style={{position:'relative'}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className='bgggg' style={style}> 
        <img className='b' src='./img/fdsdfsdfsdf 1.png'></img>
            <div className="bb"></div>
      
            <div className="modal">

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
                    <Button onClick={handleClose} className="Myorders">
                        <img  src={person} alt="" />
                        <p >My Orders</p>
                        
                    </Button>
                </div>
              <p className="logotext">Your order <span>#{post.id}</span></p>
              <p className='modal-title2'>Please complete the order within the time indicated below, otherwise it will be cancelled.</p>
              <p className='maodal-time'>{min + ':' + seconds}</p>
              <div>
      
   
       
    </div>
                <div className='pp' > 
                        
                        <p style={{color:'black'}}>{post.title}</p>
                    
                        <p style={{color:'black'}}>{post.count*post.title }</p>
                    
                </div>
                <div className="pp">     
                <p style={{color:'black'}}>{post.d}</p>
                
                    <p style={{color:'black'}}>{post.b*post.d}</p>
                
                </div>
                <div className="in-to">
                    <div className="in">
                        <p className='title'>You send</p>
                        
                        <Divider color='#B5B5B5'/>
                        <button style={{cursor:'pointer'}} className='copy-btn copy-btn1'
                                onClick={() => {
                                navigator.clipboard.writeText(post.title);
                                }}
                            >
                                <img src={copy} alt="" />{post.title}
                        </button>
                        <p className="adress-p">To the address:</p>
                        <button style={{cursor:'pointer'}} className='copy-btn'
                                onClick={() => {
                                navigator.clipboard.writeText(post.v);
                                }}
                            >
                              {post.v} <img src={copy} alt="" />
                             
                        </button>
                         <Qr value={post.v} />
                    </div>
                    <div className="to">
                        <p className='title'>You RECEIVE</p>
                        <Divider color='#B5B5B5'/>
                        <button style={{cursor:'pointer'}} className='copy-btn'
                                onClick={() => {
                                navigator.clipboard.writeText(post.adress);
                                }}
                            >
                              {post.adress} <img src={copy} alt="" />
                             
                        </button>
                        <p className="adress-p">To the address:</p>
                        <button style={{cursor:'pointer'}} className='copy-btn'
                                onClick={() => {
                                navigator.clipboard.writeText(post.v);
                                }}
                            >
                              {post.v} <img src={copy} alt="" />
                             
                        </button>
                        <p className='ex'>The exchange rate will be fixed after receiving 1 network confirmations.</p>
                    </div>
                </div>
       
          
        
        <Footer/>
            </div>
       
        </div>
        
      </Modal>

      <div>
    
    </div>




        </div>
    ) 
   
    
}
