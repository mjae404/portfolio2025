import styles from "../styles/components/AboutInfoItem.module.scss";

interface InfoItem {
  title: string;
  description: string;
  id: string;
}

interface AboutInfoItemProps {
  title: string;
  items: InfoItem[];
}

export default function AboutInfoItem({ title, items }: AboutInfoItemProps) {
  return (
    <div className={styles['about-info-item']}>
      <dt className={styles['about-info-title']}>{title}</dt>
      {items.map(({ title, description, id }) => (
        <dd className={styles['about-info-desc']} key={id}>
          <strong className={styles['about-info-desc-name']}>{title}</strong>
          <span className={styles['about-info-desc-details']}>({description})</span>
        </dd>
      ))}
    </div>
  );
}
