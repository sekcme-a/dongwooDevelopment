

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
        title="동우개발-부동산자산관리"
        description="동우개발의 부동산자산관리를 소개합니다."
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