import React, { useState } from 'react'
import Play from './Play'

const Home = () => {
  const [playing, setPlaying] = useState(false);
  return <>
    {playing ? <Play/> : <div className=' w-screen h-screen flex flex-col items-center justify-center gap-8'>
      <h1 className=' text-[170px] text-white font-normal'>ALPHABET CLASH</h1>
      <p className=' text-white font-medium text-2xl'>Unleash Your Keyboard Kung Fu : Press “Enter” to Play</p>
      <button className='text-2xl text-[#010313] font-semibold bg-white rounded-lg py-6 px-8' onClick={()=> setPlaying(true)}>Play Now</button>
    </div>}
  </>
  
}

export default Home