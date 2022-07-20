
import React from 'react'
import './tasks.scss'
import { useState, useEffect, useRef } from 'react'
import { v4 as myId } from 'uuid'
import { TaskContext } from '../Context'
import { useContext } from 'react'
import question from '../../images/question-mark.png'
import axios from 'axios'


export const Tasks = ({ stairsRef
  , isClicked, id, daysCount }) => {
  const [itemToDo, setItemToDo] = useState("")
  const ref = useRef(null);
  const ref2 = useRef(null);
  const [items, setItems] = useState([])
  const { setIsClicked } = useContext(TaskContext)
  const { setTasksDone } = useContext(TaskContext)
  const [tasks, setTasks] = useState([])
  const [catRect, setCatRect] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0
  })
  const handleFunction = (event) => {
    setItemToDo(event.target.value)
  }
  const addItem = () => {
    axios.post("http://localhost:5000/tasks", {
      content: itemToDo
    })
      .then((response) => {
        setTasks([...tasks, response.data])
      })
    setItemToDo("")
    setTasksDone(ref.current.checked)
  }

  const handleDelete = () => {
    setIsClicked(false)
  };
  useEffect(() => {
    axios.get("http://localhost:5000/tasks").
      then((response) => {
        setTasks(response.data);
      });
    for (let i = 0; i < daysCount; i++) {
      if (tasks[i] !== undefined) {
        setItems({ label: tasks[i].content })
      } else {
        console.log('undefined')
      }
    }
    console.log(items)
  }, [tasks])
  

  var element;
  useEffect(() => {
    const div = stairsRef.current;
    const rect = div.getBoundingClientRect();
    setCatRect({
      x: rect.x,
      y: rect.y,
      z: rect.z,
      left: rect.left,
      width: rect.width,
      height: rect.height
    })
  }, [])
  useEffect(() => {
    element = ref2.current
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
  const { width, height } = catRect

  return (
    <>
      <div className="player" ref={ref2} >
        <div className="card-body">
          <h5 className="card-title">Day: {daysCount}/21</h5>
          <p className="card-text">
            <input ref={ref} className="checkbox-pull" type="checkbox" id="check3" />
            <label htmlFor="check3"><span></span>Сделано</label>
            <input className="checkbox-pull" type="checkbox" />
            <label ><img style={{ width: '20px', marginRight: '5px' }} src={question} />Мои успехи
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
      {
        [...Array(23)].map((e, i) =>
          <div
            key={i}
            className={
              `${(i !== 0 && i === id) ?
                'speech-bubble' : 'null'}`}
            style={{
              bottom: `${i * height + 300}px`,
              left: `${i * width / 1}px`

            }} >

            <p>{i === daysCount && items.label ?
              items.label :
              'Here your text'}</p>
            <button
              onClick={() => handleDelete()}
              type="button"
            >
              delete
            </button>
          </div>
        )}
    </>
  )
}


