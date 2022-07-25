import React, { useEffect, useState } from 'react'
import './Stair.scss'
import { useContext } from 'react'
import live from '../../images/heart.png'
import gift from '../../images/gift.png'
import prize from '../../images/prize.png'
import { TaskContext } from '../Context'
import { animated, useSpring } from "react-spring";

export const Stair = ({stairsRef,isClicked,id}) => {
    const stairsCount = 23
    const { setIsClicked} = useContext(TaskContext)
    const { setId} = useContext(TaskContext)
    const clickHeart = (i)=>{
        setId(i)
        setIsClicked(!isClicked)
    }
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
    const springProps = useSpring({
        
      });

  return (
    <>
    <img className='gift' src={gift} alt='image'/>
     <div className="stairs" >
        
        <div className="base"> </div>
        
            <div className="step"
            ref={stairsRef}
            style = {{"--j":1}}>
                <i ><img onClick={
                    ()=>{setIsClicked(!isClicked)}
                    } 
                    style={{width:'75px',margin:'0px'}}
                     src={live}/></i>
                <i></i>
            </div>
            {
            [...Array(stairsCount)].map((e, i) => 
            (i!==0)? 
            <div className="step"
                key={i}
                style = {{"--j":i}}>
                    <i><img onClick={
                        ()=>{
                            clickHeart(i)
                        }
                        } 
                        style={{width:'75px',margin:'0px'}} 
                        src={live}/></i>
                    <i></i>
                </div>:''
            )}
     </div>
     <img className='prize' src={prize}/>
    </>
  )
}
