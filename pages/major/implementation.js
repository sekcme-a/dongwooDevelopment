

import React from "react";
import Navbar from "components/Layout/Navbar";
import PageBanner from "components/Common/PageBanner";
import Footer from "components/Layout/Footer/Footer";

import FourCompo from "components/major/Four";

import HeadMeta from "components/HeadMeta";

const Four = () => {

  return(
    <>
     <HeadMeta
        title="관리부분 컨설팅 서비스 - 동우개발"
        description="시행 및 시공사의 효율적인 관리를 통해 프로젝트의 원활한 진행과 높은 품질을 보장하는 컨설팅 서비스를 제공합니다."
        url="https://xn--h49at0mlnhpml.kr/major/implementation"
      />

      <Navbar />

      <PageBanner title="시행&시공사에 대한 관리부분 컨설팅 서비스" subtitle="Implementation and Construction Management Consulting Services" homeText="주요사업" homeUrl="/major/management" />

      <FourCompo />


      <Footer />
    </>
  )
}

export default Four