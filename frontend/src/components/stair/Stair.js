import React, { useEffect, useState } from 'react'
import './Stair.scss'
import { useContext } from 'react'
import live from '../../images/heart.png'
import gift from '../../images/gift.png'
import prize from '../../images/prize.png'
import { TaskContext } from '../Context'


export const Stair = ({stairsRef,isClicked,taskDone,savedDay}) => {
    const stairsCount = 23
    const { setIsClicked} = useContext(TaskContext)
    const { setId} = useContext(TaskContext)
    const clickHeart = (i)=>{
        setId(i)
        setIsClicked(!isClicked)
    }
    
  return (
    <>
    <img className='gift' src={gift} alt='image'/>
     <div className="stairs" >
        <div className="base"> </div>
        
            <div className={`${taskDone? 'step-taskDone': 'step'}`}
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
            <div className='step'
                key={i}
                style = {{"--j":i}}>
                    <i >
                      <div className='con'>
                      <img onClick={
                        ()=>{
                            clickHeart(i)
                        }
                        } 
                        className={`${savedDay==taskDone? 'live-taskDone': 'live'}`}
                        key={i}
                        src={live}/>
                        <p>{i}</p>
                        </div>
                        </i>
                    <i></i>
                </div>:''
            )}
     </div>
     <img className='prize' src={prize}/>
    </>
  )
}
