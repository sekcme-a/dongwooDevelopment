

import React from "react";
import Navbar from "components/Layout/Navbar";
import PageBanner from "components/Common/PageBanner";
import Footer from "components/Layout/Footer/Footer";

import OneCompo from "components/major/One";


import useData from "context/data";
import { useEffect } from "react";

import HeadMeta from "components/HeadMeta";


const One = () => {

  const {data, fetch_data} = useData()

  useEffect(()=>{
      if(!data.major.fetched) fetch_data("major")
  },[])



  return(
    <>
    <HeadMeta
        title="공동주택의 토탈관리 서비스 - 동우개발"
        description="공동주택 토탈 관리 서비스는 건물시설 및 인력관리, 회계, 경비보안, 조경, 미화, 위생 등 다양한 분야를 아우르며, 다년간 축적된 경험과 기술력을 토대로 서비스를 제공합니다."
        url="https://xn--h49at0mlnhpml.kr/major/management"
      />

      <Navbar />

      <PageBanner title="공동주택의 토탈 관리 서비스" subtitle="Comprehensive Home Management Services" homeText="주요사업" homeUrl="/major/management" />

      <OneCompo />


      <Footer />
    </>
  )
}

export default One