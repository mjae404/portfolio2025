import workPortfolio2021Webp from "@/app/assets/images/portfolios/portfolio2021.webp";
import workPortfolio2021Jpg from "@/app/assets/images/portfolios/portfolio2021.jpg";
import workDetailPortfolio2021Webp from "@/app/assets/images/portfolios/details/detail-portfolio2021.webp";
import workDetailPortfolio2021Jpg from "@/app/assets/images/portfolios/details/detail-portfolio2021.jpg";
import PortfolioTemplate from "@/app/components/PortfolioTemplate";

export default function Portfolio2021() {
  return (
    <PortfolioTemplate
      title="포트폴리오 2021년 버전"
      thumbnailWebp={workPortfolio2021Webp}
      thumbnailJpg={workPortfolio2021Jpg}
      period="2023.01"
      percentage="100%"
      stack="React"
      description="개인 포트폴리오 사이트 2021 버전입니다."
      link="https://mjaedot.com/portfolio2021"
      detailImages={[{
        webp: workDetailPortfolio2021Webp,
        jpg: workDetailPortfolio2021Jpg,
      }]}
    />
  );
}
