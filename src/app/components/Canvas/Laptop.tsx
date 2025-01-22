"use client";

import React, { useState, useEffect, useRef } from "react";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

function Model({ scale, position }: { scale: number[]; position: number[] }) {
  const { scene } = useGLTF("/laptop.glb");
  const ref = useRef<THREE.Object3D>(null);

  return (
    <primitive ref={ref} object={scene} scale={scale} position={position} />
  );
}

useGLTF.preload("/laptop.glb");

function Laptop3dModel() {
  const [canvasSize, setCanvasSize] = useState({ width: 500, height: 450 });
  const [modelScale, setModelScale] = useState([0.18, 0.18, 0.18]);
  const [modelPosition, setModelPosition] = useState([0, -1.4, 0]);

  useEffect(() => {
    function handleResize() {
      const newWidth = window.innerWidth;

      if (newWidth < 700) {
        setCanvasSize({ width: 320, height: 400 }); 
        setModelScale([0.14, 0.14, 0.14]);
        setModelPosition([0, -1.1, 0]);
      } else {
        setCanvasSize({ width: 500, height: 450 });
        setModelScale([0.18, 0.18, 0.18]);
        setModelPosition([0, -1.4, 0]);
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Canvas
        shadows
        frameloop="demand"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          position: [-4, 5, 7],
          fov: 45,
          near: 0.1,
          far: 200,
        }}
        style={{
          height: `${canvasSize.height}px`,
          width: `${canvasSize.width}px`,
          touchAction: "none",
        }}
      >
        <color attach="background" args={["#060918"]} />
        <ambientLight intensity={1} />
        <directionalLight position={[2, 10, 5]} intensity={1} />
        <OrbitControls
          autoRotate
          autoRotateSpeed={2.5}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Model position={modelPosition} scale={modelScale} />
      </Canvas>
    </div>
  );
}

export default Laptop3dModel;
