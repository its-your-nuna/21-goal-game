
import React from 'react'
import './tasks.scss'
import { useState, useEffect, useRef } from 'react'
import { v4 as myId } from 'uuid'
import { TaskContext } from '../Context'
import { useContext } from 'react'
import live from '../../images/heart.png'
import question from '../../images/question-mark.png'
import { animated, useSpring } from "react-spring";


export const Tasks = ({ tasksDone }) => {
  const [itemToDo, setItemToDo] = useState("")
  const ref = useRef(null);
  const ref2 = useRef(null);
  const [items, setItems] = useState({})
  const [isDeleted, setIsDeleted] = useState(false)
  const { setTasksDone } = useContext(TaskContext)
  const [isClicked, setIsClicked] = useState(false)

  const handleFunction = (event) => {
    setItemToDo(event.target.value)
  }
  const addItem = () => {
    const newItem = { key: myId(), label: itemToDo }
    setItems(newItem)
    setItemToDo("")
    setIsDeleted(true)
    setTasksDone(ref.current.checked)
  }
  const handleDelete = () => {
    setIsClicked(false)
  };

  const springProps = useSpring({
    from: {},
    to: async next => {
      await next({})

    },
    config: { duration: 500 }
  });
  var element;
  useEffect(() => {
    element = ref2.current
    console.log(element)
    function draggable(element) {
      var isMouseDown = false;
      var mouseX;
      var mouseY;
      var elementX = 0;
      var elementY = 0;
      element.addEventListener('mousedown', onMouseDown);
      function onMouseDown(event) {
        mouseX = event.clientX;
        mouseY = event.clientY;
        isMouseDown = true;
      }
  
      document.addEventListener('mouseup', onMouseUp);
      function onMouseUp(event) {
        isMouseDown = false;
        elementX = parseInt(element.style.left) || 0;
        elementY = parseInt(element.style.top) || 0;
      }
      document.addEventListener('mousemove', onMouseMove);
      function onMouseMove(event) {
        if (!isMouseDown) return;
        var deltaX = event.clientX - mouseX;
        var deltaY = event.clientY - mouseY;
        element.style.left = elementX + deltaX + 'px';
        element.style.top = elementY + deltaY + 'px';
      }
    }
    draggable(element)
  })

  return (
    <>
      <div className="player"  ref={ref2} >
        <div className="card-body">
          <h5 className="card-title">Day: 1/21</h5>
          <p className="card-text">
            <input ref={ref} className="checkbox-pull" type="checkbox" id="check3" />
            <label htmlFor="check3"><span></span>Сделано</label>
            <input className="checkbox-pull" type="checkbox" />
            <label ><img style={{width:'20px',marginRight:'5px'}} src={question}/>Мои успехи
              <input value={itemToDo}
                type="text"
                className="form-control"
                onChange={handleFunction}
              />
            </label>
          </p>
          <button href="#" className="pixel"
            onClick={() => addItem()}>Submit</button>
        </div>
      </div>

      {isDeleted ?
        <img src={live} className='live'
          onClick={() => {
            setIsClicked(true)
            setIsDeleted(false)
          }}
        /> : <></>
      }
      {
        isClicked ? <div className='speech-bubble'>
          {items.label ? items.label : 'Here your text'}
          <br/>
          <div style={{marginTop:'50%'}}>
          <button
            onClick={() => handleDelete()}
            type="button"
          >
            delete
          </button>
          <button
            onClick={() => {
              setIsDeleted(true)
              setIsClicked(false)
            }}
          >scroll</button>
          </div> 
        </div>: ''
      }
    </>
  )
}
