import Image, { StaticImageData } from "next/image";
import styles from "@/app/styles/components/Stack.module.scss";

interface IconItem {
  name: string;
  src: StaticImageData;
}

interface StackInfoItemProps {
  title: string;
  points: string[];
  icons: IconItem[];
}

export default function StackInfoItem({ title, points, icons }: StackInfoItemProps) {
  return (
    <div className={styles['stack-item']}>
      <dt className={styles['stack-title']}>{title}</dt>
      {points.map((point, index) => (
        <dd className={styles['stack-desc']} key={index}>
          {point}
        </dd>
      ))}
      {icons.map(({ name, src }, index) => (
        <dd className={styles['stack-icon']} key={index}>
          <Image src={src} alt={name}  className={styles['stack-icon-image']} />
        </dd>
      ))}
    </div>
  );
}
