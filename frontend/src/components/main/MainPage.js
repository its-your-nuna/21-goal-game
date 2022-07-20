import React, { useRef, useState} from 'react'
import {Stair} from '../stair/Stair'
import {Chibi} from '../chibi/Chibi'
import { Tasks } from '../tasks/Tasks'
import { TaskContext } from '../Context'
import './main.css'


export const MainPage = () => {
  const [tasksDone,setTasksDone] = useState(false)
  const stairsRef = useRef(null)
  const [isClicked, setIsClicked] = useState(true)
  const [daysCount,setDaysCount] = useState(1)
  const [id,setId] = useState(0)
  return (
    <TaskContext.Provider  value={{
        setTasksDone,
        setDaysCount,
        setIsClicked,
        setId
    }}>
    <Stair
    stairsRef={stairsRef}
    isClicked={isClicked}
    id={id}/>
    <Chibi
    daysCount = {daysCount}
    stairsRef={stairsRef}
    tasksDone={tasksDone}/> 
    <Tasks
    daysCount = {daysCount}
    tasksDone={tasksDone}
    stairsRef={stairsRef}
    isClicked={isClicked}
    id = {id}
  />
    </TaskContext.Provider>
  )
}
