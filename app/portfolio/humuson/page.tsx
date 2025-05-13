import workHumusonWebp from "@/app/assets/images/portfolios/humuson.webp";
import workHumusonJpg from "@/app/assets/images/portfolios/humuson.jpg";
import workDetailHumusonWebp from "@/app/assets/images/portfolios/details/detail-humuson.webp";
import workDetailHumusonJpg from "@/app/assets/images/portfolios/details/detail-humuson.jpg";
import PortfolioTemplate from "@/app/components/PortfolioTemplate";

export default function Humuson() {
  return (
    <PortfolioTemplate
      title="휴머스온"
      thumbnailWebp={workHumusonWebp}
      thumbnailJpg={workHumusonJpg}
      period="2023.03"
      percentage="100%"
      stack="React"
      description="워드프레스로 제작되어 있던 사이트를 리액트 환경으로 세팅하여 퍼블리싱 작업 및 간단한 프론트 개발 업무를 진행하였습니다."
      link="https://www.humuson.com"
      detailImages={[{
        webp: workDetailHumusonWebp,
        jpg: workDetailHumusonJpg,
      }]}
    />
  );
}
