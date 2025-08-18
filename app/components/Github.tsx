"use client";

import { useEffect, useState } from "react";
import styles from "@/app/styles/components/Github.module.scss";

export default function Github() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY > 200);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`${styles['github-container']} ${isVisible ? styles['active'] : ''}`}>
      <a className={styles['github-link']} href="https://github.com/mjae404" target="_blank" rel="noopener noreferrer">
        <span className="blind">깃허브 바로가기</span>
      </a>
    </div>
  );
}
