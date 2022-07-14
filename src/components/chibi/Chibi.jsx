import React, { useState,useRef, useEffect } from 'react'
import cat from './chibi-cat.png'
import './chibi.css'
import { animated, useSpring } from "react-spring";



export const Chibi = ({stairsRef,tasksDone}) => {

  const catRef = useRef(null);
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
      left:rect.left,
      width:rect.width,
      height:rect.height})
  },[])
  const {x,y,width,height,left}=catRect
  // const springProps = useSpring({
  //   // loop: { reverse: animate},
  //   from: { bottom: 0+'px', left: '0%', width: '10%', height: '10%',position: 'relative' },
  //   to: async next=> { 
  //       await next({ bottom: height+90+'px', left: '10%'})
  //       await next({ bottom: (height/2+60)+'px'})        
  // },
  //   config: { duration: 500 }
  // });
  // const springProps2 = useSpring({
  //   // loop: { reverse: animate},
  //   from: { bottom: 0+'px', left: '0%', width: '10%', height: '10%',position: 'relative' },
  //   to: async next=> { 
  //       await next({ bottom: 0+'px', left: '0%', width: '10%', height: '10%',position: 'relative' })  
  // },
  //   config: { duration: 500 }
  // });
  let days = 2
  const bottomFrom = (days)=>{
    let bottom1 = 0
    bottom1 = height/2+(days*30)
    return bottom1
  }
  const bottomJumpHeight =(days)=>{
    let bottom2 = 0
    bottom2 = height+(days*60)
    return bottom2
  }
  const bottomTo = ()=>{
    let bottom1 = 0
    bottom1 = height/2+(days*45)
    return bottom1
  }
  const springProps = useSpring({
    // loop: { reverse: animate},
    from: { bottom: bottomFrom(days)+'px', left: left/2, width: '10%', height: '10%',position: 'relative' },
    to: async next=> { 
        await next({ bottom: bottomJumpHeight(days)+'px', left: left/2})
        await next({ bottom: bottomTo(days)+'px'})        
  },
    config: { duration: 500 }
  });
  console.log(left)
  //63.48333740234375 126.9666748046875 78.48333740234375
  // console.log(bottomFrom(days),bottomJumpHeight(days),bottomTo(days))
  const springProps2 = useSpring({
    // loop: { reverse: animate},
    
    from: { bottom:(height/2+60)+'px', left: '10%', width: '10%', height: '10%',position: 'relative' },
    to: async next=> { 
        await next({ bottom:(height/2+60)+'px', left: '10%', width: '10%', height: '10%',position: 'relative' })  
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
              !tasksDone?
              springProps:
              springProps2} />
    
    </>
  )
}
