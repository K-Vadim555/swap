import React, { useEffect, useState } from 'react';
import Post from '../componentParts/Post/Post';
import Btn from '../ui/Btn/Btn';
import Input from '../ui/Input/Input';
import axios from 'axios'
import bg from '../../img/fdsdfsdfsdf\ 1.png'
import './pages.scss'
import useWebSocket, { ReadyState } from 'react-use-websocket';
import TextField from '@mui/material/TextField';
import { useCallback } from 'react';
import CurrencyInput from '../componentParts/cc/CurrencyInput';

import CurrTable from '../componentParts/CurrTable';
import fromTo from '../../img/Frame 12.svg'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Popover from '@mui/material/Popover';
import search from '../../img/Group 593.svg'
import Arrow from '../../img/Arrow 4.svg'


import Search from 'antd/es/transfer/search';
import Coins from '../componentParts/cc/Coins';
const Main = ({  afn,afn1 ,rt   ,rt1  ,text1, text2,  setafn , setafn1 ,setrt   ,setrt1  ,settext1,settext2,  coin2Name ,coin1Name , setCoin1Name,setCoin2Name,coin2,coin1, SearchedPosts ,setSearchedPosts , posts , setPosts ,amount1 ,amount2 , currency1 , currency2 , rates,
  setAmount1,setAmount2,setCurrency1 , setCurrency2 , setRates
}) => {

 
      
    
     
     {/*----------------COTEGORIES  -------------------------*/ }
      let [selectedSort, setselectedSort] = useState('')
      let [sortedPosts, setsortedPosts] = useState([])
    
      useEffect(() => {
        let arr = [...posts]
        arr.sort((post1, post2) => {
          {/*---------------- СМОТРИ В <select>...</select>  -------------------------*/ }

          if (selectedSort == 'descending') {
            return post2.title.localeCompare(post1.title)
          } else if (selectedSort == 'ascending') {
            return post1.title.localeCompare(post2.title)
          }
        })  
        setsortedPosts(arr)
      }, [posts, selectedSort])
    {/*---------------- SEARCH  -------------------------*/ }
      
      let [searchQuery, setsearchQuery] = useState('')
     /*  useEffect(() => {
        let arr = [...names].filter((post) => ((post.title.includes(searchQuery)) || (post.content.includes(searchQuery)) || (post.count.includes(searchQuery))))
        setSearchedPosts(arr)
        console.log(SearchedPosts);
      }, [ searchQuery, sortedPosts])
     */
      

      let addNewPost = (e) => {
        e.preventDefault()
    
       
          let obj = {
            id: Math.random(),
            title: e.target[0].value,
            content: e.target[1].value,
            count: e.target[2].value,
            d: e.target[3].value,
            adress: e.target[4].value,
            b:e.target[5].value,
            v: e.target[6].value ,
            n: e.target[7].value ,
          

           
          }
    
    
    
          setPosts([...posts, obj])
        
    
          e.target[0].value = ''
          e.target[1].value = ''
          e.target[2].value = ''
          e.target[3].value = ''
          e.target[4].value = ''
          e.target[5].value = ''
          
          if (e.target[6].value  !== '') {
            setstatus('succses')
            
          }
          
          
        }
      
      
      
      
     /*  useEffect(() => {
      
        // axios.get('https://api.apilayer.com/fixer/latest?base=USD&apikey=upQc6y6o1um2O4B8LHn1ZVC0FE9elubP')
        // axios.get('http://api.coinlayer.com/live?access_key=75c3867537d1ac51fc3750464c852a3a')
        .then(response => {
            setRates(response.data.rates);
          })
      }, []); */
      useEffect(() => {
        //  console.log(apikey)
     
       
        axios.get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD')
      .then(({data: {Data} }) => {
        // handle success
        setRates(Data)
      //  console.log(Data)
        
       // setax( data.data.response.results )
      })
      .catch(function (error) {
        // handle error
       // console.log(error);
      })
      .finally(function () {
        // always executed
      })
     
       
       }, []);
      useEffect(() => {
        if (!!rates) {
          function init() {
            handleAmount1Change(1);
          }
          init();
        }
      }, [rates]);
      function format(number) {
        return number.toFixed(4);
      }
      function handleAmount1Change(amount1) {
        const sum = amount1 * coin1 / rates[currency2]
        setAmount2(format(sum + sum/100*5));
        setAmount1(amount1);
      }
      /* let func = useCallback(() => 
        sendJsonMessage({
          method: 'SUBSCRIBE',
          params: [Coin1Name + 'usdt@ticker'],
          id: 1,
        }),
      [sendJsonMessage])
      function handleCurrency1Change(currency1) {
        setAmount2(format(amount1 * rates[currency1] / rates[currency2]));
        setCurrency1(currency2);
        
      }
      function handleAmount2Change(amount2) {
        const sum1 = amount2 * rates[currency2] / rates[currency1]
        setAmount1(format(sum1 + sum1/100*5));
        setAmount2(amount2);
      }
      function handleCurrency2Change(currency2) {
        setAmount1(format(amount2 * rates[currency2] / rates[currency1]));
        setCurrency2(currency2);
      }
      let [target, settarget] = useState('')
      let targ = () => {
         settarget('')
      } */
      let stepGroup = [
        {
          num:'01',
          src:'',
          B2content1:'SECURE',
          B2content2:'No registration required. We don’t need your data. We don’t store your coins. Exchange happens automatically.',
          B1content1:'Select the exchange pair',
          B1content2:'Indicate the amount of the coin you wish to send, and indicate the coin you wish to get.',
        },
        {
          src:'',
          B2content1:'NO HIDDEN FEES',
          B2content2:'We have a transparent fees policy, you only pay 0.15% from the transaction, while we try to match the best exchange rates.',
          num:'02',
          B1content1:'Enter your wallet address',
          B1content2:'Input the wallet address, where you wish to receive your new coins from us.',
        },
        {
          src:'',
          B2content1:'EASY TO TRACK',
          B2content2:'Once you place your order, it will be easily trackable by visting «my orders» section.',
          num:'03',
          B1content1:'Deposit your coins',
          B1content2:'Send the coins to the address we specify for this order.',
        },
        {
          src:'',
          B2content1:'',
          B2content2:'',
          num:'04',
          B1content1:'Receive your new coins',
          B1content2:'Once we receive your coins, we immediately send you back the coins you.',
        },
      ]
      let stepGroup1 = [
        {
          num:'01',
          src:'./img/svgviewer-output (21) 1.png',
          B2content1:'SECURE',
          B2content2:'No registration required. We don’t need your data. We don’t store your coins. Exchange happens automatically.',
          
        },
        {
          src:'/img/svgviewer-output (24) 1.png',
          B2content1:'NO HIDDEN FEES',
          B2content2:'We have a transparent fees policy, you only pay 0.15% from the transaction, while we try to match the best exchange rates.',
          num:'02',
         
        },
        {
          src:'/img/svgviewer-output (25) 1.png',
          B2content1:'EASY TO TRACK',
          B2content2:'Once you place your order, it will be easily trackable by visting «my orders» section.',
          num:'03',
        
        },
       
      ]



      let [a, seta] = useState([])
      useEffect(() => {
       //  console.log(apikey)
    
      
       axios.get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD')
     .then(({data: {Data} }) => {
       // handle success
       seta(Data)
     //  console.log(Data)
       
      // setax( data.data.response.results )
     })
     .catch(function (error) {
       // handle error
      // console.log(error);
     })
     .finally(function () {
       // always executed
     })
    
      
      }, []);
     
      let [names, setnames] = useState([])
      const names1 = []
      
      a.forEach((data) => {
        let f = data.CoinInfo.Name
       /*  names.push(
      <>  <option  onClick = {() => setafn(f)} value={data.RAW.USD.PRICE }>  <img style={{width:'20px',height:'20px'}}  src={`https://www.cryptocompare.com/${data.RAW.USD.IMAGEURL}`}/>   {data.CoinInfo.Name}</option> 

       </>

      
       ) */
       names.push(
        <>  <option  onClick = {() => setafn(f)} value={data.RAW.USD.PRICE }>  <img style={{width:'20px',height:'20px'}}  src={`https://www.cryptocompare.com/${data.RAW.USD.IMAGEURL}`}/>   {data.CoinInfo.Name}</option> 
  
         </>
  
        
         )
       names1.push(
        <>  <option  onClick = {() => setafn1(f)} value={data.RAW.USD.PRICE }>
          {/*   <img style={{width:'20px',height:'20px'}}  src={`https://www.cryptocompare.com/${data.RAW.USD.IMAGEURL}`}/> */}
            <span 
            className='sapn'
  ></span>
               {data.CoinInfo.Name}</option> 
  
         </>
  
        
         )
      })
    
      let sum = rt*text1/rt1
      let [value, setValue] = useState('')
      let [value1, setValue1] = useState('')
      const onChange = (event) => {
        setValue(event.target.value);
      };
    
      const onSearch = (searchTerm) => {
        setValue(searchTerm);
        // our api to fetch the search result
        console.log("search ", searchTerm);
      };
    
    /*   let [searchQuery1, setsearchQuery1] = useState('')

      useEffect(() => {
        let arr = [...names].filter((post) => ((post.includes(searchQuery1))  ))
        setnames(arr)
      }, [names, searchQuery1]) */
      const onChange2 = () => {
        
      };
      
      const onSearch2 = (searchTerm) => {
        setValue1(searchTerm);
      };
      const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
      const [open1, setOpen1] = React.useState(false);
      const [anchorEl, setAnchorEl] = React.useState(null);
      const [anchorEl1, setAnchorEl1] = React.useState(null);
      let [type, settype] = useState('submit')

      const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };
    
      const open = Boolean(anchorEl);
      const id = open ? 'simple-popover' : undefined;
      const open3 = Boolean(anchorEl1);
      const id1 = open3 ? 'simple-popover' : undefined;
      const summa = sum+ sum/100*5
      
      if (value == value1 ) {
          setrt1('')
       
      }
      
      
     

      let [status, setstatus] = useState('')
     
    return (
        <div className="Main"> 
        
         <p className='logotext'>Lightning <span>cryptocurrency</span> exchange</p>
         <form className="block1" onSubmit={(e) => addNewPost(e)}>
    
        <p>CHOOSE EXCHANGE DIRECTION</p>
     
          <div className='pf'>
            <div className="sec sec1">
                 <p> SEND</p>
                  <div className="select-input">
                 
                      <TextField style={{color:'white',
                                   
                                    }} 
                             variant='outlined'
                             value={text1 || ''}
                             onChange={(e)=> {settext1(e.target.value)}}
                             autoComplete='on'/>
                           <div style={{
                            height:'fit-content'
                           }}>
                            
                        <Button aria-describedby={id} className="value-button" onClick={handleClick}>
                        {value || 'BTC'}
                        </Button>
                        <Popover
                          id={id}
                          open={open}
                          anchorEl={anchorEl}
                          onClose={handleClose}
                          anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                          }}
                        >
                        <div className="search-container">
                        <div className="search-bg">

                        </div>
                        <div className="search-inner">
                          <input placeholder='Type a currencies' type="text" value={value} onChange={onChange} />
                          <img src={search} alt="" />
                        </div>
                      <div  className="dropdown">
                  
                        {a
                          .filter((item) => {
                            const searchTerm = value.toLowerCase();
                            const fullName = item.CoinInfo.Name.toLowerCase();
                          
                            return (
                            
                              fullName.startsWith(searchTerm) &&
                              fullName !== searchTerm
                            );
                          })
                          .slice(0, 10)
                          .map((item) => (
                            <div
                              onClick={(e) => {onSearch(item.CoinInfo.Name) 
                                setrt(e.target.textContent )
                                setAnchorEl(null);
                              }}
                              className="dropdown-row"
                              value={rt} 
                              key={item.CoinInfo.Name}
                            >    
                                            <p className='rg' ><img className='rg2' style={{width:'20px',height:'20px'}}  src={`https://www.cryptocompare.com/${item.RAW.USD.IMAGEURL}`}/>{item.CoinInfo.Name || 'none'}</p>
                                <p className='rg1' >{item.RAW.USD.PRICE  || 'none'}</p>
                              
                            </div>
                          ))}
                      </div>
                    </div>
                        </Popover>
    </div>
      {/*                            <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <div
        open={open1}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </div> 
    </div>*/}
                             
              {/*          {rt}
                   <Select showSearch    onChange={onChange2}
    onSearch={onSearch2}   style={{ width: 120 }}>
      {rates.map((rate) => {
        return(
         <>  <Select.Option  value={rate.RAW.USD.PRICE}>{rate.CoinInfo.Name}<img style={{width:'20px',height:'20px'}}  src={`https://www.cryptocompare.com/${rate.RAW.USD.IMAGEURL}`}/></Select.Option>
          
         </>
        
   
        )
      })} 
          </Select>     */}
          {/* <select className='select'  value={rt}    onChange = {(e) => setrt(e.target.value )} name="" id="">
                            {a.map((test)=> {
                                return( 
                                  
                                  <option   value={test.RAW.USD.PRICE }>  <img style={{width:'20px',height:'20px'}}  src={`https://www.cryptocompare.com/${test.RAW.USD.IMAGEURL}`}/>   {test.CoinInfo.Name}</option> 
                                )})}
                            </select> */}
                          {/*    <select className='select'  value={rt}    onChange = {(e) => setrt(e.target.value )} name="" id="">
                            {names.map((test)=> {
                                return( 
                                  
                                < >{test}{afn}</>
                                )})}
                            </select>
          
                   */}
            
              
                    </div> 
            </div>
         
            <div onClick={() => {
            settext1(summa)
            settext2(text1)
            setrt(rt1)
            setValue(value1)
            setValue1(value)
            setrt1(rt)
            setafn(afn1)
            setafn1(afn) 
           }} className="from-to"><img src={fromTo} alt="" /></div>
            <div className="sec">
                 <p>RECEIVE</p>
                 <div className="select-input">
                 <div>
                            
                            <Button aria-describedby={id1} className="value-button" onClick={(e) => {setAnchorEl1(e.currentTarget);}}>
                             {value1 || 'BTC'}
                            </Button>
                            <Popover
                              id={id1}
                              open={open3}
                              anchorEl={anchorEl1}
                              onClose={() => { setAnchorEl1(null)}}
                              anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                              }}
                            >
                            <div className="search-container">
                            <div className="search-bg"></div>
                          <div className="search-inner">
                            <input type="text" value={value1} onChange={(event) => {  setValue1(event.target.value);}} />
                           
                          </div>
                          <div  className="dropdown">
                       
                            {a
                              .filter((item) => {
                                const searchTerm = value1.toLowerCase();
                                const fullName = item.CoinInfo.Name.toLowerCase();
                               
                                return (
                                 
                                  fullName.startsWith(searchTerm) &&
                                  fullName !== searchTerm
                                );
                              })
                              .slice(0, 10)
                              .map((item) => (
                                <div
                                  onClick={(e) => {onSearch2(item.CoinInfo.Name) 
                                    setrt1(e.target.textContent )
                                    setAnchorEl1(null);
                                  }}
                                  className="dropdown-row"
                                  value={rt1} 
                                  key={item.CoinInfo.Name}
                                > 
                                  
                                                <p className='rg' > <img className='rg2' style={{width:'20px',height:'20px'}}  src={`https://www.cryptocompare.com/${item.RAW.USD.IMAGEURL}`}/>{item.CoinInfo.Name || 'none'}</p>
                                    <p className='rg1' >{item.RAW.USD.PRICE  || 'none'}</p>
                                  
                                </div>
                              ))}
                          </div>
                        </div>
                            </Popover>
                          </div>
                         {/*  <select className='select'  value={rt1}    onChange = {(e) => setrt1(e.target.value )} name="" id="">
                              {names1.map((test)=> {
                                  return( 
                                    < >{test}</>
                                  )
                                    
                                })}
                          </select> */}
                          <TextField style={{color:'white',
                                  
                                  }} variant='outlined'
                          value={ summa || ''}
                          onChange={(e)=> {settext2(e.target.value)}}
                          autoComplete='off'/>
                 </div>

            </div>
           
          </div>
         
       {/*   <Btn func={() => {
           setAmount1(amount2);
           setAmount2(amount1);
           setCurrency2(currency1);
           setCurrency1(currency2);
        }} text={'<>'}/> */}
    
      
    
      
       
         <Coins status={status} setstatus={setstatus}/>
        <p style={{color:'white'}}>{status}</p>
        <Btn type={type} text={'EXCHANGE NOW'}/>
      </form>
    
     {/*  <p style={{color:'white'}}>{rt}<br></br></p>
      <p style={{color:'white'}}>{rt1}<br></br></p>
      <p style={{color:'white'}}>{afn}<br></br></p>
      <p style={{color:'white'}}>{afn1}<br></br></p>
      <p style={{color:'white'}}>{value}<br></br></p>
      <p style={{color:'white'}}>{value1}<br></br></p> */}
         
        <div className="block2">
        <p className='logotext'><span>HOW IT WORKS</span></p>
         <p className='start'>Start exchanging in seconds</p>
        <div className="step-group">
            {stepGroup.map((step) => {
              return (
                <div key={step.num} className="step">
                <div className="step-number">
                  <div className="">
                     <p className='step-text'>step</p>
                  <p className='step-num'>{step.num}</p>
                  </div>
                 
                </div>
                <p className='step-content1'>{step.B1content1}</p>
                <p className='step-content2'>{step.B1content2}</p>
              </div>
              )
              
            })}
     
        </div>
         </div> 
         <div className="block3 block2">
        <p className='logotext'><span>OUR ADVANTAGES</span></p>
         <p className='start'>Best in class exchange service</p>
        <div className="step-group">
            {stepGroup1.map((step) => {
              return (
                <div key={step.num} className="step">
                <div className="step-number1">
                
                     <img src={step.src} className='step-img'/>
                  <p className='step-num1'>{step.B2content1}</p>
                
                 
                </div>
               
                <p className='step-content2'>{step.B2content2}</p>
              </div>
              )
              
            })}
     
        </div>
         </div> 
         <div className="block4">
            <CurrTable/>
         </div>
         <div className="block5">
         <p className='logotext'><span>our clients</span></p>
         
         <div className=" postlist">
     {/*  <img className='bg' src={bg}></img> */}
        <div className="post">
          <p>A TWENTY SECONDS AGO</p>
          <p>3 BTC</p>
          <img className='rg2' style={{width:'20px',height:'20px'}}  src='https://www.cryptocompare.com//media/37746251/btc.png'/>
        <img className='rg2'style={{width:'20px'}} src={Arrow} alt="" />
        <img className='rg2' style={{width:'20px',height:'20px'}}  src='https://www.cryptocompare.com//media/37746338/usdt.png'/>

          <p>USDT</p>
          </div>
          <div className="post">
       <p>A ONE MINUTWS AGO</p>
      <p>1 BTC</p>
      <img className='rg2'   src='https://www.cryptocompare.com//media/37746251/btc.png'/>
    <img className='rg2' src={Arrow} alt="" />
    <img className='rg2'   src='https://www.cryptocompare.com//media/37746238/eth.png'/>

      <p>ETH</p>
      </div>
      <div className="post">
       <p>A TWO MINUTES AGO</p>
      <p>2 BNB</p>
      <img className='rg2'   src='https://www.cryptocompare.com//media/40485170/bnb.png'/>
    <img className='rg2' src={Arrow} alt="" />
    <img className='rg2'   src='https://www.cryptocompare.com//media/37746248/busd.png'/>

      <p>BUSD</p>
      </div>
      <div className="post">
       <p>A FOUR MINUTES AGO</p>
      <p>5 DOGE</p>
      <img className='rg2'   src='https://www.cryptocompare.com//media/37746339/doge.png'/>
    <img className='rg2' src={Arrow} alt="" />
    <img className='rg2'   src='https://www.cryptocompare.com//media/38553096/xrp.png'/>

      <p>XRP</p>
      </div>
      <div className="post">
          <p>A SEVEN MINUTES AGO</p>
          <p>1 ETH</p>
          <img className='rg2'   src='https://www.cryptocompare.com//media/37746238/eth.png'/>
        <img className='rg2' src={Arrow} alt="" />
        <img className='rg2'   src='https://www.cryptocompare.com//media/37746339/doge.png'/>

          <p>DOGE</p>
          </div>
          <div className="post">
          <p>A SEVEN MINUTES AGO</p>
          <p>10 SQL</p>
          <img className='rg2'   src='https://www.cryptocompare.com//media/37747734/sol.png'/>
        <img className='rg2' src={Arrow} alt="" />
        <img className='rg2'   src='https://www.cryptocompare.com//media/38553096/xrp.png'/>

          <p>XRP</p>
          </div>
     
    {posts.map((post , index) => {
      return (
        <Post 
          value={value}
          value1={value1}
          afn={afn}
          sum={sum}
          index={index}
          key={post.id}
          posts={posts} 
          setPosts={setPosts} 
          post={post} 
        />
      )
    })}
  </div>
         </div>
     {/**
      * <div className="container">
        <select onChange = {(e) => setselectedSort(e.target.value)}>
          <option value={'default'}>по умолчанию</option>
          <option value={'ascending'}>по возрастанию</option>
          <option value={'descending'}>по убыванию</option>
        </select>

       
      </div>
      */} 
      
    {/**
     *   <div className="postList">
        {SearchedPosts.map((post) => {
          return (
            <Post 
           
              
             
              key={post.id}
              posts={SearchedPosts} 
              setPosts={setPosts} 
              post={post} 
            />
          )
        })}
      </div>
     */} 
    

      {/* <div className="postList">
        {posts.map((post) => {
          return (
            <div key={post.id} className="post">
              <div className="inner">
                <h3>{post.title}</h3>
                <p>{post.content}</p>
              </div>
              <div className="btns">
                <Btn text={'Открыть'}/>
                <Btn text={'Удалить'}/>
              </div>
            </div>
          )
        })}
      </div> */}
            
    
    </div>
    );
}

export default Main;
