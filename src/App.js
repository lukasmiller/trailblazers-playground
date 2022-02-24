import React, {Suspense} from "react";
import { Canvas } from '@react-three/fiber'
import Beach from './Resource_Beach'
import Brick from './Resource_Brick'
import Desert from './Resource_Desert'
import Ore from './Resource_Ore'
import Wheat from './Resource_Wheat'
import Wood from './Resource_Wood'
import Wool from './Resource_Wool'
import Ocean from './Ocean'


function App() { 
    return (
      <Canvas camera={{ fov: 75, position: [0, 10, 10]}}>
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
          <Beach position={[-12, 0, 1]}/>
          <Brick position={[-8, 0, 1]}/>
          <Desert position={[-4, 0, 1]}/>
          <Ore position={[0, 0, 1]}/>
          <Wheat position={[4, 0, 1]}/>
          <Wood position={[8, 0, 1]}/>
          <Wool position={[12, 0, 1]}/>
          <Ocean />
        </Suspense>
      </Canvas>
    );
}

export default App;