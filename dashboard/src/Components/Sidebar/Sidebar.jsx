import React from 'react'

import './sidebar.css'

//import icons 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faAd, 
  faBullseye, 
  faChartBar, 
  faTasks, 
  faRoute, 
  faLightbulb, 
  faPlug, 
  faCircleHalfStroke, 
  faLifeRing,
  faGear,
  faChalkboardUser
} from '@fortawesome/free-solid-svg-icons';
import Socialmedia from './Socialmedia/Socialmedia';
import Employeee from './Employees/Employee';
import Campaigns from './Campaigns/Campaigns';
import Autodaterange from './Autodaterange/Autodaterange';
import Leads from './Leads/Leads';
import Activestatus from './ActiveStatus/Activestatus';
import Allbrand from './Brands/Allbrand';
import Payments from './Payments/Payments';
const Sidebar = () => {
  return (
    <>
        <div className=" col-md-12  " style={{  fontFamily: 'Raleway, sans-serif' }}>
            
            <div className='row '>

                <nav  className=" col-md-3 col-lg-2 d-md-block  nav-full">
                    <li className=' Dashboard'>
                        <p>Dashboard</p>
                    </li>
                    <div className=" side">
                        <ul className="nav flex-column pl-4">
                            <div className='allname'>
                                
                                

                                <li className="nav-item">
                                <a className="nav-link " href="#">
                                    <div className='row'>
                                    <div>
                                        <FontAwesomeIcon icon={faAd} className='font-style'/>
                                    </div>
                                    <div>
                                        <p className='pl-1'>Advertise</p>
                                    </div>
                                    </div>
                                </a>
                                </li>

                                <li className="nav-item">
                                <a className="nav-link " href="#">
                                    <div className='row'>
                                    <div>
                                        <FontAwesomeIcon icon={faBullseye} className='font-style'/>
                                    </div>
                                    <div>
                                        <p className='pl-1'>Radar</p>
                                    </div>
                                    </div>
                                </a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link " href="#">
                                        <div className='row'>
                                        <div>
                                            <FontAwesomeIcon icon={faTasks} className='font-style'/>
                                        </div>
                                        <div>
                                            <p className='pl-1'>Engage</p>
                                        </div>
                                        </div>
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link " href="#">
                                        <div className='row'>
                                        <div>
                                            <FontAwesomeIcon icon={faRoute} className='font-style'/>
                                        </div>
                                        <div>
                                            <p className='pl-1'>Analystics</p>
                                        </div>
                                        </div>
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link " href="#">
                                        <div className='row'>
                                        <div>
                                            <FontAwesomeIcon icon={faLightbulb} className='font-style'/>
                                        </div>
                                        <div>
                                            <p className='pl-1'>Activities</p>
                                        </div>
                                        </div>
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link " href="#">
                                        <div className='row'>
                                        <div>
                                            <FontAwesomeIcon icon={faPlug} className='font-style'/>
                                        </div>
                                        <div>
                                            <p className='pl-1'>Tracking</p>
                                        </div>
                                        </div>
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link " href="#">
                                        <div className='row'>
                                        <div>
                                            <FontAwesomeIcon icon={faCircleHalfStroke} className='font-style'/>
                                        </div>
                                        <div>
                                            <p className='pl-1'>Insights</p>
                                        </div>
                                        </div>
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link " href="#">
                                        <div className='row'>
                                        <div>
                                            <FontAwesomeIcon icon={faChartBar} className='font-style'/>
                                        </div>
                                        <div>
                                            <p className='pl-1'>Integration</p>
                                        </div>
                                        </div>
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link " href="#">
                                        <div className='row'>
                                        <div>
                                            <FontAwesomeIcon icon={faGear} className='font-style' />
                                        </div>
                                        <div>
                                            <p className='pl-1'>Settings</p>
                                        </div>
                                        </div>
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link " href="#">
                                        <div className='row'>
                                        <div>
                                            <FontAwesomeIcon icon={faLifeRing} className='font-style'/>
                                        </div>
                                        <div>
                                            <p className='pl-1'>Support</p>
                                        </div>
                                        </div>
                                    </a>
                                </li>

                            </div>
                        </ul>
                    </div>

                    <div className=' Team'>
                    <div className='row'>
                            <div>
                            <FontAwesomeIcon icon={faChalkboardUser}  className='font-style' />
                            </div>
                            <div>
                                <p className='pl-1'>Team chat</p>
                            </div>
                        </div>
                    </div>
                </nav>
                
                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    
                    <div className="mb-2 ">
                        <div className='emt-box '></div>
                    </div>

                    <div className="row">

                        <div className="" >   
                            <Socialmedia />
                        </div>
                        <div className="">
                            <Employeee/>
                        </div>
                        <div className="">
                            <Campaigns/>
                        </div>
                        <div className="">
                            <Autodaterange/>
                        </div>
                        <div className="">
                            <Leads/>
                        </div>
                        <div className="">
                            <Activestatus/>
                        </div>
                        <div className="">
                           <Allbrand/>
                        </div>
                        <div className="">
                          <Payments/>
                        </div>
                    </div>
                </main>

            </div>   
        </div>    
    </>
  )
}

export default Sidebar