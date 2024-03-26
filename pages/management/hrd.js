

import React from "react";
import Navbar from "components/Layout/Navbar";
import PageBanner from "components/Common/PageBanner";
import Footer from "components/Layout/Footer/Footer";

import HrdCompo from "components/management/Hrd"

import HeadMeta from "components/HeadMeta";

const Hrd = () => {
  return(
    <>

<HeadMeta
        title="인사관리 - 동우개발"
        description="(주)동우개발은 분야별 전문이력의 총원과 체계적인 교육 및 관리를 실시합니다."
        url="https://xn--h49at0mlnhpml.kr/management/hrd"
      />



      <Navbar />

      <PageBanner title="인사관리" subtitle="HR Management" homeText="관리분야" homeUrl="/management/housing" />

      <HrdCompo />


      <Footer />
    </>
  )
}

export default Hrd