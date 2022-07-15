import React, { useRef, useState } from 'react'
import { useEffect,useCallback } from 'react';
import './Stair.scss'
import $ from 'jquery'
export const Stair = ({stairsRef}) => {
   
   const[stepCount,setStepCount]= useState(1)

  return (
    <>
    <div className="stairs" >
        <div className="base"> </div>
            <div className="step"
            ref={stairsRef}
            style = {{"--j":1}}>
                <i></i>
                <i></i>
            </div>
            <div className="step"  
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
            <div className="step" style = {{"--j":7}}>
                <i></i>
                <i></i>
            </div>
            <div className="step" style = {{"--j":8}}>
                <i></i>
                <i></i>
            </div>
            <div className="step" style = {{"--j":9}}>
                <i></i>
                <i></i>
            </div>
            <div className="step" style = {{"--j":10}}>
                <i></i>
                <i></i>
            </div>
            <div className="step" style = {{"--j":11}}>
                <i></i>
                <i></i>
            </div>
            <div className="step" style = {{"--j":12}}>
                <i></i>
                <i></i>
            </div>
            <div className="step" style = {{"--j":13}}>
                <i></i>
                <i></i>
            </div>
            <div className="step" style = {{"--j":14}}>
                <i></i>
                <i></i>
            </div>
            <div className="step" style = {{"--j":15}}>
                <i></i>
                <i></i>
            </div>
            <div className="step" style = {{"--j":16}}>
                <i></i>
                <i></i>
            </div>
            <div className="step" style = {{"--j":17}}>
                <i></i>
                <i></i>
            </div>
            <div className="step" style = {{"--j":18}}>
                <i></i>
                <i></i>
            </div>
            <div className="step" style = {{"--j":19}}>
                <i></i>
                <i></i>
            </div>
            <div className="step" style = {{"--j":20}}>
                <i></i>
                <i></i>
            </div>
            <div className="step" style = {{"--j":21}}>
                <i></i>
                <i></i>
            </div>
            <div className="step" style = {{"--j":22}}>
                <i></i>
                <i></i>
            </div>
           
     </div>
    </>
  )
}
