import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <nav className="sticky w-full top-0 border border-b-2 z-50 flex flex-col">
        <div className='bg-blue h-12 w-full'>
          <div className="container flex py-[10px] items-center max-w-5xl justify-between">
            <div className="basis-1/2 flex">
              <div className='mr-[20px] flex'>
                <img src="/assets/mailNavbar.svg" alt="" className='w-[20px] h-auto mr-1' />
                <p className='text-white'>mail.uremail.com</p>
              </div>
              <div className='mr-[20px] flex'>
                <img src="/assets/callNavbar.svg" alt="" className='w-[20px] h-auto mr-1'/>
                <p className='text-white'>mail.uremail.com</p>
              </div>
            </div>
            <div className='flex'>
              <img src="/assets/userNavbar.svg" alt="" className='w-[20px] h-auto mr-1'/>
              <Link to="/login" className='text-white'>Login/Register</Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-white w-full text-center">
          <div className="mx-[20rem] flex items-center">
            <div className="basis-1/2 flex">
              <img src="/assets/logoDreamHome.svg" alt="" className='w-[20px] h-auto mr-2'/>
              <p className='font-medium text-2xl'>DreamHome</p>
            </div>
            <div className="basis-1/2">
              <ul className="flex space-x-4 p-2 text-lg justify-end items-center">
                <li>
                  <Link to="/">Home </Link>
                </li>
                <li>
                  <Link to="/property">Property</Link>
                </li>
                <li>
                  <Link to="/blogs">Blogs</Link>
                </li>
                <li>
                  <Link to="/agents">Agents</Link>
                </li>
                <li>
                  <Link to="/faqs">FAQs</Link>
                </li>
                <li>
                  <Link to='/contact'>Contact Us</Link> 
                </li>
              </ul>
            </div>
          </div>        
        </div>
      </nav>
  )
}

export default Navbar
