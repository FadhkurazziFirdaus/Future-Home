import React from 'react';
import { Box, Sphere, Cylinder } from '@react-three/drei';

export const APPLIANCE_DATA = {
  'incandescent_light': {
    name: 'Incandescent Bulb',
    energy: 100, // Watts
    Component: (props) => (
      <mesh {...props}>
        <Sphere args={[0.2, 16, 16]}>
          <meshStandardMaterial color="yellow" emissive="yellow" emissiveIntensity={2} />
        </Sphere>
      </mesh>
    ),
  },
  'led_light': {
    name: 'LED Bulb',
    energy: 10, // Watts
    Component: (props) => (
      <mesh {...props}>
        <Sphere args={[0.2, 16, 16]}>
          <meshStandardMaterial color="white" emissive="white" emissiveIntensity={1} />
        </Sphere>
      </mesh>
    ),
  },
  'refrigerator': {
    name: 'Refrigerator',
    energy: 200, // Watts
    Component: (props) => (
      <Box args={[1, 2, 1]} {...props}>
        <meshStandardMaterial color="lightblue" />
      </Box>
    ),
  },
  'pv_panel': {
    name: 'PV Panel',
    energy: -250, // Watts (produces energy)
    Component: (props) => (
      <Box args={[2, 0.1, 1]} {...props}>
        <meshStandardMaterial color="black" />
      </Box>
    ),
  },
    'fan': {
    name: 'Fan',
    energy: 75, // Watts
    Component: (props) => (
      <mesh {...props}>
        <Cylinder args={[0.5, 0.5, 0.1, 4]} >
            <meshStandardMaterial color="blue" />
        </Cylinder>
      </mesh>
    ),
  },
    'aircond': {
    name: 'Air Conditioner',
    energy: 1500, // Watts
    Component: (props) => (
      <Box args={[1.5, 1, 0.5]} {...props}>
        <meshStandardMaterial color="ivory" />
      </Box>
    ),
  },
    'iron': {
    name: 'Iron',
    energy: 1200, // Watts
    Component: (props) => (
      <Box args={[0.3, 0.5, 0.3]} {...props}>
        <meshStandardMaterial color="gray" />
      </Box>
    ),
  },
    'microwave': {
    name: 'Microwave',
    energy: 1100, // Watts
    Component: (props) => (
       <Box args={[0.8, 0.5, 0.6]} {...props}>
        <meshStandardMaterial color="darkgray" />
      </Box>
    ),
  },
    'oven': {
    name: 'Oven',
    energy: 2400, // Watts
    Component: (props) => (
      <Box args={[1, 1, 1]} {...props}>
        <meshStandardMaterial color="black" />
      </Box>
    ),
  },
};

export function Appliance({ type, ...props }) {
  const { Component } = APPLIANCE_DATA[type];
  return <Component {...props} />;
}
