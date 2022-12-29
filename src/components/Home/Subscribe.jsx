import React from 'react'

const Subscribe = () => {
  return (
    <>
        <div className="min-h-[17rem] w-full">
            <div className="w-full h-64 relative">
                <img className="absolute inset-0 h-full w-full object-cover" src="/assets/subscribe.png" alt="" /> 
                <div className="absolute inset-0 bg-gray-900 bg-opacity-75">
                </div>
                    <div className="flex h-full items-center justify-center relative">
                        <div className="text-white font-bold text-3xl">
                            <p>Subscribe Our Email Address</p>
                            <p>For Future Lettest News & Updates</p>
                        </div>
                        <div>
                            <input type="text" className="h-6 p-6 mx-[6rem] rounded-md" placeholder="Type your Email address"/>
                        </div>
                    </div>
            </div>
        </div>
    </>
  )
}

export default Subscribe
