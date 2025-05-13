import workTonyryuWebp from "@/app/assets/images/portfolios/tonyryu01.webp";
import workTonyryuJpg from "@/app/assets/images/portfolios/tonyryu01.jpg";
import workDetailTonyryuWebp from "@/app/assets/images/portfolios/details/detail-tonyryu.webp";
import workDetailTonyryuJpg from "@/app/assets/images/portfolios/details/detail-tonyryu.jpg";
import workDetailTonyryu02Webp from "@/app/assets/images/portfolios/details/detail-tonyryu02.webp";
import workDetailTonyryu02Jpg from "@/app/assets/images/portfolios/details/detail-tonyryu02.jpg";
import PortfolioTemplate from "@/app/components/PortfolioTemplate";

export default function Tonyryu() {
  return (
    <PortfolioTemplate
      title="건승정한"
      thumbnailWebp={workTonyryuWebp}
      thumbnailJpg={workTonyryuJpg}
      period="2020.06"
      percentage="100%"
      stack="HTML, CSS, SCSS, jQuery"
      description="뮤지컬 배우 류정한의 OFFICIAL SITE이며, 뮤지컬 정보 교환 및 단체관람 등의 활발한 문화활동을 함께 하는 동호회의 개념의 모임입니다."
      link="https://www.tonyryu.net"
      detailImages={[
        {
          webp: workDetailTonyryuWebp,
          jpg: workDetailTonyryuJpg,
        },
        {
          webp: workDetailTonyryu02Webp,
          jpg: workDetailTonyryu02Jpg,
        },
      ]}
    />
  );
}
