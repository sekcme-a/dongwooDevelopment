import React, { useEffect } from "react";
import Navbar from "components/Layout/Navbar";
import MainBanner from "components/HomePageDemo3/MainBanner";
import OurExpertise from "components/HomePageDemo3/OurExpertise";
import ScrollCount from "components/Common/ScrollCount";
import OurServices from "components/HomePageDemo3/OurServices";
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
        description= "(주)동우개발은 공동주택을 전문으로 하는 관리회사입니다."
        url="https://xn--h49at0mlnhpml.kr"
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
