import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import GltfModel from "./GltfModel";
import $ from 'jquery';
const ModelViewer = ({ modelPath, scale = 1, position = [0, 0, 0] }) => {
  function bounce(bouncingCount, speed) {
		var top = 200;
		var speedRatio = speed / top;
		var heightRatio = top / bouncingCount;

		for (var i = 1; i <= bouncingCount; i++) {
            
			$('#bouncing-ball').animate({
				'bottom' : top,
                'left':'+=60px'
			}, speed);
			$('#bouncing-ball').animate({
				'bottom' : 100
			}, speed / 2);
            top+=50;
			// top = top - (heightRatio);
			// speed = speedRatio * top;
		}
	}

	$("#bouncing-ball").click(function() {
		bounce(1, 500);
	});
  return (
    <Canvas>
      <ambientLight />
      <spotLight />
      <pointLight />
      <Suspense fallback={null}>
        <GltfModel modelPath={modelPath} scale={scale} position={position} />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
};

/*
const ModelViewer = ({ modelPath, scale = 40, position = [0, 0, 0] }) => {
  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Suspense fallback={null}>
        <GltfModel modelPath={modelPath} scale={scale} position={position} />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
};
*/

export default ModelViewer;