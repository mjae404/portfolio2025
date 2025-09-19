import html from "@/app/assets/icons/stack/icon-html.svg";
import css from "@/app/assets/icons/stack/icon-css.svg";
import react from "@/app/assets/icons/stack/icon-react.svg";
import storybook from "@/app/assets/icons/stack/icon-storybook.svg";
import scss from "@/app/assets/icons/stack/icon-scss.svg";
import photoshop from "@/app/assets/icons/stack/icon-photoshop.svg";
import illustrator from "@/app/assets/icons/stack/icon-illustrator.svg";
import figma from "@/app/assets/icons/stack/icon-figma.svg";
import zeplin from "@/app/assets/icons/stack/icon-zeplin.svg";
import vscode from "@/app/assets/icons/stack/icon-vscode.svg";
import git from "@/app/assets/icons/stack/icon-git.svg";
import gulp from "@/app/assets/icons/stack/icon-gulp.svg";
import jira from "@/app/assets/icons/stack/icon-jira.svg";
import confluence from "@/app/assets/icons/stack/icon-confluence.svg";

import workWaveClinicWebp from "@/app/assets/images/portfolios/waveclinic.webp";
import workWaveClinicJpg from "@/app/assets/images/portfolios/waveclinic.jpg";
import workWeddingWebp from "@/app/assets/images/portfolios/wedding.webp";
import workWeddingJpg from "@/app/assets/images/portfolios/wedding.jpg";
import workPortfolio2024Webp from "@/app/assets/images/portfolios/portfolio2024.webp";
import workPortfolio2024Jpg from "@/app/assets/images/portfolios/portfolio2024.jpg";
import workPortfolio2022Webp from "@/app/assets/images/portfolios/portfolio2022.webp";
import workPortfolio2022Jpg from "@/app/assets/images/portfolios/portfolio2022.jpg";
import workPortfolio2021Webp from "@/app/assets/images/portfolios/portfolio2021.webp";
import workPortfolio2021Jpg from "@/app/assets/images/portfolios/portfolio2021.jpg";
import workMarkupGuideWebp from "@/app/assets/images/portfolios/markup_guide.webp";
import workMarkupGuideJpg from "@/app/assets/images/portfolios/markup_guide.jpg";
import workTargetMarketingWebp from "@/app/assets/images/portfolios/targetmarketing.webp";
import workTargetMarketingJpg from "@/app/assets/images/portfolios/targetmarketing.jpg";
import workXeBoardWebp from "@/app/assets/images/portfolios/xe01.webp";
import workXeBoardJpg from "@/app/assets/images/portfolios/xe01.jpg";
import workTonyryuWebp from "@/app/assets/images/portfolios/tonyryu01.webp";
import workTonyryuJpg from "@/app/assets/images/portfolios/tonyryu01.jpg";
import workUniuniWebp from "@/app/assets/images/portfolios/uniuni.webp";
import workUniuniJpg from "@/app/assets/images/portfolios/uniuni.jpg";

const headerMenu = [
  {
    id: "about",
    title: "About",
    link: "#about"
  },
  {
    id: "stack",
    title: "Stack",
    link: "#stack"
  },
  {
    id: "work",
    title: "Work",
    link: "#work"
  },
  {
    id: "contact",
    title: "Contact",
    link: "#contact"
  }
]

const skillList = [
  "html", "css", "scss", "react", "storybook", "git", "jira", "confluence", "gulp", "photoshop", "illustrator"
]

const aboutList = [
  {
    id: "aboutCareerList",
    title: "경력",
    items: [
      {
        id: "careerItem01",
        title: "TmaxCloud - CL연구2본부 CL2-2-2팀 UX 매니저",
        description: "2024.06 - 2024.10",
      },
      {
        id: "careerItem02",
        title: "휴머스온 - 프런트엔드개발파트 퍼블리셔",
        description: "2022.11 - 2023.12",
      },
      {
        id: "careerItem03",
        title: "티몬 - 마크업 개발팀 마크업 개발자",
        description: "2021.02 - 2022.06",
      },
      {
        id: "careerItem04",
        title: "엑스이허브 - UI개발팀 퍼블리셔",
        description: "2020.03 - 2021.01",
      },
    ],
  },
  {
    id: "aboutLicenseList",
    title: "자격증",
    items: [
      {
        id: "licenseItem01",
        title: "GTQ 1급",
        description: "한국생산성본부, 2016.06.17",
      },
      {
        id: "licenseItem02",
        title: "컴퓨터그래픽스기능사",
        description: "한국산업인력공단, 2014.06.27",
      },
      {
        id: "licenseItem03",
        title: "웹디자인기능사",
        description: "한국산업인력공단, 2014.06.27",
      },
    ],
  },
  {
    id: "aboutEducationList",
    title: "교육",
    items: [
      {
        id: "educationItem01",
        title: "패스트 캠퍼스",
        description: "Web 개발 취업 스쿨(HTML/CSS/JS) 1학기 수료",
      },
      {
        id: "educationItem02",
        title: "하이미디어 아카데미",
        description: "반응형 디자인 웹퍼블리셔반 수료",
      },
      {
        id: "educationItem03",
        title: "가천대학교",
        description: "시각디자인과 졸업",
      },
    ],
  },
];

const stackList = [
  {
    id: "stackFrontEnd",
    title: "Front-End",
    points: [
      "협업을 위하여 재활용하기 쉽고 유지보수하기 용이한 코드를 짤 수 있도록 노력하고 여러 방법에 대해 고민합니다.",
      "페이지의 구조와 태그의 의미를 고려하여 마크업을 작성하는 것을 지향하며 웹표준, 웹 접근성에 맞춰 마크업을 작성합니다.",
      "CSS 전처리기 SCSS 사용할 수 있으며, SCSS의 변수, 함수, 믹스인 등의 여러 기능들을 활용합니다.",
      "React.js를 활용한 컴포넌트 형태와, Storybook을 활용하여 디자인 시스템 형식의 마크업을 작성할 수 있습니다.",
    ],
    icons: [
      { name: "HTML", src: html },
      { name: "CSS", src: css },
      { name: "React", src: react },
      { name: "SCSS", src: scss },
      { name: "Storybook", src: storybook },
    ],
  },
  {
    id: "stackDesign",
    title: "Design",
    points: [
      "포토샵 및 일러스트레이터를 활용하여 디자인 및 편집을 작업할 수 있습니다.",
      "피그마를 활용하여 UX/UI 설계 및 프로토 타이핑이 가능합니다.",
      "애프터 이펙트 및 프리미어를 활용하여 기초적인 영상 작업이 가능합니다.",
    ],
    icons: [
      { name: "Photoshop", src: photoshop },
      { name: "Illustrator", src: illustrator },
      { name: "Figma", src: figma },
      { name: "Zeplin", src: zeplin },
    ],
  },
  {
    id: "stackTools",
    title: "Tools",
    points: [
      "Visual Studio Code, Web Storm을 주로 사용하고 있습니다.",
      "git을 이용한 형상관리를 통하여 협업을 진행할 수 있습니다.",
      "gulp의 문법을 이해하고 기초적인 세팅을 할 수 있습니다.",
      "npm을 활용하여 원하는 패키지 등을 설치하고 활용할 수 있습니다.",
      "Jira 및 Confluence를 활용하여 다른 사람과 협업하고 스케줄링하며, 문서를 공유할 수 있습니다.",
    ],
    icons: [
      { name: "VS Code", src: vscode },
      { name: "Git", src: git },
      { name: "Gulp", src: gulp },
      { name: "Jira", src: jira },
      { name: "Confluence", src: confluence },
    ],
  },
];

const workList = [
  {
    id: "workWaveClinic",
    title: "웨이브 언어 클리닉",
    term: "2025.08",
    contribution: "100%",
    thumbnailWebp: workWaveClinicWebp,
    thumbnailJpg: workWaveClinicJpg,
    description: "WAVE 언어 클리닉은 맞춤형 언어치료 프로그램을 제공하는 언어 치료 클리닉입니다. 리액트 환경에서 퍼블리싱 작업하였으며, 외주작업하였습니다.",
    link: "/portfolio/waveclinic"
  },
  {
    id: "workWedding",
    title: "모바일 웨딩 청첩장",
    term: "2024.01",
    contribution: "100%",
    thumbnailWebp: workWeddingWebp,
    thumbnailJpg: workWeddingJpg,
    description: "리액트 환경에서 퍼블리싱 작업하였으며 방명록의 경우 파이어 베이스를 활용하였습니다. 현재 깃허브 페이지에 배포한 상태입니다.",
    link: "/portfolio/mobile-wedding"
  },
  {
    id: "workPortfolio2024",
    title: "개인 포트폴리오 사이트 2024",
    term: "2024.01",
    contribution: "100%",
    thumbnailWebp: workPortfolio2024Webp,
    thumbnailJpg: workPortfolio2024Jpg,
    description: "개인 포트폴리오 사이트 2024년 버전입니다.",
    link: "/portfolio/portfolio2024"
  },
  {
    id: "workPortfolio2023",
    title: "개인 포트폴리오 사이트 2023",
    term: "2023.04",
    contribution: "100%",
    thumbnailWebp: workPortfolio2022Webp,
    thumbnailJpg: workPortfolio2022Jpg,
    description: "개인 포트폴리오 사이트 2023년 버전입니다.",
    link: "/portfolio/portfolio2023"
  },
  {
    id: "workMarkupGuide",
    title: "마크업 가이드 (개인 프로젝트)",
    term: "2023.04",
    contribution: "100%",
    thumbnailWebp: workMarkupGuideWebp,
    thumbnailJpg: workMarkupGuideJpg,
    description: "개인 리액트 프로젝트용 웹퍼블리싱 가이드입니다.",
    link: "/portfolio/markup-guide"
  },
  {
    id: "workTargetMarketingSolution",
    title: "타겟 마케팅 솔루션",
    term: "2023.02",
    contribution: "100%",
    thumbnailWebp: workTargetMarketingWebp,
    thumbnailJpg: workTargetMarketingJpg,
    description: "SKT 데이터 마케팅 자동화 관련 사이트입니다. 리액트 환경에서 퍼블리싱 작업 및 간단한 프론트 개발 업무를 진행하였습니다.",
    link: "/portfolio/target-marketing-solution"
  },
  {
    id: "workPortfolio2021",
    title: "개인 포트폴리오 사이트 2021",
    term: "2021.12",
    contribution: "100%",
    thumbnailWebp: workPortfolio2021Webp,
    thumbnailJpg: workPortfolio2021Jpg,
    description: "개인 포트폴리오 사이트 2021년 버전입니다.",
    link: "/portfolio/portfolio2021"
  },
  {
    id: "workXeBoard",
    title: "XE3 게시판 스킨",
    term: "2020.03 / 2020.09 (리뉴얼)",
    contribution: "100%",
    thumbnailWebp: workXeBoardWebp,
    thumbnailJpg: workXeBoardJpg,
    description: "현재 배포(마스터 브랜치)된 게시판은 리뉴얼 전 게시판이며 리뉴얼된 코드는 develop 브랜치에 있습니다.",
    link: "/portfolio/xe-board"
  },
  {
    id: "workTonyryu",
    title: "건승정한",
    term: "2020.06",
    contribution: "100%",
    thumbnailWebp: workTonyryuWebp,
    thumbnailJpg: workTonyryuJpg,
    description: "뮤지컬 배우 류정한의 OFFICIAL SITE이며, 뮤지컬 정보 교환 및 단체관람 등의 활발한 문화활동을 함께 하는 동호회의 개념의 모임입니다.",
    link: "/portfolio/tonyryu"
  },
  {
    id: "workUniuni",
    title: "UNIUNI",
    term: "2020.06",
    contribution: "100%",
    thumbnailWebp: workUniuniWebp,
    thumbnailJpg: workUniuniJpg,
    description: "모바일용 베트남 화장품 리뷰 커뮤니티. 현재는 사이트가 폐쇄된 상태입니다.",
    link: "/portfolio/uniuni"
  },
];

export { headerMenu, skillList, aboutList, stackList, workList }
