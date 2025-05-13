import workTasonWebp from "@/app/assets/images/portfolios/tason.webp";
import workTasonJpg from "@/app/assets/images/portfolios/tason.jpg";
import workDetailTasonWebp from "@/app/assets/images/portfolios/details/detail-tason.webp";
import workDetailTasonJpg from "@/app/assets/images/portfolios/details/detail-tason.jpg";
import PortfolioTemplate from "@/app/components/PortfolioTemplate";

export default function Tason() {
  return (
    <PortfolioTemplate
      title="타스온 소개 페이지 리뉴얼"
      thumbnailWebp={workTasonWebp}
      thumbnailJpg={workTasonJpg}
      period="2023.07"
      percentage="100%"
      stack="React"
      description="타스온 메인 페이지를 포함하여 소개 페이지 리뉴얼되어 리액트 환경에서 퍼블리싱 작업을 진행했습니다."
      link="https://www.tason.com"
      detailImages={[{
        webp: workDetailTasonWebp,
        jpg: workDetailTasonJpg,
      }]}
    />
  );
}
