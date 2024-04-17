

import React from "react";
import Navbar from "components/Layout/Navbar";
import PageBanner from "components/Common/PageBanner";
import Footer from "components/Layout/Footer/Footer";

import TwoCompo from "components/major/Two";

import HeadMeta from "components/HeadMeta";

const Two = () => {

  return(
    <>

        <HeadMeta
        title="업무용 건물의 시설 - 동우개발"
        description="전문 시설 관리로 오피스텔, 상가 등 안전한 건물을 관리합니다."
        url="https://xn--h49at0mlnhpml.kr/major/facilities"
      />

      <Navbar />

      <PageBanner title="오피스텔 · 상가 · 기타 업무용 건물의 시설" subtitle="Facilities for Offices, Retail, and Other Commercial Buildings" homeText="주요사업" homeUrl="/major/management" />

      <TwoCompo />


      <Footer />
    </>
  )
}

export default Two