

import React from "react";
import Navbar from "components/Layout/Navbar";
import PageBanner from "components/Common/PageBanner";
import Footer from "components/Layout/Footer/Footer";

import ThreeCompo from "components/major/Three";

import HeadMeta from "components/HeadMeta";

const Three = () => {

  return(
    <>

      <HeadMeta
        title="자산관리 서비스 - 동우개발"
        description="우리는 부동산 전문가와 관리 전문가로 구성된 팀이 함께 고객의 부동산 자산가치를 극대화하기 위해 최선을 다하며, 최적화된 부동산 자산관리 서비스를 제공합니다."
        url="https://xn--h49at0mlnhpml.kr/major/asset"
      />


      <Navbar />

      <PageBanner title="자산관리 서비스" subtitle="Asset Management Services" homeText="주요사업" homeUrl="/major/management" />

      <ThreeCompo />


      <Footer />
    </>
  )
}

export default Three