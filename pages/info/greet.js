
import Navbar from "components/Layout/Navbar";
import PageBanner from "components/Common/PageBanner";
import Footer from "components/Layout/Footer/Footer";

import GreetCompo from "components/info/Greet";


import useData from "context/data";
import { useEffect } from "react";

import HeadMeta from "components/HeadMeta";

export default function Greet() {
  const {data, fetch_data} = useData()

  useEffect(()=>{
      if(!data.info.fetched) fetch_data("info")
  },[])



  return (
    <>
      <HeadMeta
        title="동우개발-인사말"
        description="동우개발의 인사말을 안내드립니다."
        url="https://xn--h49at0mlnhpml.kr/info/greet"
      />
    
      <Navbar />

      <PageBanner title="인사말" subtitle="Greetings  " homeText="회사소개" homeUrl="/info/greet" />

      <GreetCompo />


      <Footer />
    </>
  );
}
