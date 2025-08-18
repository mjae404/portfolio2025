import workWaveclinicWebp from "@/app/assets/images/portfolios/waveclinic.webp";
import workWaveclinicJpg from "@/app/assets/images/portfolios/waveclinic.jpg";
import workDetailWaveclinicWebp from "@/app/assets/images/portfolios/details/detail-waveclinic.webp";
import workDetailWaveclinicJpg from "@/app/assets/images/portfolios/details/detail-waveclinic.jpg";
import PortfolioTemplate from "@/app/components/PortfolioTemplate";

export default function Waveclinic() {
  return (
    <PortfolioTemplate
      title="waveclinic"
      thumbnailWebp={workWaveclinicWebp}
      thumbnailJpg={workWaveclinicJpg}
      period="2025.08"
      percentage="100%"
      stack="HTML, CSS, SCSS, React"
      description="WAVE 언어 클리닉은 의사소통에 어려움을 겪는 대상자에게 맞춤형 언어치료 프로그램을 제공합니다. 깃허브 레포지토리에 코드를 공개해두었습니다."
      link="https://waveclinic.co.kr"
      detailImages={[{
        webp: workDetailWaveclinicWebp,
        jpg: workDetailWaveclinicJpg,
      }]}
    />
  );
}
