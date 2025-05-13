import styles from "@/app/styles/components/GoHome.module.scss";
import Link from "next/link";

export default function GoHome() {
  return (
    <div className={styles['go-home-container']}>
      <Link href="/" className={styles['go-home']}>Go Home</Link>
    </div>
  );
}
