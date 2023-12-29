

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
        title="동우개발-경비보안관리"
        description="동우개발의 경비보안관리를 소개합니다."
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