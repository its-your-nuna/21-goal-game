import React, { useRef, useState } from 'react'
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
  let [daysCount, setDaysCount] = useState(0)
  const [id, setId] = useState(0)
  window.onload = function () {

    var display = document.querySelector('#time'),
      timer = new CountDownTimer(5);
    var display2 = document.querySelector('#day')
    timer.onTick(format).onTick(restart).start();
    function restart() {
      if (daysCount < 3) {
        if (this.expired()) {
          setTimeout(function () {
            timer.start()
              ;
          }, 1000);
          daysCount += 1;
          display2.textContent = daysCount
          setDaysCount(daysCount)
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
      <div>Registration closes in <span id="time"></span> minutes!</div>
      <div id="day"></div>
      <Stair
        stairsRef={stairsRef}
        isClicked={isClicked}
        id={id} />
      <Chibi
        daysCount={daysCount}
        stairsRef={stairsRef}
        tasksDone={tasksDone} />
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
