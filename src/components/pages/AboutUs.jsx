import React from 'react'
import bg from '../../img/fdsdfsdfsdf\ 1.png'
import CurrTable from '../componentParts/CurrTable'
import '../pages/pages.scss'
export default function AboutUs() {
  return (<>
  
    <div className='about-us'>  
                <p className='logotext'>About  <span> us</span> </p>
                <div className="about-us-info">
                      
                 <p>Since Bitcoin launched in 2009, over 10,000 crypto currencies have entered the market, and the total market capitalization for these coins has grown enormously in recent years: from approximately $20 Billion in February 2017 to over $2.3 Trillion in April 2021. The crypto market has a number of unique features. It is a high-volume, 24-hour market where most trading is done by retail investors. The coins’ fundamental values are impossible to determine. This leads to emotional trading and extremely high volatility, which is not correlated with traditional markets. This produces a market with considerable opportunities for arbitrage.
                </p>
                <p className='p'>Who we are</p>
                <p>Our team has historically been involved in the development of a trading platforms and arbitrage algorithms for large corporate clients. This experience has provided us with the insight into how market inefficiencies could be exploited to fixt the best exchange rates on the market consisting of hundreds of participants.
                </p>
                <p className='p'>Our advantages</p>
                <p>We provide simple, fast and reliable coin exchange service for the occasional digital asset consumer as well as professional market players. We do not require registration and we do not collect your information. All trades happen automatically at lighning speeds.
                </p>
               
                </div>
             
                    <CurrTable/>
               
    </div>  </>
  )
}
