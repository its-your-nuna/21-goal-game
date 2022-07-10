import React, { useRef, useState } from 'react'
import { useEffect } from 'react';
import './Stair.scss'
export const Stair = ({stairsRef}) => {
   
   const[stepCount,setStepCount]= useState(1)
     
  return (
    <>
    <div className="stairs">
        <div className="base"> </div>
            <div className="step" style = {{"--j":1}}>
                <i></i>
                <i></i>
            </div>
            <div className="step"  ref={stairsRef}
             style ={ {"--j":2}}>
                <i></i>
                <i></i>
            </div>
            <div className="step" style = {{"--j":3}}>
                <i></i>
                <i></i>
            </div>
            <div className="step" style = {{"--j":4}}>
                <i></i>
                <i></i>
            </div>
            <div className="step" style = {{"--j":5}}>
                <i></i>
                <i></i>
            </div>
            <div className="step" style = {{"--j":6}}>
                <i></i>
                <i></i>
        </div>
     </div>
    </>
  )
}
