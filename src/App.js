
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
// import  Scene  from './components/homepage/Scene';
import './App.css';
import { MainPage } from './components/main/MainPage';


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
      <MainPage/>
    </>
  );
}

export default App;
