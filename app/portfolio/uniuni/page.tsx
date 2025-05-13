import workUniuniWebp from "@/app/assets/images/portfolios/uniuni.webp";
import workUniuniJpg from "@/app/assets/images/portfolios/uniuni.jpg";
import workDetailUniuniWebp from "@/app/assets/images/portfolios/details/detail-uniuni.webp";
import workDetailUniuniJpg from "@/app/assets/images/portfolios/details/detail-uniuni.jpg";
import PortfolioTemplate from "@/app/components/PortfolioTemplate";

export default function Uniuni() {
  return (
    <PortfolioTemplate
      title="UNIUNI"
      thumbnailWebp={workUniuniWebp}
      thumbnailJpg={workUniuniJpg}
      period="2020.06"
      percentage="100%"
      stack="HTML, CSS, SCSS, jQuery"
      description="모바일용 베트남 화장품 리뷰 커뮤니티. 현재는 사이트가 폐쇄된 상태입니다."
      link="https://prj-kbeauty.xehub.co.kr"
      detailImages={[{
        webp: workDetailUniuniWebp,
        jpg: workDetailUniuniJpg,
      }]}
    />
  );
}
