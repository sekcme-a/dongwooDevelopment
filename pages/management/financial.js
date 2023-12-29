

import React from "react";
import Navbar from "components/Layout/Navbar";
import PageBanner from "components/Common/PageBanner";
import Footer from "components/Layout/Footer/Footer";

import FinancialCompo from "components/management/Financial"

import HeadMeta from "components/HeadMeta";

const Financial = () => {
  return(
    <>

<HeadMeta
        title="동우개발-회계관리"
        description="동우개발의 회계관리를 소개합니다."
        url="https://xn--h49at0mlnhpml.kr/management/financial"
      />


      <Navbar />

      <PageBanner title="회계관리" subtitle="Financial Management" homeText="관리분야" homeUrl="/management/housing" />

      <FinancialCompo />


      <Footer />
    </>
  )
}

export default Financial