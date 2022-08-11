import React, {Suspense, useState, useRef, useEffect } from 'react'
import cat from './astro.png'
import { animated, useSpring } from "react-spring";
import './chibi.scss'
export const Chibi = (props) => {
  const {stairsRef,tasksDone, daysCount,savedDay,player} = props

  const catRef = useRef(null);
  const [catRect, setCatRect] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0
  })
  useEffect(() => {
    const div = stairsRef.current;
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
  const { width, height } = catRect
  let days=savedDay-1

  if(tasksDone){
    days=daysCount -1                                                                                                                                
  }else{
    days=savedDay-1
  }
  let bottom1=height * days +150;
  let bottom2 =height * days + 60;
  if(height<40){
    bottom1=height * days +100;
    bottom2 =height * days + 30;
  }
  const springProps = useSpring({
    from: { bottom: height * days + 'px', left: width * days + 'px' },
    to: async next => {
      await next({ bottom: bottom1 + 'px', left: width * days + 'px' })
      await next({ bottom: bottom2 + 'px', left: width * days + width / 2 + 'px' })
    },
    config: { duration: 500 }
  });
  console.log(height)
  return (
    <>
      <animated.img 
        draggable = "false"
        ref={catRef}
        className = 'chibi'
        src={player?player:cat}
        alt={'cat'}
        style={
          springProps
        } />
    </>
  )
}
