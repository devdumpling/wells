import styles from "./HomePage.module.css";
import { Alegreya } from "next/font/google";

const alegreya = Alegreya({ subsets: ["latin"] });

export default function HomePage() {
  return (
    <div className={`${styles.container} ${alegreya.className}`}>
      <h1 className={`${styles.title}`}>Devon Wells</h1>
      <p className={styles.intro}>
        Software Engineer | Dad | Plant Enthusiast
      </p>    
    </div>
  );
}
