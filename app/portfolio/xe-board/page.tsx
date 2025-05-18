import workXeBoardWebp from "@/app/assets/images/portfolios/xe01.webp";
import workXeBoardJpg from "@/app/assets/images/portfolios/xe01.jpg";
import workDetailXeBoardWebp from "@/app/assets/images/portfolios/details/detail-xe01.webp";
import workDetailXeBoardJpg from "@/app/assets/images/portfolios/details/detail-xe01.jpg";
import workDetailXeBoard02Webp from "@/app/assets/images/portfolios/details/detail-xe02.webp";
import workDetailXeBoard02Jpg from "@/app/assets/images/portfolios/details/detail-xe02.jpg";
import workDetailXeBoard03Webp from "@/app/assets/images/portfolios/details/detail-xe03.webp";
import workDetailXeBoard03Jpg from "@/app/assets/images/portfolios/details/detail-xe03.jpg";
import PortfolioTemplate from "@/app/components/PortfolioTemplate";

export default function XeBoard() {
  return (
    <PortfolioTemplate
      title="XE3 게시판 스킨"
      thumbnailWebp={workXeBoardWebp}
      thumbnailJpg={workXeBoardJpg}
      period="2020.03 / 2020.09 (리뉴얼)"
      percentage="100%"
      stack="HTML, CSS, SCSS, jQuery"
      description="※ 현재 배포(마스터 브랜치)된 게시판은 리뉴얼 전 게시판이며 리뉴얼된 코드는 develop 브랜치에 있습니다."
      link="https://github.com/xpressengine/plugin-board/tree/develop"
      detailImages={[
        {
          webp: workDetailXeBoardWebp,
          jpg: workDetailXeBoardJpg,
        },
        {
          webp: workDetailXeBoard02Webp,
          jpg: workDetailXeBoard02Jpg,
        },
        {
          webp: workDetailXeBoard03Webp,
          jpg: workDetailXeBoard03Jpg,
        },
      ]}
    />
  );
}
