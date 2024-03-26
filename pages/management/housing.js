

import React from "react";
import Navbar from "components/Layout/Navbar";
import PageBanner from "components/Common/PageBanner";
import Footer from "components/Layout/Footer/Footer";

import HousingCompo from "components/management/Housing"
import useData from "context/data";
import { useEffect } from "react";

import HeadMeta from "components/HeadMeta";

const Housing = () => {
  return(
    <>

<HeadMeta
        title="공동주택관리 - 동우개발"
        description="고객 감동서비스를 경영이념으로 실천하며 선진화 된 경영관리 방법을 현장에 적용하여 공동주택관리 업계를 선도하는 기업으로서의 책임을 다하고 있습니다."
        url="https://xn--h49at0mlnhpml.kr/management/housing"
      />

      <Navbar />

      <PageBanner title="공동주택관리" subtitle="Joint Housing Management" homeText="관리분야" homeUrl="/management/housing" />

      <HousingCompo />


      <Footer />
    </>
  )
}

export default Housing