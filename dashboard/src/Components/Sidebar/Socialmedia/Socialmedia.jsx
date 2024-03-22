import React, { useEffect, useRef } from 'react';
//import style.css
import './soicalmedia.css'


//react-bootstrap
import { Card } from 'react-bootstrap';
//icons 
import { RiTwitterXLine } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { RiArrowUpSFill } from "react-icons/ri";

import { RiTriangleFill } from "react-icons/ri";
import { RxDotFilled } from "react-icons/rx";

//Analytic-card
import Chart from 'chart.js/auto';
//Analytics   green
import { FaCircle } from "react-icons/fa";
const Socialmedia = () => {

    const chartRef = useRef(null);
   
  useEffect(() => {

    //Analytic charbar
    const ctx = chartRef.current.getContext('2d');

    const gradient = ctx.createLinearGradient(1, 1, 1, 550);
    gradient.addColorStop(0, '#0f5132'); 
    gradient.addColorStop(1, '#FFFFFF');

    const myBarChart = new Chart(ctx, {
      type: 'bar',
      data: {
        
        labels: ['Day', 'Week', 'Month','Year'],
        datasets: [
          { 
            label: 'Dataset 1',
            data: [3, 2, 4,4],
            backgroundColor: gradient,
            borderWidth: 1,
          },
          {
            label: 'Dataset 2',
            data: [4, 3.5, 2,2 ],
            backgroundColor: gradient, // Change color as needed
            borderWidth: 1,
          },
          {
            label: 'Dataset 2',
            data: [3.5, 6, 5, 5],
            backgroundColor: gradient, // Change color as needed
            borderWidth: 1,
          },
          {
            label: 'Dataset 2',
            data: [6, 7, 6, 6],
            backgroundColor: gradient, // Change color as needed
            borderWidth: 1,
          },
          // Add more datasets as needed
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            beginAtZero: true,
            grid: {
              display: false,
            },
          },
        },
        indexAxis: 'x',
        plugins: {
          legend: {
            display: false,
          },
        },
        barPercentage: 0.8, // Adjust as needed
        categoryPercentage: 0.6, // Adjust as needed
      },
    });


    //

    return () => {
      myBarChart.destroy();
    };
  }, []);
  return (
    <>
        <div className='container-fluid '>
            <div className='total-head'>

                        <div className='row'>
                            <div className='social-head'>
                             <p>Social Media Followers</p>
                             <hr className='custom'/>
                              <div className='brand-list'>
                                  <div className='row'>

                                        <div className='col-md-3 col-3  '>

                                          <div className='select-1 p-2'>
                                              <h5 className='text-start'>24.5k</h5>
                                              <p className='text-start-brand'>Twitter</p>

                                              <div className='row'>
                                              
                                                  <div className='col-md-6 col-2'>
                                                  <a className='text-dark text-start  pl-5' href='#'><RiTwitterXLine  className='font'/></a>
                                                  </div>
                                                  <div className='col-md-6 col-2'>
                                                  <a className='text-dark  pl-2' href='#'><RiArrowUpSFill className='font-color ' /></a>
                                                  </div>
                                              
                                              </div>

                                              <div className='para-single '>
                                              
                                              <span>Insert your desired text here.</span>
                                              </div>
                                          </div>

                                        </div>

                                        <div className='col-md-3 col-3  '>

                                          <div className='select-1 p-2'>
                                              <h5 className='text-start'>21.2K</h5>
                                              <p className='text-start-brand'>Facebook</p>

                                              <div className='row'>
                                              
                                                  <div className='col-md-6 col-2'>
                                                  <a className='text-dark text-start  pl-5' href='#'><FaFacebookSquare  className='font'/></a>
                                                  </div>
                                                  <div className='col-md-6 col-2'>
                                                  <a className='text-dark  pl-2' href='#'><RiArrowUpSFill className='font-color ' /></a>
                                                  </div>
                                              
                                              </div>

                                              <div className='para-single '>
                                              
                                              <span>Insert your desired text here.</span>
                                              </div>
                                          </div>

                                        </div>

                                        <div className='col-md-3  col-3  '>

                                            <div className='select-1 p-2'>
                                              <h5 className='text-start'>14.7K </h5>
                                              <p className='text-start-brand'>LinkedIn</p>

                                              <div className='row'>
                                              
                                                  <div className='col-md-6 col-2'>
                                                  <a className='text-dark text-start  pl-5' href='#'><FaLinkedin  className='font'/></a>
                                                  </div>
                                                  <div className='col-md-6 col-2'>
                                                  <a className='text-dark  pl-2' href='#'><RiArrowUpSFill className='font-color ' /></a>
                                                  </div>
                                              
                                              </div>

                                              <div className='para-single '>
                                              
                                              <span>Insert your desired text here.</span>
                                              </div>
                                            </div>

                                        </div>

                                        <div className='col-md-3 col-3  '>

                                           <div className='select-1 p-2'>
                                              <h5 className='text-start'>74.4K </h5>
                                              <p className='text-start-brand'>Instagram</p>

                                              <div className='row'>
                                              
                                                  <div className='col-md-6 col-2'>
                                                  <a className='text-dark text-start  pl-5' href='#'><TiSocialInstagram  className='font'/></a>
                                                  </div>
                                                  <div className='col-md-6 col-2'>
                                                  <a className='text-dark  pl-2' href='#'><RiArrowUpSFill className='font-color ' /></a>
                                                  </div>
                                              
                                              </div>

                                              <div className='para-single '>
                                              
                                              <span>Insert your desired text here.</span>
                                              </div>
                                           </div>

                                      </div>

                                    </div>
                               </div>
                           </div>

                            <div className='col-md-3'>
                              <div className='facebook'>
                                <p className=''>Facebook</p> 
                                <hr className='custom-hr-two'/> 
                                  <div className='flex-container'>
                                    <div class="flex-box">$ 10k<p>spend</p> </div>
                                    <div class="flex-box"> . 567<p className='text-center'>Clicks</p></div>
                                  </div>
                                <div class="flex-container">
                                      <div class="flex-box">$ 15k<p>CPC</p></div>
                                      <div class="flex-boxone">
                                          <RiTriangleFill id="tri-icon" /><RxDotFilled id="tri-icon" />75</div>
                                  </div>

                            </div>




                            <div className='facebook mt-2'>
                              <p>Instagram</p> 
                              <hr className='custom-hr-two'/> 
                                <div className='flex-container'>
                                    <div class="flex-box">$ 12k<p>spend</p> </div>
                                    <div class="flex-box"> . 713<p className='text-center'>Clicks</p></div>
                                  </div>
                                <div class="flex-container">
                                      <div class="flex-box">$ 13k<p>CPC</p></div>
                                      <div class="flex-boxone">
                                          <RiTriangleFill id="tri-icon" /><RxDotFilled id="tri-icon" />69</div>
                                  </div>
                            </div>

                            <div className='Twitter mt-2'>
                                <p>Twitter</p> 
                                <hr className='custom-hr-two'/> 
                                <div className='flex-container'>
                                    <div class="flex-box-Twitter"> </div>
                                    <div class="flex-box-Twitter"> </div>
                                </div>
                            </div>

                        </div>
                    </div>

                      
                    <div className='col'>
                        <div className='Analytic-card-head pl-2 pt-1  mt-2'>
                            <Card style={{ width: '335px', height: '200px', border: 'none' }} className=' '>
                                <Card.Header className='Analytic '>Analytic</Card.Header>
                                    <div>
                                        <canvas ref={chartRef} width="300px" height="160px"></canvas>
                                    </div>
                                
                                    <div className='text-dark'>
                                    <div className='row back'>
                                        <div className='row  col-4  hold_icon_text'>
                                            <div className='icon_circle'>
                                                <FaCircle />
                                            </div>

                                            <div className='span_Analytic'>
                                                <p>Twitter</p>
                                            </div>
                                        </div>

                                        <div className='row col-4 hold_icon_text '>
                                            <div className='icon_circle'>
                                                <FaCircle />
                                            </div>

                                            <div className='span_Analytic'>
                                                <p>Facebook</p>
                                            </div>
                                        </div>

                                        <div className='row col-4 hold_icon_text'>
                                            <div className='icon_circle'>
                                                <FaCircle />
                                            </div>

                                            <div className='span_Analytic'>
                                                <p>LinkedIn</p>
                                            </div>
                                        </div>

                                        <div className='row col-4 hold_icon_text'>
                                            <div className='icon_circle'>
                                                <FaCircle />
                                            </div>

                                            <div className='span_Analytic'>
                                                <p>Instagram</p>
                                            </div>
                                        </div>
   
                                    </div>
                                </div>
                            </Card>    
                        </div>
                </div> 
                    

            </div>
        </div>
    </>
  )
}

export default Socialmedia