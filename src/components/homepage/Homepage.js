import React from 'react'
import data from './data.js'
import './home.css'
import { Stair } from '../stair/Stair'
import ModelViewer from '../ModelViewer.jsx'

export const Homepage = () => {
  return (
    <>
    <Stair/>
    <ModelViewer className='chibi'  modelPath={"./scene.gltf"} />
    </>
  )
}

export default Homepage;