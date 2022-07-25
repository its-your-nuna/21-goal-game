import React, { useEffect, useRef, useState } from 'react'
import { Stair } from '../stair/Stair'
import { Chibi } from '../chibi/Chibi'
import { Tasks } from '../tasks/Tasks'
import { TaskContext } from '../Context'
import './main.css'
import { CountDownTimer } from './CountDownTimer'


export const MainPage = () => {
  const [tasksDone, setTasksDone] = useState(false)
  const stairsRef = useRef(null)
  const [isClicked, setIsClicked] = useState(true)
  let [daysCount, setDaysCount] = useState(1)
  const [savedDay,setSavedDay] = useState(1)
  const [id, setId] = useState(60)
  let [count,setCount] = useState(0)

  useEffect(()=>{
    if(tasksDone){
      setSavedDay(daysCount)
    }
    if(savedDay===7 || savedDay === 14 || savedDay===21){
      setCount(count+=50)
    }
    if(savedDay===21){
      setCount(count+=150)
    }
    console.log(savedDay,count)
  },[tasksDone])

  window.onload = function () {

    var display = document.querySelector('#time'),
      timer = new CountDownTimer(5);

    timer.onTick(format).onTick(restart).start();
    function restart() {
      if (daysCount < 21) {
        if (this.expired()) {
           setTimeout(function () {
            timer.start()
          }, 1000);
          daysCount += 1;
          setDaysCount(daysCount)
          setTasksDone(false)
        }

      } else if (this.expired() && daysCount > 3) {
        setTimeout(function () {
          ;
        }, 1000);
        setDaysCount(0)
      }
  
    }
    function format(minutes, seconds) {
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      display.textContent = minutes + ':' + seconds;
    }
  };
  return (
    <TaskContext.Provider value={{
      setTasksDone,
      setDaysCount,
      setIsClicked,
      setId
    }}>
      <div><span id="time"></span></div>
      <div><span id="cash">Cash: {count}</span></div>
      <Stair
        stairsRef={stairsRef}
        isClicked={isClicked}
        id={id} />
      <Chibi
        daysCount={daysCount}
        savedDay={savedDay}
        stairsRef={stairsRef}
        tasksDone={tasksDone}
        id={id}  />
      <Tasks
        daysCount={daysCount}
        tasksDone={tasksDone}
        stairsRef={stairsRef}
        isClicked={isClicked}
        id={id}
      />
    </TaskContext.Provider>
  )
}
