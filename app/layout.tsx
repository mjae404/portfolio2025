import type { Metadata } from "next";
import "@/app/styles/global.scss";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ClientContainer from "@/app/components/ClientContainer";
import GoTop from "@/app/components/GoTop";
import ChangeMode from "@/app/components/ChangeMode";
import { Inter } from "next/font/google";
import Github from "@/app/components/Github";

const InterSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Minjee Kim's Portfolio",
  description: "견고한 코드를 작성하는 마크업 개발자 웹 퍼블리셔 김민지의 포트폴리오",
};

export default function RootLayout({
   children,
 }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={InterSans.variable}>
        <Header />
        <ClientContainer>
          {children}
        </ClientContainer>
        <GoTop />
        <Github />
        <ChangeMode />
        <Footer />
      </body>
    </html>
  );
}
