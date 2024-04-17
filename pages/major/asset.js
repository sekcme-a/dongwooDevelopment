

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
        description="부동산와 관리 전문가로 구성된 팀이 함께 고객의 부동산 자산가치를 극대화하기 위해 최선을 다합니다."
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