"use client";

import { useEffect, useState } from "react";
import styles from "@/app/styles/components/ChangeMode.module.scss";

export default function ChangeMode() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const body = document.body;
    body.classList.remove(isDark ? "light" : "dark");
    body.classList.add(isDark ? "dark" : "light");
  }, [isDark]);

  const toggleMode = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className={styles['mode-container']}>
      <button type="button" className={styles['mode']} onClick={toggleMode}>
        <span className="blind">모드 변경</span>
      </button>
    </div>
  );
}
