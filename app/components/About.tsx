import Image from "next/image";
import { skillList, aboutList } from "@/app/assets/data/datas";
import styles from "@/app/styles/components/About.module.scss";
import personJpg from "@/app/assets/images/person.jpg";
import AboutInfoItem from "@/app/components/AboutInfoItem";

export default function About() {
  return (
    <section className="section" id="about">
      <h2 className="section-title">About</h2>
      <div className={styles['about-container']}>
        <div className={styles['about-image-container']}>
          <Image src={personJpg} alt="Person" className={styles['about-image']} />
        </div>
        <div className={styles['about-text-container']}>
          <strong className={styles['about-text-title']}>Minjee Kim</strong>
          <p className={styles['about-text-description']}>
            저는 브랜드와 가치를 만드는 것을 좋아하는 사람입니다. 그래서 제가 할 수 있는 것에 안주하지 않고 새로운 것을 도전하려 노력합니다. 외적인 아름다움도 중요하지만, 내적인 튼튼함이 없다면 무의미하다고 생각합니다. 웹표준, 웹접근성에 관심이 있으며 현재에도 지속적으로 학습을 병행하면서 앞으로 나아가는 중입니다. 깃허브 블로그를 운영하며 공부한 것은 블로그에 업로드하고 있습니다.
          </p>
          <ul className={styles['about-stack-list']}>
            {skillList.map((item) => (
              <li className={styles['about-stack-item']} key={item}>
                {item}
              </li>
            ))}
          </ul>
          <dl className={styles['about-info-list']}>
            {aboutList.map(({ id, title, items }) => (
              <AboutInfoItem key={id} title={title} items={items} />
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
