
import React from 'react'
import './tasks.scss'
import {useState,useEffect,useRef} from 'react'
import {v4 as myId} from 'uuid'
import { TaskContext } from '../Context'
import { useContext } from 'react'
import live from '../../images/heart.png'
import { animated, useSpring } from "react-spring";


export const Tasks = ({tasksDone}) => {
  const[itemToDo,setItemToDo]=useState("")
  const ref = useRef(null);
  const[items,setItems]=useState({})
  const[isDeleted,setIsDeleted]=useState(false)
  const{setTasksDone}=useContext(TaskContext)
  const[isClicked,setIsClicked]=useState(false)

  const handleFunction=(event)=>{
    setItemToDo(event.target.value)
  }
  const addItem=()=>{
    const newItem={key:myId(),label:itemToDo}
    setItems(newItem)
    setItemToDo("")
    setIsDeleted(true)
    setTasksDone(ref.current.checked)
  }
  const handleDelete=()=>{
    setIsClicked(false)
  };
  
  const springProps = useSpring({
    from: { },
    to: async next => {
      await next({ })

    },
    config: { duration: 500 }
  });
  return (
    <>
    <div className="card">
    <div className="card-body">
        <h5 className="card-title">Day: 1/21 <br/>Running</h5>
        <p className="card-text">
        <input ref={ref} className="checkbox-pull" type="checkbox" id="check3"/>
    <label htmlFor="check3"><span></span>Checkbox</label>
            <label className="container">
            Как ты провел день? 
            <input value={itemToDo}
            type="text"
            className="form-control"
            onChange={handleFunction}
        />
            </label>
        </p>
        <button href="#" className="btn btn-primary" 
        onClick={()=>addItem()}>Submit</button>
    </div>
    </div>
    {isDeleted?
    <img src={live} className='live'
    onClick={()=>{
      setIsClicked(true)
      setIsDeleted(false)
    }}
    />:<></>
    }
    {
      isClicked?<div className='speech-bubble'>
      {items.label? items.label:'Here your text'}
      <button
              onClick={()=>handleDelete()}
              type="button"
            >
              delete
            </button>
      <button
       onClick={()=>{setIsDeleted(true)
        setIsClicked(false)
      }}
      >scroll</button>
    </div>:<></>
  }
    </>
  )
}
