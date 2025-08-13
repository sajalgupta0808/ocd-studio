import React from 'react'
import timeline from '../../../assets/componets-bg/timeline.png'

export const Timeline = () => {
  return (
    <section className='flex flex-col items-center justify-center  py-16 gap-10'>
        <div>
            <h2 className='text-xl font-semibold text-white text-center'>OUR STORY</h2>
            <h1 className='font-bebas text-3xl text-white'>Two Brothers. One Mission.<span className='text-custom-red'> A 25-Year Obsession.</span>
</h1>
        </div>
        <div>
            <img src={timeline} alt="Timeline" className='max-w-md h-auto' />
        </div>
    </section>
  )
}
