import React, { useRef, useState,useCallback } from 'react'
import {Stair} from '../stair/Stair'
import {Chibi} from '../chibi/Chibi'
import { Tasks } from '../tasks/Tasks'
import { TaskContext } from '../Context'
import Countdown from "react-countdown";
import './main.css'
import $ from 'jquery'
import jQuery from 'jquery'
const Completionist = () => <span>You are good to go!</span>;

export const MainPage = () => {
  const [tasksDone,setTasksDone] = useState(false)
  var lastScrollTop = 0
  jQuery(function($) {
  $("#scroller").scroll(function(e) {
    var scrollTop = $(this).scrollTop()    
    if (scrollTop === lastScrollTop) {
        // Vertical scroll position is unchanged, so we're scrolling horizontal.
        $(this).scrollTop($(this).scrollLeft());
    } else {
        // Vertical scroll position has changed, so we're scrolling vertical.
        $(this).scrollLeft($(this).scrollTop());
    }
    lastScrollTop = scrollTop;
    });
  })
  const stairsRef = useRef(null)
  return (
    <TaskContext.Provider  value={{
        setTasksDone
    }}>
    <Countdown date={Date.now() + 10000}>
    <Completionist />
  </Countdown>
    <Stair
    stairsRef={stairsRef}/>
    <Chibi
    stairsRef={stairsRef}
    tasksDone={tasksDone}/> 
    <Tasks
    tasksDone={tasksDone}
  />
    </TaskContext.Provider>
  )
}
