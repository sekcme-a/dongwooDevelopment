

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
        description="동우개발의 빌딩종합관리를 소개합니다. 빌딩 관리를 통해 건물의 수명 연장과 재산가치 증대를 위해 서비스를 제공하며 이용자에게 편리하고 안전한 공간 제공을 위하여 최선을 다하고 있습니다."
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