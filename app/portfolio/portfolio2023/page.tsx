import workPortfolio2022Webp from "@/app/assets/images/portfolios/portfolio2022.webp";
import workPortfolio2022Jpg from "@/app/assets/images/portfolios/portfolio2022.jpg";
import workDetailPortfolio2022Webp from "@/app/assets/images/portfolios/details/detail-portfolio2022.webp";
import workDetailPortfolio2022Jpg from "@/app/assets/images/portfolios/details/detail-portfolio2022.jpg";
import PortfolioTemplate from "@/app/components/PortfolioTemplate";

export default function Portfolio2022() {
  return (
    <PortfolioTemplate
      title="포트폴리오 2023년 버전"
      thumbnailWebp={workPortfolio2022Webp}
      thumbnailJpg={workPortfolio2022Jpg}
      period="2023.01"
      percentage="100%"
      stack="React"
      description="개인 포트폴리오 사이트 2023 버전입니다."
      link="http://2023.mjaedot.com"
      detailImages={[{
        webp: workDetailPortfolio2022Webp,
        jpg: workDetailPortfolio2022Jpg,
      }]}
    />
  );
}
