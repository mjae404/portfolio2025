import type { Metadata } from "next";
import "@/app/styles/global.scss";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ClientContainer from "@/app/components/ClientContainer";
import GoTop from "@/app/components/GoTop";
import ChangeMode from "@/app/components/ChangeMode";

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
      <body>
        <Header />
        <ClientContainer>
          {children}
        </ClientContainer>
        <GoTop />
        <ChangeMode />
        <Footer />
      </body>
    </html>
  );
}
