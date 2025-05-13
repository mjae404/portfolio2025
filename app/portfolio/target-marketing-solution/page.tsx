import workTargetMarketingWebp from "@/app/assets/images/portfolios/targetmarketing.webp";
import workTargetMarketingJpg from "@/app/assets/images/portfolios/targetmarketing.jpg";
import workDetailTargetMarketingWebp from "@/app/assets/images/portfolios/details/detail-targetmarketing.webp";
import workDetailTargetMarketingJpg from "@/app/assets/images/portfolios/details/detail-targetmarketing.jpg";
import PortfolioTemplate from "@/app/components/PortfolioTemplate";

export default function TargetMarketing() {
  return (
    <PortfolioTemplate
      title="타겟 마케팅 솔루션"
      thumbnailWebp={workTargetMarketingWebp}
      thumbnailJpg={workTargetMarketingJpg}
      period="2023.02"
      percentage="100%"
      stack="React"
      description="데이터 마케팅 자동화 관련 사이트입니다. 리액트 환경에서 퍼블리싱 작업 및 간단한 프론트 개발 업무를 진행하였습니다."
      link="https://www.targetmarketing.co.kr"
      detailImages={[{
        webp: workDetailTargetMarketingWebp,
        jpg: workDetailTargetMarketingJpg,
      }]}
    />
  );
}
