

import React from "react";
import Navbar from "components/Layout/Navbar";
import PageBanner from "components/Common/PageBanner";
import Footer from "components/Layout/Footer/Footer";

import SecurityCompo from "components/management/Security"

import useData from "context/data";
import { useEffect } from "react";


import HeadMeta from "components/HeadMeta";




const Security = () => {


  const {data, fetch_data} = useData()

  useEffect(()=>{
      if(!data.management.fetched) fetch_data("management")
  },[])



  return(
    <>
    <HeadMeta
        title="경비보안관리 - 동우개발"
        description="다양한 전문분야를 아우르는 복잡한 업무로서 축적된 경험과 기술력을 바탕으로 서비스를 지원하고 있습니다."
        url="https://xn--h49at0mlnhpml.kr/management/security"
      />

      <Navbar />

      <PageBanner title="경비보안관리" subtitle="Security Management" homeText="관리분야" homeUrl="/management/housing" />

      <SecurityCompo />


      <Footer />
    </>
  )
}

export default Security