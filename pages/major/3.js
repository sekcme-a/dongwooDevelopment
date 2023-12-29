

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
        title="동우개발-자산관리 서비스"
        description="동우개발의 자산관리 서비스를 소개합니다."
        url="https://xn--h49at0mlnhpml.kr/major/3"
      />


      <Navbar />

      <PageBanner title="자산관리 서비스" subtitle="Asset Management Services" homeText="주요사업" homeUrl="/major/1" />

      <ThreeCompo />


      <Footer />
    </>
  )
}

export default Three