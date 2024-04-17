

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
        title="회계관리 - 동우개발"
        description="회계업무 경험이 풍부한 전문가를 통해 통합교육 및 사업장별 방문을 하여 회계업무를 지원합니다."
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