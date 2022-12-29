import React from 'react'

const AboutUs = () => {
  return (
    <>
      <div className="w-[60%] content-center m-auto divide-y-2">
        <div className="flex justify-between mx-auto py-20">
          <img src="/assets/aboutUsFamily.png" alt="family" className="border-[12px] border-[#0984E3] mr-[22px] max-w-[70%] h-auto relative"/>            
          <div className="bg-[#0984E3] h-[25%] w-[13%] text-center justify-center py-[40px] px-0 absolute ml-[14%] mt-[16%]">
            <p className="text-white font-bold text-4xl">38+</p>
            <p className="text-white font-normal text-3xl">Years of experience</p>
          </div>
          <div className="flex flex-col ml-[5rem]">
            <p className="font-bold text-3xl">Are You Looking Best Property Near You? Contact Us</p>
            <p className="text-[#0984E3] py-5 font-medium text-2xl">Who We Are</p>
            <p className="font-normal text-lg text-[#333333] py-2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has normal distribution.</p>
            <p className="font-normal text-lg text-[#333333] py-5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            <div className="flex">
              <div className="flex mr-8">
                <img src="/assets/house01About.svg" alt="" className="h-8 mr-2"/>
                  <div className="flex flex-col">
                    <p className="font-medium">332+</p>
                    <p className="font-normal">Properties Used</p>
                  </div>
              </div>
              <div className="flex">
                <img src="/assets/house02About.svg" alt="" className="h-8 mr-2"/>
                <div className="flex flex-col">
                  <p className="font-medium">158+</p>
                  <p className="font-normal">Properties Sold</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex py-12 mx-3">
          <div className="flex flex-col mr-3">
            <div className="flex">
              <img src="/assets/property01.svg" alt="prop" />
              <p className="font-medium text-2xl text-[#2A2C30] ml-2">Buy & Sell Properties</p>
            </div>
            <p className="font-normal text-lg text-[#333333]">There are many variations of passages of Lorem Ipsum available but the majority suffered.</p>
          </div>
          <div className="flex flex-col mr-3">
            <div className="flex">
              <img src="/assets/property02.svg" alt="prop" />
              <p className="font-medium text-2xl text-[#2A2C30] ml-2">Perfect Location</p>
            </div>
            <p className="font-normal text-lg text-[#333333]">There are many variations of passages of Lorem Ipsum available but the majority suffered.</p>
          </div>
          <div className="flex flex-col">
            <div className="flex">
              <img src="/assets/property03.svg" alt="prop" />
              <p className="font-medium text-2xl text-[#2A2C30] ml-2">Faster Services</p>
            </div>
            <p className="font-normal text-lg text-[#333333]">There are many variations of passages of Lorem Ipsum available but the majority suffered.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs
