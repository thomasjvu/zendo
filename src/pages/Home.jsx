import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import MeditationRoom from '../components/MeditationRoom'


function Home() {
  return (
    <div>
            <Canvas>
                <Suspense fallback={null}>
                      <ambientLight intensity={0.1} />
                    <MeditationRoom />
                    <OrbitControls />
                    {/* <Environment preset="sunset" background /> */}
                </Suspense>
            </Canvas>
    </div>
  )
}

export default Home
