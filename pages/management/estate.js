

import React from "react";
import Navbar from "components/Layout/Navbar";
import PageBanner from "components/Common/PageBanner";
import Footer from "components/Layout/Footer/Footer";

import EstateCompo from "components/management/Estate"

import HeadMeta from "components/HeadMeta";

const Estate = () => {
  return(
    <>

<HeadMeta
        title="부동산자산관리 - 동우개발"
        description="고객의 부동산자산가치 극대화를 최우선 목표로 전문지식을 갖춘 부동산 전문가/관리 전문가가 함께 고객에게 최적화된 부동산 자산관리"
        url="https://xn--h49at0mlnhpml.kr/management/estate"
      />


      <Navbar />

      <PageBanner title="부동산자산관리" subtitle="Real Estate Asset Management" homeText="관리분야" homeUrl="/management/housing" />

      <EstateCompo />


      <Footer />
    </>
  )
}

export default Estate