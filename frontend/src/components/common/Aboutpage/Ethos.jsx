import React from 'react'
import bike from '../../../assets/componets-bg/bike.png'
import carwash from '../../../assets/componets-bg/carwash.png'

const Ethos = () => {
  return (
     <section className='text-app-black bg-white px-12 py-16'>
                            <div className='flex items-center justify-around  gap-10 '>
                                <div className='flex flex-col gap-4 max-w-2xl h-[600px'>
                                    <h1 className='font-bebas text-5xl pt-28 text-app-black'>A Studio Built for the 
                                        <br /> <span className='text-custom-red'>By the Obsessed </span></h1>
                                    <h2 className='font-bebas text-sm  font-semibold pt-4   '>Every Surface. Every Curve. Every Inch. Perfected.</h2>
                                    <p>Some see swirl marks. We see missed potential.
Some settle for “good enough.” We chase just right.<br/> OCD Detail Studio was born out of one simple belief:

                                       <br/> Your machine deserves more than a quick shine it deserves reverence.<br/>Some settle for “good enough.” We chase just right.<br/>Each vehicle we work on — whether it’s a Porsche, a Ducati, a Defender, or a Ninja is treated like a personal project.
</p>
                                    <p className='mt-4'>We’re not a car spa.<span className='text-custom-red'> We’re a perfectionist’s garage</span></p>
                                   
            
                                </div>
            
            
                                <div className='relative w-[500px] h-[600px] ml-8'>
                                    {/* Bike image - positioned at top right */}
                                    <img 
                                        src={bike} 
                                        alt="Bike" 
                                        className='absolute top-0 right-0 w-[320px] h-auto z-10 rounded-lg shadow-lg' 
                                    />
                                    {/* Carwash image - positioned at bottom left, overlapping bike */}
                                    <img 
                                        src={carwash} 
                                        alt="Car Wash" 
                                        className='absolute bottom-0 left-0 w-[300px] h-[450px] z-20 rounded-lg shadow-lg' 
                                    />
                                </div>
            
                            </div>
                        </section>
  )
}

export default Ethos