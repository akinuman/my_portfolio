import { Html, useGLTF } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/header";
import Model from "./Kick";
import { Section } from "./components/section";




const HTMLContent = () => {
  return (
    <Section factor={1.5} offset={1}>
      <group position={[0, 250, 0]}>
        <Html fullscreen>
          <div className="stopper">Stop</div>
        </Html>
      </group>
    </Section>
  );
};



function App() {
  return (
    <>
      <Header />
      <Canvas colorManagment camera={{ position: [0, 0, 120], fov: 70 }}>
        <ambientLight />
          <Suspense fallback={null}>
           <Model stopMe={stopMe}/>
          </Suspense>
          <HTMLContent />
      </Canvas>
    </>
  );
}

export default App;
