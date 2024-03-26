





import React, {useState, useEffect} from "react";
import Navbar from "components/Layout/Navbar";
import PageBanner from "components/Common/PageBanner";
import Footer from "components/Layout/Footer/Footer";

import ApplicationCompo from "components/job/Application"
import HeadMeta from "components/HeadMeta";

const Application = () => {


  return(
    <>


      <HeadMeta
        title="입사지원 - 동우개발"
        description="동우개발에 입사지원하실 수 있습니다. 동우개발은 밝은 비전을 제시하며 고객감동 서비스를 경영 이념으로 실천합니다."
        url="https://xn--h49at0mlnhpml.kr/job/application"
      />

      <Navbar />

      <PageBanner title="입사지원" subtitle="Job Application" homeText="채용공고" homeUrl="/job/advertisement" />
      <div style={{marginTop: "100px"}} />
      <ApplicationCompo />

      <Footer />
    </>
  )
}

export default Application