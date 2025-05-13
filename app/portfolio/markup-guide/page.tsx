import workMarkupGuideWebp from "@/app/assets/images/portfolios/markup_guide.webp";
import workMarkupGuideJpg from "@/app/assets/images/portfolios/markup_guide.jpg";
import workDetailMarkupGuideWebp from "@/app/assets/images/portfolios/details/detail-markupguide.webp";
import workDetailMarkupGuideJpg from "@/app/assets/images/portfolios/details/detail-markupguide.jpg";
import PortfolioTemplate from "@/app/components/PortfolioTemplate";

export default function MarkupGuide() {
  return (
    <PortfolioTemplate
      title="마크업 가이드"
      thumbnailWebp={workMarkupGuideWebp}
      thumbnailJpg={workMarkupGuideJpg}
      period="2023.04"
      percentage="100%"
      stack="React"
      description="개인 리액트 프로젝트용 웹퍼블리싱 가이드입니다."
      link="http://mjae.me"
      detailImages={[{
        webp: workDetailMarkupGuideWebp,
        jpg: workDetailMarkupGuideJpg,
      }]}
    />
  );
}
