import React from 'react'
import apple from '../assets/apple.svg'
import google from '../assets/google.svg'

const Home = () => {
  return (
    <section name='home' className='flex w-full h-screen bg-zinc-200'>
      <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
        <div className='flex flex-col justify-center w-full px-2 py-8 md:items-start'>
          <p className='text-2xl '>Use our chatty platform</p>
          <h1 className='py-3 text-5xl font-bold md-text-7xl '>Chatty Management</h1>
          <p className='text-2xl'>Chatty is the best chat platform.</p>
          <button className='py-3 px-6 sm:w-[60%] my-7'>Get Started</button>
        </div>

        <div className=' flex flex-col justify-center px-2'>
          <h2 className='font-semibold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] w-full'>
            Easily download app <br/>Google & Apple
          </h2>
          <p className='text-[18px] leading-[30.8px] max-w-[470px] mt-5'>
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
            aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
          </p>
          <div className='flex flex-row flex-wrap mt-6 sm:10'>
            <img src={apple} alt='apple_play' className='w-[128px] h-[42px] cursor-pointer mr-5'></img>
            <img src={google} alt='google_play' className='w-[144px] h-[42px] cursor-pointer'></img>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home