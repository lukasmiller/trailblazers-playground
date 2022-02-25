/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Wood({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('./Models/Resource_Wood.gltf')  
  // Hold state for hovered event
  const [hovered, hover] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (
    group.current.rotation.y += 0.01))
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh 
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}
        scale={hovered ? 1.5 : 1}
        geometry={nodes.Wood.geometry} 
        material={materials['Material.001']}
        rotation={[Math.PI / 2, 0, 0]} 
      />
    </group>
  )
}

useGLTF.preload('./Models/Resource_Wood.gltf')
