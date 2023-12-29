

import React from "react";
import Navbar from "components/Layout/Navbar";
import PageBanner from "components/Common/PageBanner";
import Footer from "components/Layout/Footer/Footer";

import PartnerCompo from "components/info/Partner";

import useData from "context/data";
import { useEffect } from "react";

import HeadMeta from "components/HeadMeta";

export default function Partner() {

  const {data, fetch_data} = useData()

  useEffect(()=>{
      if(!data.info.fetched) fetch_data("info")
  },[])



  return (
    <>

      <HeadMeta
        title="동우개발-협력사"
        description="동우개발의 협력사를 소개합니다."
        url="https://xn--h49at0mlnhpml.kr/info/partner"
      />


      <Navbar />

      <PageBanner title="협력사" subtitle="Partner Company" homeText="회사소개" homeUrl="/info/greet" />

      <PartnerCompo />


      <Footer />
    </>
  );
}
