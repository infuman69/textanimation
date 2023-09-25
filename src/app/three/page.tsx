"use client";
import Scene from "@/components/three/Scene";
import React, { useState, useRef } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import {
  useGLTF,
  useTexture,
  Center,
  Decal,
  Text3D,
  OrbitControls,
} from "@react-three/drei";

export default function Three() {
    
  return (
    <div>
      <h1>Three</h1>
      <Canvas orthographic camera={{ position: [0, 0, 50], zoom: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} />
        <Scene />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}
