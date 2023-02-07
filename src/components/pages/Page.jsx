import React, {useState} from 'react';
import { Link , useParams } from "react-router-dom";
import bg from '../../img/fdsdfsdfsdf\ 1.png'


const Page = ({ afn,afn1 ,rt   ,rt1  ,text1, setafn , setafn1 ,setrt   ,setrt1  ,settext1,settext2,
    text2 ,posts ,amount1 ,amount2 , currency1 , currency2 , rates,
    setAmount1,setAmount2,setCurrency1 , setCurrency2 , setRates}) => {
        {/*---------------- функция , чтобы открывать сохдаваемые посты  -------------------------
    let params = useParams()
    let getpostid = (id, posts) => {
        return posts.filter((post) => post.id == id)
    }
    let [currentPost,setcurrentPost] = useState(getpostid(params.id, posts)[0]);
     console.log(currentPost);*/ }
    return (
        <div>
            <img className='bg' src={bg}></img>
               <div style={{
                display:'flex',
                width:'50%',
                justifyContent:'space-around'
            }} className="inner">
                <div className='pp' > 
               
                     <h3>{text1}</h3>
                <p>{rt}</p>
                <p>{afn}</p>
                </div>
               <div className="pp">     
               
               <h3>{text2}</h3>
                <p>{rt1}</p>
                <p>{afn1}</p>
               </div>
              
            </div>
            <Link to='/'>home</Link>
        </div>
    );
}

export default Page;
