import styles from "@/app/styles/components/VisualWave.module.scss";

export default function VisualWave() {
  return (
    <div className={`${styles['wave-wrapper']} ${styles['wave-animation']}`}>
      <div className={`${styles['wave-wrapper-inner']} ${styles['bg-top']}`}>
        <div className={`${styles.wave} ${styles['wave-top']}`}></div>
      </div>
      <div className={`${styles['wave-wrapper-inner']} ${styles['bg-middle']}`}>
        <div className={`${styles.wave} ${styles['wave-middle']}`}></div>
      </div>
      <div className={`${styles['wave-wrapper-inner']} ${styles['bg-bottom']}`}>
        <div className={`${styles.wave} ${styles['wave-bottom']}`}></div>
      </div>
    </div>
  );
}
