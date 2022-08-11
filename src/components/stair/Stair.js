import React, { useEffect, useState } from 'react'
import './Stair.scss'
import { useContext } from 'react'
import live from '../../images/heart.png'
import gift from '../../images/gift.png'
import { TaskContext } from '../Context'
import { Navigation } from '../navbar/Navbar'


export const Stair = (props) => {
  const { stairsRef, isClicked, taskDone, savedTasksDone } = props
  const stairsCount = 23
  const { setIsClicked } = useContext(TaskContext)
  const { setId } = useContext(TaskContext)
  const clickHeart = (i) => {
    setId(i)
    setIsClicked(!isClicked)
  }


  return (
    <>
      <img className='gift' src={gift} alt='image' />
      <div className="stairs" >
        <div className={`${taskDone ? 'step-taskDone' : 'step'}`}
          ref={stairsRef}
          style={{ "--j": 1 }}>
          <i ></i>
          <i></i>
        </div>
        {
          [...Array(stairsCount)].map((e, i) =>
            (i !== 0) ?
              <div className='step'
                key={i}
                style={{ "--j": i }}>
             <i >
                  <button onClick={
                    () => {
                      clickHeart(i)
                    }
                  }
                  className='button live'
                    key={i}
                    src={live} >
                    {i === 22 ? 'Win' : i}
                  </button>
                </i>
                <i></i>
              </div> : ''
          )}
      </div>

    </>
  )
}
