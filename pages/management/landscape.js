

import React from "react";
import Navbar from "components/Layout/Navbar";
import PageBanner from "components/Common/PageBanner";
import Footer from "components/Layout/Footer/Footer";

import LandscapeCompo from "components/management/Landscape"

import useData from "context/data";
import { useEffect } from "react";

import HeadMeta from "components/HeadMeta";


const Landscape = () => {

  const {data, fetch_data} = useData()

  useEffect(()=>{
      if(!data.management.fetched) fetch_data("management")
  },[])



  return(
    <>

<HeadMeta
        title="동우개발-조경 · 미화 관리"
        description="동우개발의 조경 · 미화 관리를 소개합니다."
        url="https://xn--h49at0mlnhpml.kr/management/landscape"
      />


      <Navbar />

      <PageBanner title="조경 · 미화 관리" subtitle="Landscape and Beautification Management" homeText="관리분야" homeUrl="/management/housing" />

      <LandscapeCompo />


      <Footer />
    </>
  )
}

export default Landscape