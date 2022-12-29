import React from 'react'

const TopCities = () => {
  const data = [
    {
      id: 1,
      name: 'Los Angeles',
      image: '/assets/topCity01.png'
    },
    {
      id: 2,
      name: 'New York',
      image: '/assets/topCity02.png'
    },
    {
      id: 3,
      name: 'San Antonio',
      image: '/assets/topCity03.png'
    },
    {
      id: 4,
      name: 'San Fransisco',
      image: '/assets/topCity04.png'
    },
    {
      id: 5,
      name: 'Las Vegas',
      image: '/assets/topCity05.png'
    },
    {
      id: 6,
      name: 'San Bernardino',
      image: '/assets/topCity06.png'
    },
  ]

  return (
    <div className='bg-[#FAF8FB]'>
      <div className="w-[60%] content-center m-auto pt-10 text-center">
        <p className="font-bold text-3xl pb-5 pt-4">Find Properties In These Cities</p>
        <p className="font-normal text-lg w-[50%] m-auto">There are many variations of passages of Lorem Ipsum available but the this in majority have suffered alteration in some</p>
      
      <div className='grid grid-cols-3 max-w-5xl container  gap-5 py-[25px]'>
        {
           data.map((user) => (
            <div>
              <img src={user.image} alt="" class="h-[250px] rounded-md"/>
              <div class="flex -mt-8 ml-5 ">
                <img src="/assets/locCity.svg" alt="loc" className='mr-2 mb-1'/>
                <div className="absolute  bg-gray-900 bg-opacity-75">
                </div>
                <span class="text-white">{user.name}</span>
              </div>
            </div>
           ))
        }
      </div>
      <button className="rounded font-medium text-lg p-4 bg-[#0984E3] text-white mb-[100px]">
        See All Cities
      </button>
      </div>
    </div>
  )
}

export default TopCities
