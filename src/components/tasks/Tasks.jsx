import React from 'react'
import './tasks.scss'
import { useState, useEffect, useRef } from 'react'
import { v4 as myId } from 'uuid'
import { TaskContext } from '../Context'
import { useContext } from 'react'
import question from '../../images/question-mark.png'
import axios from 'axios'
import { ModalClass } from '../modal/Modal'

export const Tasks = (props) => {
  const { isExpired, stairsRef, id, daysCount } = props
  const [itemToDo, setItemToDo] = useState('')
  const ref = useRef(null)
  const ref2 = useRef(null)
  const { setTasksDone } = useContext(TaskContext)
  const [tasks, setTasks] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editId, setEditID] = useState(0)
  const [catRect, setCatRect] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  })
  const addItem = () => {
    if (isEditing) {
      axios
        .put(`http://localhost:5000/tasks/${editId}`, {
          content: itemToDo,
        })
        .then((response) => {
          setTasks([...tasks, response.data])
        })
    } else {
      axios
        .post('http://localhost:5000/tasks', {
          content: itemToDo,
        })
        .then((response) => {
          setTasks([...tasks, response.data])
        })
    }
    setItemToDo('')
    setTasksDone(ref.current.checked)
  }

  const edit = (id) => {
    const specificItem = tasks.find((item) => {
      return item._id === id
    })
    setIsEditing(true)
    setEditID(id)
    setItemToDo(specificItem.content)
  }

  useEffect(() => {
    axios.get('http://localhost:5000/tasks').then((response) => {
      setTasks(response.data)
    })
  }, [tasks])
  var element
  useEffect(() => {
    const div = stairsRef.current
    const rect = div.getBoundingClientRect()
    setCatRect({
      x: rect.x,
      y: rect.y,
      z: rect.z,
      left: rect.left,
      width: rect.width,
      height: rect.height,
    })
  }, [])
  useEffect(() => {
    element = ref2.current
    function draggable(element) {
      var isMouseDown = false
      var mouseX
      var mouseY
      var elementX = 0
      var elementY = 0
      element.addEventListener('mousedown', onMouseDown)
      function onMouseDown(event) {
        mouseX = event.clientX
        mouseY = event.clientY
        isMouseDown = true
      }

      document.addEventListener('mouseup', onMouseUp)
      function onMouseUp(event) {
        isMouseDown = false
        elementX = parseInt(element.style.left) || 0
        elementY = parseInt(element.style.top) || 0
      }
      document.addEventListener('mousemove', onMouseMove)
      function onMouseMove(event) {
        if (!isMouseDown) return
        var deltaX = event.clientX - mouseX
        var deltaY = event.clientY - mouseY
        element.style.left = elementX + deltaX + 'px'
        element.style.top = elementY + deltaY + 'px'
      }
    }
    draggable(element)
  })
  const { width, height } = catRect
  // if (isExpired) {
  //   ref.current.checked = false
  // }
  return (
    <>
      <div className="player" ref={ref2}>
        <div className="card-body">
          <h5 className="card-title">Day: {daysCount}/21</h5>
          <p className="card-text">
            <input
              ref={ref}
              className="checkbox-pull"
              type="checkbox"
              id="check3"
            />
            <label htmlFor="check3">
              <span></span>Done
            </label>
            <input className="checkbox-pull" type="checkbox" />
            <label>
            💜
              Мои успехи
              <input
                type="text"
                className="form-control"
                value={itemToDo}
                onChange={(e) => setItemToDo(e.target.value)}
              />
            </label>
          </p>
          <button href="#" className="button" onClick={() => addItem()}>
            Submit
          </button>
        </div>
      </div>
      {[...Array(23)].map((e, i) => (
        <div
          key={i}
          className={`${i !== 0 && i === id ? 'speech-bubble' : 'null'}`}
          style={{
            bottom: `${i * height + 80}px`,
            left: `${(i * width-300)}px`,
          }}
        >
          <p>
            {i === id && tasks[i - 1] ? tasks[i - 1].content : itemToDo}
          </p>
          <button type="button" onClick={() => edit(tasks[i - 1]._id)}>
            edit
          </button>
        </div>
      ))}
    </>
  )
}
