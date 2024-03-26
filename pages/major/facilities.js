

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
        title="오피스텔·상가·기타 업무용 건물의 시설 - 동우개발"
        description="전문 시설 관리로 오피스텔, 상가 등 안전한 건물을 관리합니다. 첨단 기술과 친절한 서비스로 고객의 업무와 거주환경을 최적화하며, 신뢰와 협력을 바탕으로 함께 성공하는 파트너로서 더 나은 미래를 구축합니다."
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