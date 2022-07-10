import React, { useRef, useState } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const GltfModel = ({ modelPath, scale = 40, position = [0, 0, 0] }) => {
  const ref = useRef();
  const gltf = useLoader(GLTFLoader, modelPath);
  const [hovered, hover] = useState([0,0,5]);
  // useFrame((state, delta) => (ref.current.rotation.y += 0.007));
  const jump = ()=>{ 

  }
  return (
    <>
      <primitive
        ref={ref}
        object={gltf.scene}
        onClick = {jump}
        position={position}
        scale={scale * 2}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}
      />
    </>
  );
};

export default GltfModel;
/*
 <primitive
        ref={ref}
        object={gltf.scene}
        position={position}
        scale={hovered ? scale * 1.2 : scale}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}*/