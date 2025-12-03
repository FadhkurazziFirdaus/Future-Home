import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { House } from './House.jsx'
import { Appliance } from './Appliances.jsx'
import { UI } from './UI.jsx'
import './App.css'

function App() {
  const [placedAppliances, setPlacedAppliances] = useState([]);

  const handleAddAppliance = (applianceType) => {
    const newAppliance = {
      id: Date.now(),
      type: applianceType,
      position: [Math.random() * 4 - 2, 0, Math.random() * 4 - 2],
    };
    setPlacedAppliances([...placedAppliances, newAppliance]);
  };

  return (
    <>
      <UI onAddAppliance={handleAddAppliance} placedAppliances={placedAppliances} />
      <Canvas camera={{ position: [0, 5, 15] }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <House />
        {placedAppliances.map((appliance) => (
          <Appliance key={appliance.id} type={appliance.type} position={appliance.position} />
        ))}
        <OrbitControls />
      </Canvas>
    </>
  )
}

export default App