import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../pages/pages.scss'
import { Divider } from '@mui/material';
export default function CurrTable() {
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
  
  return (

         <div className="curr-table">
           <p className='Market-overview-p'>Market overview</p>
           <Divider  color='white' />
          <div className='curr-table-sec curr-table-sec1'>
          <p style={{color:'white',textAlign:'start'}}>Coin</p>
          <p style={{color:'white',textAlign:'center', justifyContent:'center', display:'flex', margin:'auto'}}>Price</p>
          <p style={{color:'white',textAlign:'start', display:'flex'}}>Marketcap</p>
          
          </div>
          <Divider  color='white' />
           {a.map((item) => {
      return(
        <div key={item.CoinInfo.id}>
       
         <div  className='curr-table-sec' >
           <img  src={`https://www.cryptocompare.com/${item.CoinInfo.ImageUrl}`}></img>
          <p style={{width:'10px',color:'white',textAlign:'start'}}>{item.CoinInfo.Name}</p>
          <p style={{width:'90px',color:'white',textAlign:'end', justifyContent:'end', display:'flex', margin:'auto'}}>{item.DISPLAY.USD.PRICE}</p>
          <p style={{color:'white',textAlign:'start', display:'flex', marginLeft:'auto'}}>{item.DISPLAY.USD.MKTCAP}</p>
         {/*  <p style={{color:'white',textAlign:'start'}}>{item.RAW.USD.PRICE + item.RAW.USD.PRICE/100*5}</p> */}
       
          </div>   <Divider style={{height:'1.5px'}} color='white' />
          </div>
      )
       
    })}   
    <div className="gap"></div>
     </div>
   
  )
}
