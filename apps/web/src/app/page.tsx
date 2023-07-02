import styles from "./HomePage.module.css";
import { Alegreya } from "next/font/google";

const alegreya = Alegreya({ subsets: ["latin"] });

export default function HomePage() {
  return (
    <div className={alegreya.className}>
      <h1>Devon Wells</h1>
      <p>Software Engineer | Dad | Plant Enthusiast</p>
    </div>
  );
}
