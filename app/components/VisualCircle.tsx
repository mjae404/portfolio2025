"use client";

import { useEffect, useRef } from "react";
import styles from "@/app/styles/components/VisualCircle.module.scss";

export default function VisualCircle() {
  const circlesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const names = ['x1', 'x2', 'y1', 'y2'];

    const generateRandomNumber = () => Math.floor(Math.random() * names.length);

    for (let i = 0; i < 50; i++) {
      const name = names[generateRandomNumber()];

      const circleContainer = document.createElement('div');
      circleContainer.classList.add(styles['circle-container'], `c${i}`);

      const circle = document.createElement('div');
      circle.classList.add(styles.circle, `i${i}`);

      circleContainer.appendChild(circle);
      circlesContainerRef.current?.appendChild(circleContainer);

      circleContainer.style.animation = `${styles.z} 5s .${i}s linear infinite`;
      circle.style.animation = `${styles[name]} 7.5s .${i}s linear infinite`;
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.circles} ref={circlesContainerRef}></div>
    </div>
  );
}
