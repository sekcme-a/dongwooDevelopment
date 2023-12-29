

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
        title="동우개발-인사관리"
        description="동우개발의 인사관리를 소개합니다."
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