
import React from 'react'
import './tasks.scss'
import { useState, useEffect, useRef } from 'react'
import { v4 as myId } from 'uuid'
import { TaskContext } from '../Context'
import { useContext } from 'react'
import question from '../../images/question-mark.png'
import { animated, useSpring } from "react-spring";



export const Tasks = ({ stairsRef,isClicked }) => {
  
  const [itemToDo, setItemToDo] = useState("")
  const ref = useRef(null);
  const ref2 = useRef(null);
  const [items, setItems] = useState({})
  const {setIsClicked}=useContext(TaskContext)
  const { setTasksDone } = useContext(TaskContext)
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
    const newItem = { key: myId(), label: itemToDo }
    setItems(newItem)
    setItemToDo("")
    setTasksDone(ref.current.checked)
  }
  const handleDelete = () => {
    setIsClicked(false)
  };
  var element;
  useEffect(()=>{
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
  },[])
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
  const { x, y, width, height, left, z } = catRect

  let days=2

  const springProps = useSpring({
    from: {width: '100px', height: '100px', position: 'relative', bottom: height * days + 30 + 'px', left: width *days+width/2 + 'px' },
    to: {width: '100px', height: '100px', position: 'relative', bottom: (height * days)-height +'px', left: width/2  + 'px' },
  });

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
      {
            [...Array(3)].map((e, i) => 
            (i!==0 && isClicked) ? 
            <div className='speech-bubble' style={{marginLeft:`${i*-30}px`}}>
              {items.label ? items.label : 'Here your text'}
              <br/>
              <div style={{marginTop:'50%'}}>
              <button
                onClick={() => handleDelete()}
                type="button"
              >
                delete
              </button>
              </div> 
            </div>
        : ''
            )}

    </>
  )
}


