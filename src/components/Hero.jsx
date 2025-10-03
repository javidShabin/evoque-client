import React from 'react'

export const Hero = () => {
  return (
    <div style={{backgroundImage: "url('/images/hero.png')", backgroundSize: "cover", backgroundPosition: "center"}}>
        <div className='flex flex-col items-center justify-center h-screen'>
            <h1 className='text-4xl font-bold'>Welcome to the Home Page</h1>
            <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        </div>
    </div>
  )
}
