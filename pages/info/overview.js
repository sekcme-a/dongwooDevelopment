
import React from "react";
import Navbar from "components/Layout/Navbar";
import PageBanner from "components/Common/PageBanner";
import AboutOurCompany from "components/About2/AboutOurCompany";
import FunFactStyle1 from "components/Common/FunFactStyle1";
import Pricing from "components/PricingPlan/Pricing";
import TeamMemberStyle3 from "components/Common/TeamMemberStyle3";
import WhyChooseUsStyle1 from "components/Common/WhyChooseUsStyle1";
import TestimonialStyle1 from "components/Common/TestimonialStyle1";
import OurExpertise from "components/About2/OurExpertise";
import Faq from "components/Common/Faq";
import Footer from "components/Layout/Footer/Footer";

import OverviewCompo from "components/info/Overview"


import useData from "context/data";
import { useEffect } from "react";


import HeadMeta from "components/HeadMeta";


export default function Overview() {

  const {data, fetch_data} = useData()

  useEffect(()=>{
      if(!data.info.fetched) fetch_data("info")
  },[])

  return (
    <>

      <HeadMeta
        title="동우개발-회사개요(사훈,경영이념)"
        description="동우개발의 회사개요, 사훈과 경영이념을 소개합니다."
        url="https://xn--h49at0mlnhpml.kr/info/overview"
      />
      <Navbar />

      <PageBanner title="회사 개요(사훈, 경영이념)" subtitle="Company Overview (Motto, Management Philosophy)" homeText="회사소개" homeUrl="/info/greet" />

      <div className="pt-100">
        <OverviewCompo />
      </div>


      <Footer />
    </>
  );
}
