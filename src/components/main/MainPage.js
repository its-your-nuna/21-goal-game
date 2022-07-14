import React, { useRef, useState } from 'react'
import {Stair} from '../stair/Stair'
import {Chibi} from '../chibi/Chibi'
import { Tasks } from '../tasks/Tasks'
import { TaskContext } from '../Context'
import Countdown from "react-countdown";
const Completionist = () => <span>You are good to go!</span>;

export const MainPage = () => {
  const [tasksDone,setTasksDone] = useState(false)


  const stairsRef = useRef(null)
  return (
    <TaskContext.Provider value={{
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
