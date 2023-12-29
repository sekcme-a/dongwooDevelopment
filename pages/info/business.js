

import React from "react";
import Navbar from "components/Layout/Navbar";
import PageBanner from "components/Common/PageBanner";
import Footer from "components/Layout/Footer/Footer";

import BusinessCompo from "components/info/Business";

import useData from "context/data";
import { useEffect } from "react";

import HeadMeta from "components/HeadMeta";

const Business = () => {

  const {data, fetch_data} = useData()

  useEffect(()=>{
      if(!data.info.fetched) fetch_data("info")
  },[])



  return(
    <>

      <HeadMeta
        title="동우개발-경영방침"
        description="동우개발의 경영방침을 소개합니다."
        url="https://xn--h49at0mlnhpml.kr/info/business"
      />


      <Navbar />

      <PageBanner title="경영방침" subtitle="Management Policy" homeText="회사소개" homeUrl="/info/greet" />

      <BusinessCompo />


      <Footer />
    </>
  )
}

export default Business