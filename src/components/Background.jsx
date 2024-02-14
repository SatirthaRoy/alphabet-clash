import React from 'react'
import background from '../alphabet-clash-pro-resources/images/background.png'

const Background = () => {
  return (
    <div className='w-screen h-screen bg-[#010313] -z-10 absolute'>
      <div className=" w-[622px] mx-auto">
        <img src={background} alt="background" className=' h-screen w-full'/>
      </div>
    </div>
  )
}

export default Background