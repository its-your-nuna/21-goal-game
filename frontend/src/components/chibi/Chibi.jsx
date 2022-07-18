import React, { useState, useRef, useEffect } from 'react'
import cat from './chibi-cat.png'
import './chibi.css'
import { animated, useSpring } from "react-spring";



export const Chibi = ({ stairsRef, tasksDone,daysCount }) => {

  const catRef = useRef(null);
  const [catRect, setCatRect] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0
  })
  useEffect(() => {
    const div = stairsRef.current;
    console.log(div)
    const rect = div.getBoundingClientRect();
    setCatRect({
      x: rect.x,
      y: rect.y,
      z: rect.z,
      left: rect.left,
      width: rect.width,
      height: rect.height
    })
  }, [])
  const { width, height} = catRect

  let days;
  if(tasksDone){
    days =daysCount
  }else{
    days=0
  }

  const springProps = useSpring({
    from: { bottom: height * days + 'px', left: width * days + 'px', width: '100px', height: '100px', position: 'relative' },
    to: async next => {
      await next({ bottom: height * days * 1.5 + 'px', left: width * days + 'px' })
      await next({ bottom: height * days + 30 + 'px', left: width *days+width/2 + 'px' })
    },
    config: { duration: 500 }
  });

  return (
    <>
      <animated.img
        ref={catRef}
        src={cat}
        alt={'cat'}
        className='cat'
        style={
          springProps
        } />

    </>
  )
}
