import VisualCircle from "@/app/components/VisualCircle";
import VisualWave from "@/app/components/VisualWave";
import styles from "@/app/styles/components/Visual.module.scss";

export default function Visual() {
  return (
    <div className={styles['visual-container']}>
      <div className={styles['visual']}>
        <div className={styles['film']}>
          <VisualCircle/>
          <div className={styles['effect']}>
            <div className={styles['grain']}></div>
          </div>
          <span className={styles['visual-text']}>MJAEDOT</span>
        </div>
      </div>
      <VisualWave />
    </div>
  );
}
