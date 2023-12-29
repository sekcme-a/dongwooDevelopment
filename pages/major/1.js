

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
        title="동우개발-공동주택의 토탈관리 서비스"
        description="동우개발의 공동주택의 토탈 관리 서비스를 소개합니다.."
        url="https://xn--h49at0mlnhpml.kr/major/1"
      />

      <Navbar />

      <PageBanner title="공동주택의 토탈 관리 서비스" subtitle="Comprehensive Home Management Services" homeText="주요사업" homeUrl="/major/1" />

      <OneCompo />


      <Footer />
    </>
  )
}

export default One