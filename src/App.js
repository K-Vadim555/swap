import Autocomplete from '@mui/joy/Autocomplete';
import  axios  from 'axios';
import React, { useEffect, useState } from 'react';
import { BrowserRouter ,Route,Routes } from 'react-router-dom';
import { Link , useParams } from "react-router-dom";
import './App.scss';
import CurrencyInput from './components/componentParts/cc/CurrencyInput';
import { API_KEY } from './components/componentParts/key';
import Main from './components/pages/Main';
import Page from './components/pages/Page';
import Post from './components/componentParts/Post/Post';
import Test from './components/componentParts/Test';
import Btn from './components/ui/Btn/Btn';
import Input from './components/ui/Input/Input';
import bg from './img/fdsdfsdfsdf 1.png'
import ComboBox from './components/componentParts/Select1';
import { TextField } from '@mui/joy';

import  ScrollToTop from './components/ScrollToTop';
import useWebSocket, { ReadyState } from 'react-use-websocket';

import { useCallback} from 'react';
import CC2 from './components/componentParts/CC2';
import Coins from './components/componentParts/cc/Coins';
import PostList from './components/pages/PostList'
import Header from './components/pages/Header';
import Footer from './components/pages/Footer';
import AboutUs from './components/pages/AboutUs';
import FAQ from './components/pages/FAQ';
import Support from './components/pages/Support';



function App() {
  
  let [posts, setPosts] = useState([
   /*  { adress: 'btc',
      d: null,
      id: 1,
      count: '',
      title: '123',
      content: 'erfgewpe;ojrrg ihweit hgoiwueth goiuweh toiguheoituhgoieurh tiou hwortui',
    },
    { adress: 'eth',
      d: 0,
      count: '',
      id: 2,
      title: '123456',
      content: 'wpe;ojrrg ihweit hgoiwueth goiuweh toiguheoituhgoieurh tiou hwortui',
    },
    { adress: 'bnb',
      d: '',
      count: '',
      id: 3,
      title: '1234568498749',
      content: 'wpe;ojrrg ihweit hgoiwueth goiuweh toiguheoituhgoieurh tiou hwortui',
    }, */
   
  ])
  let [postss, setpostss] = useState(['btc', 'eth','bnb'])
  let [postsss, setpostsss] = useState(['btc', 'eth','bnb'])
  const apikey = API_KEY
 
 
 


















 




  let [SearchedPosts, setSearchedPosts] = useState([])


  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [currency1, setCurrency1] = useState('BTC');
  const [currency2, setCurrency2] = useState('USDT');
  const [rates, setRates] = useState([]);



  const socketUrl = 'wss://stream.binance.com:9443/stream';

  const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(socketUrl);

  useEffect(
    useCallback(() =>
    sendJsonMessage({
      method: 'SUBSCRIBE',
      params: [postss + 'usdt@ticker'],
      id: 1,
    }),
    [sendJsonMessage]),
    []
  )
  let [all, setall] = useState([])
  let [coin1, setCoin1] = useState('')
  let [coin2, setCoin2] = useState('')
  let [coin1Name, setCoin1Name] = useState('')
  let [coin2Name, setCoin2Name] = useState('')

  useEffect(() => {
    if (lastJsonMessage !== null) {
      setCoin1((lastJsonMessage.data) ? lastJsonMessage.data.c : lastJsonMessage.data)
      setCoin2((lastJsonMessage.data) ? lastJsonMessage.data.c : lastJsonMessage.data)
      setCoin1Name((lastJsonMessage.data) ? lastJsonMessage.data.s : lastJsonMessage.data)
      setCoin2Name((lastJsonMessage.data) ? lastJsonMessage.data.s : lastJsonMessage.data)
    }
  }, [lastJsonMessage])

  let [afn, setafn] = useState('')
      let [rt, setrt] = useState(0)
      let [afn1, setafn1] = useState('')
      let [rt1, setrt1] = useState('USDT')
      let [text1, settext1] = useState(1)
      let [text2, settext2] = useState(1)



      let [min, setmin] = useState(30)
     
  return (
    
    <BrowserRouter>`
   
    <ScrollToTop/>

    <Header/>
    
    <Routes>
     
        <Route path={"/"} element={<Main 
         afn  ={afn}
         afn1 ={afn1} 
         rt   ={rt}
         rt1  ={rt1}  
         text1={text1}
         text2={text2}  
         setafn  ={setafn}
         setafn1 ={setafn1} 
         setrt   ={setrt}
         setrt1  ={setrt1}  
         settext1={settext1}
         settext2={settext2}  
        coin2Name={coin2Name} 
        setCoin1Name={setCoin1Name} 
        coin1Name={coin1Name} 
        setCoin2Name={setCoin2Name} 
        coin2={coin2} 
        coin1={coin1}   
        setSearchedPosts={setSearchedPosts} 
        SearchedPosts={SearchedPosts} 
        setPosts={setPosts} 
        posts={posts} 
        amount1={amount1}
        amount2={amount2} 
        currency1={currency1}
        currency2={currency2}
        rates={rates}
        setAmount1={setAmount1}
        setAmount2={setAmount2}
        setCurrency1={setCurrency1}
        setCurrency2={setCurrency2} 
        setRates={setRates}/>} />



      
        <Route path={"/orders"} element={ 
        <div className="postList postlist">
    
        <p className='title'>My<span> orders</span> </p>
        <p className='title2'>Please complete the order within the time indicated below, otherwise it will be cancelled.</p>
        {posts.map((post ) => {
        return (
          <Post
          
          setmin={setmin}
        min={min}
        key={post.id}
        posts={posts} 
        setPosts={setPosts} 
        post={post} 
            />
        )
          })}
        </div>
        } />
          <Route path={"/aboutUs"} element={<AboutUs/>} />
          <Route path={"/FAQ"} element={<FAQ />} />
          <Route path={"/Support"} element={<Support />} />
    </Routes>
    
    <Footer/>
  </BrowserRouter>
    
  );
}

export default App;
