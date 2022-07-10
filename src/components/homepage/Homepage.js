import React from 'react'
import './home.css'
import { Stair } from '../stair/Stair'
import ModelViewer from '../Three/ModelViewer.jsx'
import { Chibi } from '../chibi/Chibi.jsx'

import {useRef} from 'react'
export const Homepage = () => {
  const stairsRef = useRef(null)

  return (
    <>
    <Stair
     stairsRef={stairsRef}
    
    />
    <Chibi
    stairsRef={stairsRef}
    />
    </>
  )
}

export default Homepage;