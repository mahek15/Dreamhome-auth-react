import React from 'react'

const Hero = () => {
  return (
    <>
        <div className="w-full">
            <div className="relative">
               <img src ="/assets/heroBg.png" className="w-full h-[90vh]" alt = "" />
               <h2 className="text-white absolute font-extrabold text-[60px] top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 my-2">Find Your Dream Properties</h2>
               <div className="bg-white w-[920px] h-[202px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4">
                <p className="font-medium text-2xl ml-3">Search Your Properties</p>
                <div className = "bg-blue w-[43px] h-[2px] m-3"></div>
                <div className="grid grid-cols-4 gap-4 mt-5">
                    <p className="text-lightgray ml-3 mt-2">Looking For</p>
                    <p className="text-lightgray ml-3 mt-2">Property Size</p>
                    <p className="text-lightgray ml-4 mt-2">Property Location</p>
                </div>
                <div className="grid grid-cols-4 gap-10">
                    <button className=" ml-2 mt-2 px-5 py-2.5 mr-2 text-xs border text-start"  type="button"> Property Type</button>
                    <button className=" mt-2 px-5 py-2.5 mr-2 text-xs text-start border"  type="button"> Type Location</button>
                    <button className=" mr-2 mt-2 px-5 py-2.5 text-xs text-start border"  type="button"> Type Location </button>
                    <button className=" ml-2 mt-2 mr-7 px-6 py-2.5 bg-blue text-s text-white text-center"  type="button">Search</button>
                </div>
               
               </div>
              
                
            </div>
        </div>
    </>
  )
}

export default Hero
