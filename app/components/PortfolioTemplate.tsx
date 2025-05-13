import styles from "@/app/styles/portfolio/portfolio.module.scss";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface PortfolioProps {
  title: string;
  thumbnailWebp: { src: string };
  thumbnailJpg: StaticImageData | string;
  period: string;
  percentage: string;
  stack: string;
  description: string;
  link: string;
  detailImages: {
    webp: { src: string };
    jpg: StaticImageData | string;
  }[];
}

export default function PortfolioTemplate({
    title,
    thumbnailWebp,
    thumbnailJpg,
    period,
    percentage,
    stack,
    description,
    link,
    detailImages,
  }: PortfolioProps) {
  return (
    <section className={styles['portfolio-section']}>
      <h3 className="section-title">{title}</h3>
      <div className={styles['portfolio-summary-container']}>
        <picture>
          <source srcSet={thumbnailWebp.src} type="image/webp" />
          <Image
            src={thumbnailJpg}
            alt={title}
            className={styles['portfolio-image']}
          />
        </picture>

        <div className={styles['portfolio-summary-text-container']}>
          <dl className={styles['portfolio-info-list']}>
            <div className={styles['portfolio-info-item']}>
              <dt className={styles['portfolio-info-title']}>기간</dt>
              <dd className={styles['portfolio-info-desc']}>{period}</dd>
            </div>
            <div className={styles['portfolio-info-item']}>
              <dt className={styles['portfolio-info-title']}>기여도</dt>
              <dd className={styles['portfolio-info-desc']}>{percentage}</dd>
            </div>
            <div className={`${styles['portfolio-info-item']} ${styles['portfolio-info-stack']}`}>
              <dt className={styles['portfolio-info-title']}>기술스택</dt>
              <dd className={styles['portfolio-info-desc']}>{stack}</dd>
            </div>
          </dl>
          <p className={styles['portfolio-desc']}>{description}</p>
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles['portfolio-link']}
          >
            Go Site
          </Link>
        </div>
      </div>

      {detailImages?.length > 0 && (
        <div className={styles['portfolio-detail-container']}>
          <h4 className={styles['portfolio-detail-title']}>detail</h4>
          {detailImages.map((img, index) => (
            <div className={styles['portfolio-image-detail-container']} key={index}>
              <picture>
                <source srcSet={img.webp.src} type="image/webp" />
                <Image
                  src={img.jpg}
                  alt={`${title} 전체 화면 ${index + 1}`}
                  className={styles['portfolio-image-detail']}
                />
              </picture>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
