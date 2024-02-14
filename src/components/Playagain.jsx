import React, { useState } from 'react'
import Play from './Play';


const Playagain = ({score}) => {
  let [playagain,setPlayagain] = useState(true);
  if(playagain) {
    return (
      <div className='w-screen h-screen flex flex-col items-center justify-center gap-8'>
        <div className=' w-96 h-72 bg-purple-400 rounded-2xl flex flex-col gap-4 justify-center items-center text-white'>
          <h1 className='poppin font-extrabold text-6xl'>Score : {score}</h1>
          <button onClick={()=> setPlayagain(false)} className='poppin text-black px-8 py-5 rounded-xl bg-white text-2xl font-semibold'>Play Again</button>
          <p className='poppin font-medium text-xl'>Practice will make you Pro</p>
        </div>
      </div>
    )
  } else {
    return <Play/>
  }
  
}

export default Playagain