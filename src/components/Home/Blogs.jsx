import React from 'react'

const Blogs = () => {
  const data = [
    {
      id: 1,
      date: '20 April',
      image: '/assets/blog01.png'
    },
    {
      id: 2,
      date: '19 April',
      image: '/assets/blog02.png'
    },
    {
      id: 3,
      date: '18 April',
      image: '/assets/blog03.png'
    }
  ]
  return (
    <>
      <div className="w-[60%] content-center m-auto py-10 text-center">
        <p className="font-bold text-3xl pb-5 pt-10">Our Latest Property News</p>
        <p className="font-normal text-lg w-[50%] m-auto">There are many variations of passages of Lorem Ipsum available but the this in majority have suffered alteration in some</p>
        <div class="grid grid-cols-3 gap-12 my-7">
          {
            data.map((user) => (
              <div class="flex flex-col rounded-b-lg">
                <img src={user.image} alt="" class="rounded-md" />
                  <div class="-mt-[3.5rem] ml-3">
                    <div class="w-1/3 h-auto bg-[#0984E3] text-white content-center flex p-2">
                      {user.date}
                    </div>
                  </div>
                  <p class="text-xs text-[#0984E3] pt-6 pb-2 text-left">Appartment</p> 
                  <p class="text-xl py-1 text-left font-medium">Top Title Insurer Exposed.</p>
                  <p class="text-base text-left">It is a long established fact that a reader is will be distracted by the readable....</p>
              </div>
            ))
          }
      </div>
      <button className="rounded font-medium text-lg p-4 bg-[#0984E3] text-white mb-[100px]">
        Read More Blogs
      </button>
      </div>
    </>
  )
}

export default Blogs
