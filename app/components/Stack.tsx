import styles from "@/app/styles/components/Stack.module.scss";
import { stackList } from "@/app/assets/data/datas";
import Image from "next/image";
import visual from "@/app/assets/images/visual.jpg";
import StackInfoItem from "@/app/components/StackInfoItem";

export default function Stack() {
  return (
    <section className="section" id="stack">
      <h2 className="section-title">Stack</h2>
      <div className={styles['stack-container']}>
        <dl className={styles['stack-list']}>
          {stackList.map(({ id, title, points, icons }) => (
            <StackInfoItem key={id} title={title} points={points} icons={icons} />
          ))}
        </dl>
      </div>
      <div className={styles['stack-visual-container']}>
        <Image src={visual} alt="" className={styles['stack-visual-image']} />
      </div>
    </section>
  );
}
