import workWeddingWebp from "@/app/assets/images/portfolios/wedding.webp";
import workWeddingJpg from "@/app/assets/images/portfolios/wedding.jpg";
import workDetailWeddingWebp from "@/app/assets/images/portfolios/details/detail-wedding.webp";
import workDetailWeddingJpg from "@/app/assets/images/portfolios/details/detail-wedding.jpg";
import PortfolioTemplate from "@/app/components/PortfolioTemplate";

export default function MobileWedding() {
  return (
    <PortfolioTemplate
      title="모바일 웨딩 청첩장"
      thumbnailWebp={workWeddingWebp}
      thumbnailJpg={workWeddingJpg}
      period="2024.01"
      percentage="100%"
      stack="React, firebase"
      description="리액트 환경에서 퍼블리싱 작업하였으며 방명록의 경우 파이어 베이스를 활용하였습니다. 현재 깃허브 페이지에 배포한 상태입니다."
      link="https://mingdangworld.dev"
      detailImages={[{
        webp: workDetailWeddingWebp,
        jpg: workDetailWeddingJpg,
      }]}
    />
  );
}
