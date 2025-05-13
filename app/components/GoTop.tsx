"use client";

import { useEffect, useState } from "react";
import styles from "@/app/styles/components/GoTop.module.scss";

export default function GoTop() {
  const [isVisible, setIsVisible] = useState(false);

  function handleGoTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY > 200);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`${styles['go-top-container']} ${isVisible ? styles['active'] : ''}`}>
      <button type="button" className={styles['go-top']} onClick={handleGoTop}>
        Go Top
      </button>
    </div>
  );
}
