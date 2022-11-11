/* eslint-disable react/no-unknown-property */
import { Canvas, Props } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";

interface SceneProps extends Props {
  children: React.ReactNode;
}

export default function Scene({ children, ...props }: SceneProps) {
  // Everything defined in here will persist between route changes, only children are swapped
  return (
    <Canvas {...props}>
      <directionalLight intensity={0.9} />
      <ambientLight intensity={0.75} />
      {children}
      <Preload all />
      <OrbitControls />
    </Canvas>
  );
}
