import React, { useState,useRef, useEffect } from 'react'
import cat from './chibi-cat.png'
import './chibi.css'
import { animated, useSpring } from "react-spring";



export const Chibi = ({stairsRef}) => {
  
  const catRef = useRef(null);
  const [animate,setAnimate]=useState(false)
  const [catRect,setCatRect]=useState({
      x:0,
      y:0,
      width:0,
      height:0   
  })
  useEffect(()=>{
    const div = stairsRef.current;
    const rect = div.getBoundingClientRect();
    setCatRect({
      x:rect.x,
      y:rect.y,
      width:rect.width,
      height:rect.height})
  },[])
  const {x,y,width,height}=catRect
  const springProps = useSpring({
    // loop: { reverse: animate},
    from: { bottom: '0px', left: '0%', width: '10%', height: '10%',position: 'relative' },
    to: async next=> { 
        await next({ bottom: height+60+'px', left: '10%'})
        await next({ bottom: (height/2+30)+'px'})        
        await next({ bottom: (height/2+30)+'px'})
        await next({  bottom: (height/2+30)+'px'})
   
  },
    config: { duration: 500 }
  });

 
  console.log(catRect)

  return (
    <>
            <animated.img
            ref={catRef}
            src={cat}
            alt={'cat'}
            className='cat'
            style={springProps} />
    
    </>
  )
}
