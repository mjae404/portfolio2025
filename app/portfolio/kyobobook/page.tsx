import workKyoboWebp from "@/app/assets/images/portfolios/kyobo.webp";
import workKyoboJpg from "@/app/assets/images/portfolios/kyobo.jpg";
import workDetailKyoboWebp from "@/app/assets/images/portfolios/details/detail-kyobo.webp";
import workDetailKyoboJpg from "@/app/assets/images/portfolios/details/detail-kyobo.jpg";
import workDetailKyobo02Webp from "@/app/assets/images/portfolios/details/detail-kyobo02.webp";
import workDetailKyobo02Jpg from "@/app/assets/images/portfolios/details/detail-kyobo02.jpg";
import workDetailKyobo03Webp from "@/app/assets/images/portfolios/details/detail-kyobo03.webp";
import workDetailKyobo03Jpg from "@/app/assets/images/portfolios/details/detail-kyobo03.jpg";
import PortfolioTemplate from "@/app/components/PortfolioTemplate";

export default function Kyobobook() {
  return (
    <PortfolioTemplate
      title="교보문고 신입사원 부트캠프 과제"
      thumbnailWebp={workKyoboWebp}
      thumbnailJpg={workKyoboJpg}
      period="2022.09"
      percentage="100%"
      stack="HTML, CSS, JavaScript, gulp"
      description="교보문고 신입사원 부트캠프 공통과제 과제로, 퍼블리싱 작업을 100% 담당하였습니다."
      link="https://mjaedot.com/kyobo_bootcamp"
      detailImages={[
        {
          webp: workDetailKyoboWebp,
          jpg: workDetailKyoboJpg,
        },
        {
          webp: workDetailKyobo02Webp,
          jpg: workDetailKyobo02Jpg,
        },
        {
          webp: workDetailKyobo03Webp,
          jpg: workDetailKyobo03Jpg,
        },
      ]}
    />
  );
}
