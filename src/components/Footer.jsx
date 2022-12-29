import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <div className='bg-[#FAF8FB] w-full pt-20 px-[22rem] pb-10'>
        <div className='flex flex-col'>
            <div className='flex'>
                <img src="/assets/logoDreamHome.svg" alt="" className='w-[20px] h-auto'/>
                <p className='text-3xl font-medium ml-3'>DreamHome</p>
            </div>
            <p className='text-base max-w-2xl'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.</p>
        </div>
        <div className='flex space-x-10 justify-end pt-10'>
            <div className='flex flex-col'>
                <p className='font-medium text-2xl pb-3'>About Us</p>
                <p className='text-lg pb-1'>How it works</p>
                <p className='text-lg pb-1'>Help Desk</p>
                <p className='text-lg pb-1'>Meet our team</p>
                <p className='text-lg pb-1'>Plans and Pricing</p>
            </div>
            <div className='flex flex-col'>
                <p className='font-medium text-2xl pb-3'>Quick links</p>
                <ul>
                    <li className='text-lg pb-1'>
                        <Link to='/'>Home</Link> 
                    </li>
                    <li className='text-lg pb-1'>
                        <Link to='/'>Our Services</Link> 
                    </li>
                    <li className='text-lg pb-1'>
                        <Link to='/'>About Us</Link> 
                    </li>
                    <li className='text-lg pb-1'>
                        <Link to='/contact'>Contact Us</Link> 
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div className='bg-white w-full px-[20rem] flex my-[20px]'>
        <div className='shadow-2xl mx-auto -mt-[180px] bg-white mb-14'>
            <div className='px-10 pt-10 flex'>
                <img src="/assets/callFooter.svg" alt="" className='w-[50px] h-auto mr-5'/>
                <div className='flex flex-col'>
                    <p className='font-xs text-[#7B7B7B] '>Call Now</p>
                    <p>+123 456 789 000</p>
                </div>
            </div>
            <div className='px-10 pt-5 flex'>
                <img src="/assets/mailFooter.svg" alt="" className='w-[50px] h-auto mr-5'/>
                <div className='flex flex-col'>
                    <p className='font-xs text-[#7B7B7B] '>Email Us</p>
                    <p>Mail.urmail.com</p>
                </div>
            </div>
            <div className='px-10 pt-5 flex'>
                <img src="/assets/locFooter.svg" alt="" className='w-[50px] h-auto mr-5'/>
                <div className='flex flex-col'>
                    <p className='font-xs text-[#7B7B7B] '>Our Office</p>
                    <p>2972 Westheimer, Illinois 85486 </p>
                </div>
            </div>
            <p className='max-w-[28rem] px-10 pb-12 pt-8'>There are many variations of passages of Lorem Ipsum available</p>
        </div>
        <div className='flex justify-end pt-5 space-x-5 pb-10'>
            <img src="/assets/comp01.svg" alt="" className='w-[100px] h-auto' />
            <img src="/assets/comp02.svg" alt="" className='w-[100px] h-auto' />
            <img src="/assets/comp03.svg" alt="" className='w-[100px] h-auto'/>
            <img src="/assets/comp04.svg" alt="" className='w-[100px] h-auto' />
        </div>
    </div>
    <div className='bg-[#25517A] w-full text-white text-center font-normal text-base py-3'>
        All Rights Reserved By GDSC 2022
    </div>      
    </>
  )
}

export default Footer
