import workPortfolio2024Webp from "@/app/assets/images/portfolios/portfolio2024.webp";
import workPortfolio2024Jpg from "@/app/assets/images/portfolios/portfolio2024.jpg";
import workDetailPortfolio2024Webp from "@/app/assets/images/portfolios/details/detail-portfolio2024.webp";
import workDetailPortfolio2024Jpg from "@/app/assets/images/portfolios/details/detail-portfolio2024.jpg";
import PortfolioTemplate from "@/app/components/PortfolioTemplate";

export default function Portfolio2024() {
  return (
    <PortfolioTemplate
      title="포트폴리오 2024년 버전"
      thumbnailWebp={workPortfolio2024Webp}
      thumbnailJpg={workPortfolio2024Jpg}
      period="2024.01"
      percentage="100%"
      stack="React"
      description="개인 포트폴리오 사이트 2024 버전입니다."
      link="http://2024.mjaedot.com"
      detailImages={[{
        webp: workDetailPortfolio2024Webp,
        jpg: workDetailPortfolio2024Jpg,
      }]}
    />
  );
}
