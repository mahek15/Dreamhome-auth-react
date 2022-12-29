import React from 'react'

const Agents = () => {
  const data = [
    {
      id: 1,
      name: 'Grantt Marshall',
      image: '/assets/agent01.png'
    },
    {
      id: 2,
      name: 'Grantt Marshall',
      image: '/assets/agent02.png'
    },
    {
      id: 3,
      name: 'Grantt Marshall',
      image: '/assets/agent03.png'
    }
  ]
  return (
    <>
      <div className="w-[60%] content-center m-auto py-10 text-center">
        <p className="font-bold text-3xl pb-5 pt-10">Meet Our Popular Agents</p>
        <p className="font-normal text-lg w-[50%] m-auto">There are many variations of passages of Lorem Ipsum available but the this in majority have suffered alteration in some</p>
      
      <div className='grid grid-cols-3 max-w-5xl container  gap-5 py-[55px]'>
        {
           data.map((user) => (
            <div class="border-2 flex flex-col p-8 shadow-xl">
              <img src={user.image} alt="" class="rounded-full mx-auto mb-5 w-[60%] h-auto" />
              <p class="font-medium text-2xl ">{user.name}</p>
              <p class="text-lg font-normal text-[#7B7B7B] pb-3">Agents</p>
              <div class="flex mx-auto space-x-6">
                <img src="/assets/instaAgent.svg" alt="" className='hover:text-blue'/>
                <img src="/assets/linkedinAgent.svg" alt="" className='hover:text-blue'/>
                <img src="/assets/pinterestAgent.svg" alt="" className='hover:text-blue'/>
              </div>
            </div>
           ))
        }
      </div>
      <button className="rounded font-medium text-lg p-4 bg-[#0984E3] text-white mb-[100px]">
        See All Agents
      </button>
      </div>
    </>
  )
}

export default Agents
