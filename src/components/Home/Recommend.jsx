import React from 'react'
import {Link} from 'react-router-dom'

const Recommend = () => {
  return (
    <>
        <div className="w-[60%] m-auto flex flex-col h-screen py-16 px-0 ">
            <div className="flex content-center items-center justify-evenly ">
                <div className="mt-[50px]">
                    <p className="font-bold text-4xl text-[#263048]">Recomended For You</p>
                    <p className="text-lg font-normal ">There are many variations of passages of Lorem Ipsum available but the this in</p>
                    <p>majority have suffered alteration in some</p>
                </div>
                <button className="rounded font-medium text-lg p-4 bg-[#0984E3] text-white content-center ">
                    <Link to="/property">See More Property</Link>
                </button>
            </div>
            <div className="flex mt-16">
                <div className="flex flex-col p-5">
                    <p className="font-normal text-lg pb-5">05/01</p>
                    <p className="font-medium text-3xl py-3">Bravo Apollo Apartments</p>
                    <p className="font-medium text-3xl py-6 ">$3200</p>
                    <p className="font-normal text-lg">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form by injected humour.</p>
                    <div className="flex p-2 py-5">
                        <img src="/assets/locRecom.svg" alt="" className='mr-2 ml-1'/>
                        <p className="font-normal text-base">779 6th Ave New York, NY 120400</p>
                    </div>
                    <div className="flex divide-x-2 p-1 w-[60%] justify-evenly items-center content-center">
                        <div className="flex">
                            <img src="/assets/bedRecom.svg" alt="" className='mr-2 ml-1'/>
                            <p>4 Beds</p>
                        </div>
                        <div className="flex">
                            <img src="/assets/bathRecom.svg" alt="" className='mr-2 ml-1'/>
                            <p>3 Bath</p>
                        </div>
                        <div className="flex">
                            <img src="/assets/areaRecom.svg" alt="" className='mr-2 ml-1'/>
                            <p>1574sqft</p>
                        </div>
                        <div className="flex">
                            <img src="/assets/livingRecom.svg" alt="" className='mr-2 ml-1'/>
                            <p>8 Rooms</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col content-center items-center pl-5">
                    <img src="/assets/houseRecommend.png" alt="house"/>
                    <img src='/assets/arrowRecom.svg' alt='arrow' className='pt-3 h-8 w-auto'/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Recommend
