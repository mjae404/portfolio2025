import styles from "@/app/styles/components/Footer.module.scss";

export default function Footer() {
  function getCurrentYear() {
    return new Date().getFullYear();
  }

  return (
    <footer className={styles['footer']}>
      <small className={styles["footer-copyright"]}>© Copyright 2021 - {getCurrentYear()} Minjee Kim.</small>
    </footer>
  );
}
