import React from 'react'
import './payments.css';
import Card from 'react-bootstrap/Card';
import { ImFacebook2 } from "react-icons/im";
import { BsTwitterX } from "react-icons/bs";
import { FaCameraRetro } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaArrowUp } from "react-icons/fa";


const Payments = () => {    
  return (
    
    <div className='full_payment_container1'> 
      <div className="cardContainer_payment2">
        <div className='txt_payment2'>Payment Details</div>
          <div className="scoreContainer_payments2">
            <div className="score2">
              <div className='title2'>Ad Spend</div>
                  <div className="individualScore2">
                      <div className="countScore22" style={{fontWeight:""}}><BsCurrencyDollar  className='icon_dollar_ads2' />65.37</div>
                      <div className="scoreData2">
                          <FaArrowUp className='icon_arrow2' />
                          <div className='new92'>125%</div>
                      </div>
                      <div className="description2 pl-2"> vs previous 30 days </div>
                  </div>
            </div>
            <div className="score2">
              <div className='title2'>Cost Per Thousand(CPT)</div>
                  <div className="individualScore2">
                      <div className="countScore22"><BsCurrencyDollar  className='icon_dollar_ads2' />65.37</div>
                      <div className="scoreData2">
                          <FaArrowDown  className='icon_arrow2' />
                          <div  className='new92'>170%</div>
                      </div>
                      <div className="description2"> vs previous 30 days </div>
                  </div>
              </div>
              <div className="score2">
                <div className='title2'>Cost Per Click(CPC)</div>
                    <div className="individualScore2">
                        <div className="countScore22"><BsCurrencyDollar  className='icon_dollar_ads2' />15.45</div>
                        <div className="scoreData2">
                            <FaArrowUp className='icon_arrow2' />
                            <div  className='new92'>10%</div>
                        </div>
                        <div className="description2 pr-2"> vs previous 30 days </div>
                    </div>
              </div>
          </div>
        <div>
      </div>
    </div>

      <Card className='facebook-card2'  style={{ width: '9.5rem', height: "120px",position:'absolute',bottom:"5px",right:0,marginRight:"5px" }} >
        <Card.Body style={{ fontSize: "8px",}} >
      
          <Card.Text id="facebook-text2">
            <div className="facebook2">
              <div className='facebook_container2'>
                <ImFacebook2 id="facebook-icon2" style={{ marginTop:"7px"}} />
                <div className='facebook_container_details2'>
                  <small className='ads_spent_txt2'>This Month</small>
                  <div class="container_progress_payments2"> 
                    <div class="skill facebook_percentage2"></div> 
                  </div> 
                  <div className="percentage_subtext2">
                    <small className='ads_percentage2'style={{ color:"lightgreen"}}>30%</small>
                    <small className='ads_week_subtext2'>This week</small>
                  </div>
                  
                </div>
              </div>
              <div className='facebook_container2'>
                <BsTwitterX id="facebook-icon2"  style={{ marginTop:"30px"}}/>
                <div className='facebook_container_details2  'style={{ marginTop:"30px"}}>
                  <small className='ads_spent_txt2'style={{ marginTop:"30px"}}>This Month</small>
                  <div class="container_progress_payments2"> 
                    <div class="skill twitter_percentage2"></div> 
                  </div> 
                  <div className="percentage_subtext2 "style={{ marginTop:"10px"}}>
                    <small className='ads_percentage2'style={{ color:"lightgreen"}}>25%</small>
                    <small className='ads_week_subtext2'>This week</small>
                  </div>
                  
                </div>
              </div>
              <div className='facebook_container_last2'>
                <FaCameraRetro id="facebook-icon2"   />
                <div className='facebook_container_details2'>
                  <small className='ads_spent_txt2'>This Month</small>
                  <div class="container_progress_payments2"> 
                    <div class="skill facebook_percentage2"></div> 
                  </div> 
                  <div className="percentage_subtext2">
                    <small className='ads_percentage2 'style={{ color:"lightgreen"}}>25%</small>
                    <small className='ads_week_subtext2'>This week</small>
                  </div>
                </div>
              </div>
            </div>
          </Card.Text>
        
        </Card.Body>
      </Card>
    </div>
  )
}

export default Payments