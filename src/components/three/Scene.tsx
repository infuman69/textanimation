"use client";
import React, { useRef } from "react";
import { extend } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
import { Josefin_Sans } from "next/font/google";
import {
  useGLTF,
  useTexture,
  Center,
  Decal,
  Text,
  Text3D,
  OrbitControls,
} from "@react-three/drei";

// const josefin=Josefin_Sans({
//   subsets: ["latin"],
// });

export default function Scene({ margin = 0.5 }) {
  return (
    <Center rotation={[-0.5, -0.25, 0]}>
    <Text3D
      curveSegments={32}
      bevelEnabled
      bevelSize={0.04}
      bevelThickness={0.1}
      height={0.5}
      lineHeight={0.5}
      letterSpacing={-0.06}
      size={1.5}
      font="/Inter_Bold.json"
    >
      {`hello\nworld`}
      <meshNormalMaterial />
    </Text3D>
    </Center>
  );
}
