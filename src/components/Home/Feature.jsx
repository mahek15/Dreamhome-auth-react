import React from 'react'
const Feature = () => {
  
  const data = [
    {
      id:1,
      image: '/assets/propertyFeature01.png'
    },
    {
      id:2,
      image: '/assets/propertyFeature02.png'
    },
    {
      id:3,
      image: '/assets/propertyFeature03.png'
    },
    {
      id:4,
      image: '/assets/propertyFeature04.png'
    },
  ]

  return (
    <div className='bg-[#FAF8FB]'>
    <div className="w-[60%] content-center m-auto pt-10 text-center">
        <p className="font-bold text-3xl pb-5">Our Feature Property</p>
        <p className="font-normal text-lg w-[50%] m-auto">There are many variations of passages of Lorem Ipsum available but the this in majority have suffered alteration in some</p>
    </div>
    <div className='grid grid-cols-2 max-w-5xl container pb-[100px] gap-5'>
    {
      data.map((user) => (
      
      <div className="flex flex-col divide-y-2 shadow-2xl relative mt-10 p-2"> 
        <div className="text-left m-2">
            <img src={user.image} className="w-full h-64 bg-cover" alt=''/>
            <p className="text-left font-medium text-2xl">Bravo Apollo Appartments</p>
            <p className="font-normal">There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration in some form injected.</p>
            <div className="flex p-2">
                <img src='/assets/locFeat.svg' alt="" className='mr-2 ml-1'/>
                <p className="font-normal text-base">779 6th Ave New York, NY 120400</p>
            </div>
        </div>
        <div className="flex divide-x-2 justify-between p-2">
            <div className="flex">
                <img src="/assets/bedFeat.svg" alt="" className='mr-2 ml-1'/>
                <p>4 Bed</p>
            </div>
            <div className="flex">
                <img src="/assets/bathFeat.svg" alt="" className='mr-2 ml-1'/>
                <p>3 Bath</p>
            </div>
            <div className="flex">
                <img src="/assets/livingFeat.svg" alt="" className='mr-2 ml-1'/>
                <p>8 Rooms</p>
            </div>
            <div className="flex">
                <img src="/assets/areaFeat.svg" alt="" className='mr-2 ml-1'/>
                <p>1574sqft</p>
            </div>
        </div>
        <div className="bg-[#0984E3] text-white text-2xl font-medium text-left absolute top-0 ml-5 mt-52">
            <span>$32000</span>
        </div>
      </div>
    
      ))
    }
    </div>
    </div>
  )
}

export default Feature
