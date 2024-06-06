import React from 'react'

const Home = () => {
  return (
    <div className='flex h-screen '>
         <video className="absolute top-0 left-0 w-full h-full object-cover" src="/video1.mp4" autoPlay muted loop />
         
            <div className="relative z-10 flex  flex-col items-center justify-center h-full sm:h-[800px] 
             bg-black bg-opacity-50"></div>
   
    </div>
  )
}

export default Home