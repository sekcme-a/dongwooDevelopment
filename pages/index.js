import React, { useEffect } from "react";
import Navbar from "components/Layout/Navbar";
import MainBanner from "components/HomePageDemo3/MainBanner";
import OurExpertise from "components/HomePageDemo3/OurExpertise";
import ScrollCount from "components/Common/ScrollCount";
import OurServices from "components/HomePageDemo3/OurServices";
import WhyChooseUsStyle2 from "components/Common/WhyChooseUsStyle2";
import Pricing from "components/PricingPlan/Pricing";
import CaseStudy from "components/Common/CaseStudy";
import AboutOurCompany from "components/HomePageDemo3/AboutOurCompany";
import TestimonialStyle2 from "components/Common/TestimonialStyle2";
import TeamMemberStyle2 from "components/Common/TeamMemberStyle2";
import Faq from "components/Common/Faq";
import Cta from "components/Common/Cta";
import Footer from "components/Layout/Footer/Footer";
import useData from "context/data";

import HeadMeta from "components/HeadMeta";
import PopUp from "components/PopUp";

export default function Index3() {

  const {data, fetch_data} = useData()

  useEffect(()=>{
      if(!data.main.fetched) fetch_data("main")
  },[])


  return (
    <>

      <HeadMeta
        title="동우개발"
        description="(주)동우개발은 공동주택을 전문으로 하는 관리회사입니다. 고객 여러분의 안전하고 편안한 주거환경을 지원하기 위해 최선을 다하고 있습니다. "
        url="https://xn--h49at0mlnhpml.kr/"
      />

      <PopUp />

      <Navbar />

      <MainBanner />

      <OurExpertise />

      <OurServices />


      <ScrollCount />

     

      {/* <WhyChooseUsStyle2 /> */}

      {/* <Pricing /> */}

      {/* <CaseStudy /> */}

      {/* <AboutOurCompany /> */}

      {/* <TestimonialStyle2 /> */}

      {/* <TeamMemberStyle2 /> */}

      {/* <Faq /> */}

      {/* <div className="pt-100">
        <Cta />
      </div> */}

      <Footer />
    </>
  );
}
