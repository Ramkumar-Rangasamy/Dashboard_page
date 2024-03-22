import React from 'react'

//style.css
import './allbrand.css';

//icons 
import { SiCocacola } from "react-icons/si";
import { SiBuffer } from "react-icons/si";
import { SiHootsuite } from "react-icons/si";
import { SiZoho } from "react-icons/si";
import { FaSalesforce } from "react-icons/fa6";
import Others from './Otherchats/Others';
import Cocacolachat from './Cocacolachat/Cocacolachat';

const Allbrand = () => {
  return (
    <>
     <div className='banner_container'>
                      <div className='row'>
                        <div className="cola_banner_container">
                          <p className='horizontal-rule  txt_cola'>CocaCola</p>
                          <SiCocacola className='logo_coca'/>
                          <div className="grid_week_month">
                            <div className='cola_ads_container'>
                                  <div className='amt_ads_container'>
                                      <h1 className='amt_ads_cola'><span className='icon_dollar_ads_cola'>$</span>112.5</h1>
                                      <h3 className='amt_substands_cola'>K</h3>
                                  </div>
                                  <small className='ads_spent_txt'>This Month</small>
                                  <div class="container_progress_cola"> 
                                      <div class="skill cola_ads"></div> 
                                  </div> 
                                  <small className='ads_percentage'>39%</small>
                            </div> 
                            <div className='cola_ads_container'>
                                  <div className='amt_ads_container text-dark'>
                                      <h1 className='amt_ads_cola'><span className='icon_dollar_ads_cola pl-3'>$</span>18.6</h1>
                                      <h3 className='amt_substands_cola'>K</h3>
                                  </div>
                                  <small className='ads_spent_txt pl-3'>This Week</small>
                                  <Cocacolachat/>
                            </div> 
                          </div>
                        </div>

                        <div className="cola_banner_container-two">
                          <p className='horizontal-rule  txt_cola-other'>Buffer</p>
                            <div className='row'>
                              <div>
                                <SiBuffer className='buffer-logo'/>
                              </div>
                              <div>
                                <h4 className='buffer-name'>Buffer</h4>
                              </div>
                            </div>
                            <div className="grid_week_month">
                              <div className='cola_ads_container'>
                                <div className='amt_ads_container'>
                                  <h1 className='amt_ads_cola'><span className='icon_dollar_ads_cola'>$</span>93.8</h1>
                                  <h3 className='amt_substands_cola'>K</h3>
                                </div>
                                <small className='ads_spent_txt'>This Month</small>
                                <div class="container_progress_cola"> 
                                  <div class="skill cola_ads"></div> 
                                </div> 
                                <small className='ads_percentage'>39%</small>
                              </div> 
                            </div>
                            <div className='cola_ads_container'>
                                  <div className='amt_ads_container text-dark'>
                                      <h4 className='amt_ads_cola'><span className='icon_dollar_ads_cola'>$</span>11.5</h4>
                                      <h3 className='amt_substands_cola'>K</h3>
                                  </div>
                                  <small className='ads_spent_txt '>This Week</small>
                                  <Others/>
                            </div> 

                        </div>

                        <div className="cola_banner_container-two">
                          <p className='horizontal-rule  txt_cola-other'>Hootsuite</p>
                            <div className='row'>
                              <div>
                                <SiHootsuite className='Hootsuite-logo'/>
                              </div>
                              <div>
                                <h4 className='Hootsuite-name'>Hootsuite</h4>
                              </div>
                            </div>
                            <div className="grid_week_month">
                              <div className='cola_ads_container'>
                                <div className='amt_ads_container'>
                                  <h1 className='amt_ads_cola'><span className='icon_dollar_ads_cola'>$</span>101</h1>
                                  <h3 className='amt_substands_cola'>K</h3>
                                </div>
                                <small className='ads_spent_txt'>This Month</small>
                                <div class="container_progress_cola"> 
                                  <div class="skill cola_ads"></div> 
                                </div> 
                                <small className='ads_percentage'>39%</small>
                               
                              </div> 
                            </div>
                            <div className='cola_ads_container'>
                                  <div className='amt_ads_container text-dark'>
                                      <h4 className='amt_ads_cola'><span className='icon_dollar_ads_cola'>$</span>12.5</h4>
                                      <h3 className='amt_substands_cola'>K</h3>
                                  </div>
                                  <small className='ads_spent_txt'>This Week</small>
                                  <Others/>
                            </div> 

                        </div>

                        <div className="cola_banner_container-two">
                          <p className='horizontal-rule  txt_cola-other'>Zoho</p>
                                <SiZoho className='logo_Zoho'/>
                            <div className="grid_week_month">
                              <div className='cola_ads_container'>
                                <div className='amt_ads_container'>
                                  <h1 className='amt_ads_cola'><span className='icon_dollar_ads_cola'>$</span>145</h1>
                                  <h3 className='amt_substands_cola'>K</h3>
                                </div>
                                <small className='ads_spent_txt'>This Month</small>
                                <div class="container_progress_cola"> 
                                  <div class="skill cola_ads"></div> 
                                </div> 
                                <small className='ads_percentage'>39%</small>
                              </div> 
                            </div>
                            <div className='cola_ads_container'>
                                  <div className='amt_ads_container text-dark'>
                                      <h4 className='amt_ads_cola'><span className='icon_dollar_ads_cola'>$</span>21.1</h4>
                                      <h3 className='amt_substands_cola'>K</h3>
                                  </div>
                                  <small className='ads_spent_txt'>This Week</small>
                                  <Others/>
                            </div> 

                        </div>

                        <div className="cola_banner_container-two">
                          <p className='horizontal-rule  txt_cola-other'>Salesforce</p>
                                <FaSalesforce className='logo_Salesforce'/>
                            <div className="grid_week_month">
                              <div className='cola_ads_container'>
                                <div className='amt_ads_container'>
                                  <h1 className='amt_ads_cola'><span className='icon_dollar_ads_cola'>$</span>113.4</h1>
                                  <h3 className='amt_substands_cola'>K</h3>
                                </div>
                                <small className='ads_spent_txt'>This Month</small>
                                <div class="container_progress_cola"> 
                                  <div class="skill cola_ads"></div> 
                                </div> 
                                <small className='ads_percentage'>39%</small>
                              </div> 
                            </div>
                            <div className='cola_ads_container'>
                                  <div className='amt_ads_container text-dark'>
                                      <h4 className='amt_ads_cola'><span className='icon_dollar_ads_cola'>$</span>24.2</h4>
                                      <h3 className='amt_substands_cola'>K</h3>
                                  </div>
                                  <small className='ads_spent_txt'>This Week</small>
                                  <Others/>
                            </div> 

                        </div>
                      </div>
                </div>
    </>
  )
}

export default Allbrand