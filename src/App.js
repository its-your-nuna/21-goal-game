
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import  Scene  from './components/homepage/Scene';
import './App.css';

import Homepage from './components/homepage/Homepage'

function App() {
  return (
    <>
    {/* <Canvas>
      <ambientLight/>
      <OrbitControls/>
      <Suspense fallback={null}>
          <Scene/>
      </Suspense>
    </Canvas> */}
      <Homepage/>
    </>
  );
}

export default App;
