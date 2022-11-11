/* eslint-disable react/no-unknown-property */
import { container } from "src/styles/app.css";
import Link from "next/link";
import Scene from "src/components/Scene";

export default function Main() {
  return (
    <div className={container}>
      <h1>Devon Wells</h1>
      <Link href="/blog">blog.</Link>
      <Link href="https://github.com/devdumpling">code.</Link>
      <Scene>
        <mesh>
          <boxBufferGeometry />
          <meshLambertMaterial attach="material" color={"gold"} />
        </mesh>
      </Scene>
    </div>
  );
}
