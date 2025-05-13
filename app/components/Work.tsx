"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import styles from "@/app/styles/components/Work.module.scss";
import { workList } from "@/app/assets/data/datas";
import Link from "next/link";

export default function Work() {
  useEffect(() => {
    const savedScrollY = sessionStorage.getItem("work-scroll");
    if (savedScrollY) {
      window.scrollTo(0, parseInt(savedScrollY, 10));
      sessionStorage.removeItem("work-scroll");
    }
  }, []);

  const getElementTop = useCallback((el: HTMLElement): number => {
    let top = 0;
    let current: HTMLElement | null = el;
    while (current && current.tagName.toLowerCase() !== "body") {
      top += current.offsetTop;
      current = current.offsetParent as HTMLElement;
    }
    return top;
  }, []);

  const getViewportHeight = useCallback((): number => {
    return window.innerHeight || document.documentElement.clientHeight || 0;
  }, []);

  const getScrollY = useCallback((): number => {
    return (
      window.pageYOffset ||
      Math.max(document.documentElement.scrollTop, document.body.scrollTop)
    );
  }, []);

  const isVisible = useCallback(
    (el: HTMLElement, mode: "visible" | "above" = "visible"): boolean => {
      const viewportHeight = getViewportHeight();
      const scrollTop = getScrollY();
      const elementTop = getElementTop(el);
      const elementHeight = el.offsetHeight;

      if (mode === "visible") {
        return elementTop < viewportHeight + scrollTop && elementTop > scrollTop - elementHeight;
      } else if (mode === "above") {
        return elementTop < viewportHeight + scrollTop;
      }

      return false;
    },
    [getElementTop, getScrollY, getViewportHeight]
  );

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll<HTMLElement>("[data-animate-target]");
      sections.forEach((el) => {
        if (isVisible(el)) {
          el.classList.add(styles["animate"]);
        } else {
          el.classList.remove(styles["animate"]);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);

  return (
    <section className="section" id="work">
      <h2 className="section-title">Work</h2>
      <ul className={styles["work-detail-list"]}>
        {workList.map((work) => (
          <li
            key={work.id}
            className={styles["work-detail-item"]}
            data-animate-target
          >
            <Link
              href={work.link}
              className={styles["work-detail-link"]}
              onClick={() => {
                sessionStorage.setItem("work-scroll", String(window.scrollY));
              }}
            >
              <div className={styles["work-detail-img-wrap"]}>
                <Image
                  src={work.thumbnailWebp || work.thumbnailJpg}
                  alt={work.title}
                  className={styles["work-detail-img"]}
                />
                <div className={styles["work-detail-overlay"]}></div>
              </div>
              <div className={styles["work-detail-title-wrap"]}>
                <h3 className={styles["work-detail-title"]}>{work.title}</h3>
                <span className={styles["work-detail-term"]}>{work.term}</span>
                <p className={styles["work-detail-text"]}>{work.description}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
