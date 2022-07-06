import React from 'react'
import { useEffect } from 'react';
import './Stair.scss'
export const Stair = () => {
  
  function setSize(size) {
    console.log(`Updating --j to: ${size}`);
    document.documentElement.style.setProperty('--j', size);
  }
  return (
    <>
    <div className="stairs">
        <div className="base"> </div>
            <div className="step" style = {{"--j":1}}>
                <i></i>
                <i></i>
            </div>
            <div className="step" style ={ {"--j":2}}>
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
