import React, { useState } from 'react';
import "./navbar.css"
import { MdOutlineTravelExplore } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
const Navbar = () => {
  const [active,setActive]= useState('navBar');
  //fuction show toggle navbar
  const showNav = ()=>{
    setActive('navBar activeNavbar')
  }
   //fuction remove toggle navbar
   const CloseNav = ()=>{
    setActive('navBar')
  }
  return (
    <section className='navBarSection'>
      <header className='header flex'>

        <div className='logoDiv'>
          <a href='#' className='logo flex'>
            <h1> <MdOutlineTravelExplore  className='icon' /> Travel.</h1>
          </a>
        </div>

        <div className={active}>
          <ul className='navLists flex'>
            
          <li className='navItem'>
              <a href='#' className='navLink'>Home</a>
            </li>
            <li className='navItem'>
              <a href='#' className='navLink'>packages</a>
            </li>
            <li className='navItem'>
              <a href='#' className='navLink'>shop</a>
            </li>
            <li className='navItem'>
              <a href='#' className='navLink'>about</a>
            </li>
            <li className='navItem'>
              <a href='#' className='navLink'>pages</a>
            </li>
            <li className='navItem'>
              <a href='#' className='navLink'>News</a>
            </li>
            <li className='navItem'>
              <a href='#' className='navLink'>Contact</a>
            </li>
            <button className='btn'><a href='#'>BOOK NOW</a></button>
          </ul>
          <div onClick={CloseNav} className='closeNavbar'>
            <IoIosCloseCircle className='icon'/>
          </div>
        </div>
        <div onClick={showNav} className='toggleNavbar'><TbGridDots className='icon'/></div>
      </header>

    </section>
  )
}

export default Navbar