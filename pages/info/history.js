

import React from "react";
import Navbar from "components/Layout/Navbar";
import PageBanner from "components/Common/PageBanner";
import Footer from "components/Layout/Footer/Footer";

import HistoryCompo from "components/info/History";


import useData from "context/data";
import { useEffect } from "react";

import HeadMeta from "components/HeadMeta";

const History = () => {
  const {data, fetch_data} = useData()

useEffect(()=>{
    if(!data.info.fetched) fetch_data("info")
},[])

  return(
    <>

      <HeadMeta
        title="동우개발-연혁"
        description="동우개발의 연혁을 소개합니다."
        url="https://xn--h49at0mlnhpml.kr/info/history"
      />

      <Navbar />

      <PageBanner title="연혁" subtitle="History" homeText="회사소개" homeUrl="/info/greet" />

      <HistoryCompo />


      <Footer />
    </>
  )
}

export default History