import React, { useEffect, useRef, useState } from 'react'
import './main.scss'
import { Stair } from '../stair/Stair'
import { Chibi } from '../chibi/Chibi'
import { Tasks } from '../tasks/Tasks'
import { TaskContext } from '../Context'
import { Navigation } from '../navbar/Navbar'
import { ModalClass } from '../modal/Modal'
import { CountDownTimer } from './CountDownTimer'
import prize from '../../images/prize.png'
import box from '../../images/box.png'



export const MainPage = ({ count,setCount,player }) => {
  
  const stairsRef = useRef(null)
  const [id, setId] = useState(0)
  let [daysCount, setDaysCount] = useState(0)
  const [savedDay, setSavedDay] = useState(0)
  const [daysArray, setDaysArray] = useState([])
  const [isClicked, setIsClicked] = useState(true)
  const [isExpired, setIsExpired] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [tasksDone, setTasksDone] = useState(false);
  const [modalText, setModalText] = useState("")
  const [savedTasksDone, setSavedTasksDone] = useState(true);
  const [time,setTime] = useState("")
  useEffect(() => {
    if (tasksDone && isExpired) {
      setSavedDay(daysCount)
    }
    if (tasksDone && (savedDay === 5 || savedDay === 9 || savedDay === 15)) {
      setCount(count += 50)
      setModalShow(true)
      if (savedDay === 22) {
        setCount(count += 150)
      }
      setSavedTasksDone(false)
      setModalShow(true)
      setModalText("You won" + count + "ETC")
    }
  }, [tasksDone])


 
  
  useEffect(()=>{
    return function onload () {

      var timer = new CountDownTimer(5);
  
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
            setIsExpired(true)
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
        setTime( minutes + ':' + seconds);
      }
    };
  },[])
  window.onload= function(){
    var timer = new CountDownTimer(5);
  
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
          setIsExpired(true)
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
      setTime( minutes + ':' + seconds);
    }
  };
  
  return (
    <section>
    <TaskContext.Provider value={{
      setTasksDone,
      setDaysCount,
      setIsClicked,
      setId,
      setModalShow,
      setModalText
    }}>
     
      <Stair
        stairsRef={stairsRef}
        isClicked={isClicked}
        taskDone={tasksDone}
        savedTasksDone={savedTasksDone}
        daysArray={daysArray}
        id={id} />
      <Chibi
        player={player}
        daysCount={daysCount}
        savedDay={savedDay}
        stairsRef={stairsRef}
        tasksDone={tasksDone}
        id={id} />
      <Tasks
        daysCount={daysCount}
        tasksDone={tasksDone}
        stairsRef={stairsRef}
        isClicked={isClicked}
        isExpired={isExpired}
        id={id}
      />
      ${savedTasksDone && <img className='prize' src={prize} />}
      ${savedTasksDone && <img className='prize2' src={prize} />}
      ${savedTasksDone && <img className='prize3' src={prize} />}
      ${savedTasksDone && <img className='box' src={box} />}
      <ModalClass
        show={modalShow}
        modalText={modalText}
        onHide={() => setModalShow(false)}
      />
    </TaskContext.Provider>
    </section>
  )
}
