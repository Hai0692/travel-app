import React,{useEffect} from 'react';
import './footer.css';
import video3 from '../../Assets/video3.mp4'
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTripadvisor } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {

   //lets create a react hook to add scrool animation..

   useEffect(()=>{
    Aos.init({duration:2000})

  },[])

  return (
    <section className='footer'>
      <div className='videoDiv'>
        <video src={video3} loop autoPlay muted typeof='video/mp4'></video>
      </div>
      <div className='secContext container'>
        <div className='contactDiv flex'>
        <div data-aos='fade-up' className='text'>
          <small>KEEP IN TOUCH</small>
          <h2 > Travel with us</h2>
        </div>
        <div className='inputDiv flex'>
          <input data-aos='fade-up' type='text'placeholder='enter email address'/>
          <button data-aos='fade-up' className='btn flex' type='submit'>
         SEND <FiSend className='icon' />


          </button>
        </div>

        </div>


        <div className='footerCard flex'>
          <div className='footerIntro flex'>
            <div className='logoDiv'>
              <a href='#' className='logo flex'>
              <MdOutlineTravelExplore  className='icon' /> Travel.
              </a>
            </div>
            <div data-aos='fade-up' className='footerParagraph'>
            If you find these images & videos useful, please hit the like, and comment, and and and,,, to keep them free, please consider making a donation by hitting the top right "donation button".

            </div>
            <div data-aos='fade-up' className='footerSocial flex'> 
            <FaTwitter className='icon'/>
            <FaYoutube className='icon'/>
            <FaInstagram className='icon'/>
            <FaTripadvisor className='icon'/>
            </div>
          </div>
          <div className='footerLink grid'>
          {/* group 1 */}
            <div data-aos='fade-up' data-aos-duration='3000' className='linkGroud'>
              <span className='grouptitle'>
                OUR AGENCY
              </span>
              <ul>
              <li className='footerList flex'>
              <FaChevronRight  className='icon'/>Services
              </li>
              <li className='footerList flex'>
              <FaChevronRight  className='icon'/>Insurance
              </li>
              <li className='footerList flex'>
              <FaChevronRight  className='icon'/>Agency
              </li>
              <li className='footerList flex'>
              <FaChevronRight  className='icon'/>Tourism
              </li>
              <li className='footerList flex'>
              <FaChevronRight  className='icon'/>Payment
              </li>
              </ul>
            </div>
            {/* group 2 */}
            <div data-aos='fade-up' data-aos-duration='4000'  className='linkGroud'>
              <span className='grouptitle'>
              PARTNERS
              </span>
              <ul>
              <li className='footerList flex'>
              <FaChevronRight  className='icon'/>Bookings
              </li>
              <li className='footerList flex'>
              <FaChevronRight  className='icon'/>RentCars
              </li>
              <li className='footerList flex'>
              <FaChevronRight  className='icon'/>HotelWorld
              </li>
              <li className='footerList flex'>
              <FaChevronRight  className='icon'/>Trivago
              </li>
              <li className='footerList flex'>
              <FaChevronRight  className='icon'/>TripAdvisor
              </li>
              </ul>
            </div>
            {/* group 3 */}
            <div data-aos='fade-up' data-aos-duration='5000' className='linkGroud'>
              <span className='grouptitle'>
                LAST MINUTE
              </span>
              <ul>
              <li className='footerList flex'>
              <FaChevronRight  className='icon'/>London
              </li>
              <li className='footerList flex'>
              <FaChevronRight  className='icon'/>California
              </li>
              <li className='footerList flex'>
              <FaChevronRight  className='icon'/>indonesia
              </li>
              <li className='footerList flex'>
              <FaChevronRight  className='icon'/>Thailan
              </li>
              <li className='footerList flex'>
              <FaChevronRight  className='icon'/>Korea
              </li>
              </ul>
            </div>
          </div>

          <div className='footerDiv flex'>
            <small> BEST TRAVEL WEBSITE THEME</small>
            <small> COPYRIGHT BY @THUYHAI</small>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Footer