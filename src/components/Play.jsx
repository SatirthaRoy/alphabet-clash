import React, { useEffect, useReducer, useRef, useState } from 'react'
import heart from '../alphabet-clash-pro-resources/images/Group 23.svg'
import money from '../alphabet-clash-pro-resources/images/monetization_on.svg'
import { type } from '@testing-library/user-event/dist/type';


// random key generator
const randomKey = () => {
  const keys = 'abcdefghijklmnopqrstuvwxyz';
  let randomNum = Math.floor(Math.random() * 26);
  return keys[randomNum];
}

const Play = () => {
  // keybords key
  const topKeys = 'qwertyuiop'.split('');
  const middleKeys = 'asdfghjkl'.split('');
  const downKeys = 'zxcvbnm/'.split('');

  const reducer = (state, action) => {
    switch(action.type) {
      case 'hurt':
        console.log('hurting');
        return {...state, health: state.health - 1}
      case 'score':
        console.log('scoringg');
        return {...state, ks: randomKey(), score: state.score + 1 }
      default:
        return state;
    }
  }
  let [state, dispatch] = useReducer(reducer, { ks: randomKey(), health: 3, score: 0 });

  function handler (e) {
    if(e.key === state.ks) {
      dispatch({type: 'score'});
    } else {
      dispatch({type: 'hurt'});
    }
    
  }

  useEffect(()=> {
    window.addEventListener('keyup', handler);
    return ()=> {
      window.removeEventListener('keyup', handler);
    }
  })

  const Keys = ({a, k}) => {
    return <div className=' space-x-2'>
             {
               a.map((key)=> {
                 return  <button
                 className={k===key ? 'poppin py-4 px-5 bg-orange-400 rounded-lg' : 'poppin py-4 px-5 bg-white rounded-lg'} key={key}>{key}
                 </button>
               })
             }
     </div>
   }

   const ScoreAndLife = () => {
    return <div className='flex justify-between w-11/12'>
      <div className=' flex poppin text-white text-xl gap-2 px-8 py-4 rounded-full bg-purple-500'>Life <img src={heart} alt="heart" /> {state.health}</div>
      <div className=' flex poppin text-white text-xl gap-2 px-8 py-4 rounded-full bg-blue-600'>Score <img src={money} alt="score" />{state.score}</div>
    </div>
  }

  return (
    <div onMouseOver={(e)=> {e.target.focus()}} className='w-screen h-screen flex flex-col items-center justify-center gap-8'>
      {/* this is the screen */}
      <div className='flex flex-col justify-start items-center max-w-5xl w-11/12 h-[300px] bg-[#FFFFFFB2] border-[#010313CC] border-[20px] rounded-2xl'>
        <div className='bg-[#010313CC] poppin px-7 py-4 text-white text-base font-medium rounded-b-xl'>
          Don't watch keyboard  while playing...
        </div>
        <div className='poppin mt-14 text-8xl font-semibold '>{state.ks}</div>
      </div>

      {/* here will be the keyboards */}
      <div className=' flex flex-col items-center gap-2'>
        {/* top row */}
        <Keys a = {topKeys} k = {state.ks}/>
        {/* middle row */}
        <Keys a={middleKeys} k = {state.ks}/>
        {/* bottom row */}
        <Keys a = {downKeys} k = {state.ks}/>
      </div>
      {/* score and health */}
      <ScoreAndLife/>
    </div>
  )
}

export default Play