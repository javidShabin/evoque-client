import React from 'react'

export const Hero = () => {
  return (
    <div style={{backgroundImage: "url('/images/hero.png')", backgroundSize: "cover", backgroundPosition: "center"}}>
        <div className='h-screen grid grid-cols-1 lg:grid-cols-2 items-center gap-8 px-4 sm:px-6 lg:px-8'>
            <div className='text-center lg:text-left'>
                <h1 className='text-4xl sm:text-5xl font-bold text-black'>Matched Heading</h1>
                <p className='mt-4 text-base sm:text-lg text-black/80'>A small paragraph that briefly describes the highlight of this section.</p>
                <div className='mt-6'>
                    <a href="#explore" className='inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white bg-black hover:bg-gray-900 transition-colors'>Explore</a>
                </div>
            </div>
            <div className='flex justify-center lg:justify-end'>
                <img src='/images/shoe.png' alt='Featured shoe' className='max-w-[520px] w-full h-auto' />
            </div>
        </div>
    </div>
  )
}
