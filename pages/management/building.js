

import React from "react";
import Navbar from "components/Layout/Navbar";
import PageBanner from "components/Common/PageBanner";
import Footer from "components/Layout/Footer/Footer";

import BuildingCompo from "components/management/Building"

import HeadMeta from "components/HeadMeta";

const Building = () => {
  return(
    <>

      <HeadMeta
        title="빌딩종합관리 - 동우개발"
        description="동우개발의 빌딩종합관리를 소개합니다."
        url="https://xn--h49at0mlnhpml.kr/management/building"
      />


      <Navbar />

      <PageBanner title="빌딩종합관리" subtitle="Building Facilities Management" homeText="관리분야" homeUrl="/management/housing" />

      <BuildingCompo />


      <Footer />
    </>
  )
}

export default Building