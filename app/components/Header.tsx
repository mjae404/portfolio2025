"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { headerMenu } from "../assets/data/datas";
import Link from "next/link";
import styles from "@/app/styles/components/Header.module.scss";
import GoHome from "@/app/components/GoHome";

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isSubPage = pathname !== "/";

  useEffect(() => {
    if (isSubPage) {
      setIsActive(true);
      return;
    }

    const handleScroll = () => {
      setIsActive(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isSubPage]);

  useEffect(() => {
    const preventScroll = (e: TouchEvent) => {
      e.preventDefault();
    };

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.addEventListener("touchmove", preventScroll, { passive: false });
    } else {
      document.body.style.overflow = "";
      document.body.removeEventListener("touchmove", preventScroll);
    }

    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      document.body.style.overflow = "";
      document.body.removeEventListener("touchmove", preventScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`${styles.header} ${isActive ? styles.active : ""}`}>
      <div className={styles["header-inner"]}>
        <h1 className={styles["header-title"]}>
          <Link className={styles["header-title-link"]} href="/">MJAEDOT</Link>
        </h1>
        <nav className={styles["header-nav"]}>
          {isSubPage && <GoHome />}
          {!isSubPage && (
            <>
              <button
                type="button"
                className={styles["header-nav-menu-open-button"]}
                onClick={openMenu}
              >
                <span className="blind">메뉴 열기</span>
              </button>
              <ul className={`${styles["header-nav-list"]} ${ isMenuOpen ? styles.active : ""}`}>
                {headerMenu.map(({ id, title, link }) => (
                  <li key={id} className={styles["header-nav-item"]}>
                    <Link
                      href={link}
                      className={styles["header-nav-link"]}
                      onClick={closeMenu}
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>

              {
                isMenuOpen &&
                <button
                  type="button"
                  className={styles["header-nav-menu-close-button"]}
                  onClick={closeMenu}
                >
                  <span className="blind">메뉴 닫기</span>
                </button>
              }
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
