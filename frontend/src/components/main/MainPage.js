import React, { useRef, useState} from 'react'
import {Stair} from '../stair/Stair'
import {Chibi} from '../chibi/Chibi'
import { Tasks } from '../tasks/Tasks'
import { TaskContext } from '../Context'
import './main.css'


export const MainPage = () => {
  const [tasksDone,setTasksDone] = useState(false)
  const stairsRef = useRef(null)
  const [isClicked, setIsClicked] = useState(false)
  const [daysCount,setDaysCount] = useState(1)
  return (
    <TaskContext.Provider  value={{
        setTasksDone,
        setDaysCount,
        setIsClicked
    }}>
    <Stair
    stairsRef={stairsRef}
    isClicked={isClicked}/>
    <Chibi
     daysCount = {daysCount}
    stairsRef={stairsRef}
    tasksDone={tasksDone}/> 
    <Tasks
    daysCount = {daysCount}
    tasksDone={tasksDone}
    stairsRef={stairsRef}
    isClicked={isClicked}
  />
    </TaskContext.Provider>
  )
}
