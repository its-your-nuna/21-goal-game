import React, { useEffect, useState } from 'react'
import './Stair.scss'
import { useContext } from 'react'
import live from '../../images/heart.png'
import { TaskContext } from '../Context'

export const Stair = ({stairsRef,isClicked}) => {
    const n = 24
    const { setIsClicked} = useContext(TaskContext)
  return (
    <>
     <div className="stairs" >
        <div className="base"> </div>
        
            <div className="step"
            ref={stairsRef}
            style = {{"--j":1}}>
                <i ><img onClick={()=>{setIsClicked(!isClicked)}} style={{width:'75px',margin:'0px'}} src={live}/></i>
                <i></i>
            </div>
            {
            [...Array(n)].map((e, i) => 
            (i!==0 && i!==1)? 
            <div className="step"
                key={i}
                style = {{"--j":i}}>
                    <i><img style={{width:'75px',margin:'0px'}} src={live}/></i>
                    <i></i>
                </div>:''
            )}
           
     </div>
    </>
  )
}
