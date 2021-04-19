/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/kick.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    actions.kick.play()
  }, [])
  const stopAnimation = () => {
    console.log(props)
  }
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={[0.4, 0.4, 0.4]} position={[-50,-50,0]}>
        <primitive object={nodes.mixamorigHips} />
        <skinnedMesh geometry={nodes.Ch24.geometry} material={materials.Ch24_Body} skeleton={nodes.Ch24.skeleton} />
      </group>
    </group>
  )
}

useGLTF.preload('/kick.glb')
