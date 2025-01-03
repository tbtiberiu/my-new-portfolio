'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import { Mesh } from 'three'
import Sphere from './sphere'

const Background = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="absolute top-0 w-full h-[250vh] -z-10 hidden lg:block">
      <Canvas
        camera={{
          position: [0, 0, 10],
          fov: 50,
        }}
      >
        <ambientLight intensity={1.5} />
        <directionalLight position={[-5, 5, 10]} intensity={2} />
        <Spheres scrollY={scrollY} />
      </Canvas>
    </div>
  )
}

const Spheres: React.FC<{ scrollY: number }> = ({ scrollY }) => {
  const groupRef = useRef<Mesh>(null)

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.position.y = scrollY * 0.005
    }
  })

  return (
    <group ref={groupRef}>
      <Sphere position={[3.7, 4.8, 0]} scale={1.3} />
      <Sphere position={[1, 0, 0]} scale={1.7} />
      <Sphere position={[4, -6, 0]} scale={3} />
    </group>
  )
}

export default Background
