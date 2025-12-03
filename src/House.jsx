import React from 'react';

function Wall(props) {
  return (
    <mesh {...props}>
      <boxGeometry args={[10, 5, 0.1]} />
      <meshStandardMaterial color="grey" />
    </mesh>
  );
}

function Floor(props) {
  return (
    <mesh {...props}>
      <boxGeometry args={[10, 0.1, 10]} />
      <meshStandardMaterial color="white" />
    </mesh>
  );
}

export function House() {
  return (
    <group>
      <Floor position={[0, -2.5, 0]} />
      <Wall position={[0, 0, -5]} />
      <Wall position={[0, 0, 5]} />
      <Wall position={[-5, 0, 0]} rotation={[0, Math.PI / 2, 0]} />
      <Wall position={[5, 0, 0]} rotation={[0, Math.PI / 2, 0]} />
    </group>
  );
}
