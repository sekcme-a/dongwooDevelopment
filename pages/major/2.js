

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
        title="동우개발-오피스텔 · 상가 · 기타 업무용 건물의 시설"
        description="동우개발의 오피스텔 · 상가 · 기타 업무용 건물의 시설을 소개합니다."
        url="https://xn--h49at0mlnhpml.kr/major/2"
      />

      <Navbar />

      <PageBanner title="오피스텔 · 상가 · 기타 업무용 건물의 시설" subtitle="Facilities for Offices, Retail, and Other Commercial Buildings" homeText="주요사업" homeUrl="/major/1" />

      <TwoCompo />


      <Footer />
    </>
  )
}

export default Two