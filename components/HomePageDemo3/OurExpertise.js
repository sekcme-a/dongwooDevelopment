import EditButton from "components/admin/EditButton";
import useData from "context/data";
import Image from "next/image";
import React from "react";


const PR = {position: 'relative'}

const OurExpertise = () => {
  const {data} = useData()


  return (
    <>
      <div className="expertise-area-with-white-color ptb-100">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-12">
              <div
                className="expertise-image-wrap top-zero"
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-once="true"
              >
                {/* 1080*976 */}
                <Image 
                  src={data.main.aboutUs_img ?? "https://firebasestorage.googleapis.com/v0/b/dongwoo-315ab.appspot.com/o/development%2Fmain%2FaboutUs_img?alt=media&token=b3537b00-4359-44c3-ae7c-f0ffb10ab7da"}
                  alt="about us" 
                  width={500} height={450} objectFit="contain"
                  loading="lazy"
                />
                <EditButton
                  mode="image"
                  type="main" item="aboutUs_img" text="배경이미지 삽입 (1080*976)"
                  defaultImg="/images/expertise/expertise-3.png"
                />

                {/* <div
                  className="expertise-shape-2"
                >
                  <img
                    src="/images/expertise/shape-2.png"
                    alt="image"
                    data-aos="fade-left"
                    data-aos-delay="50"
                    data-aos-duration="500"
                    data-aos-once="true"
                  />
                </div> */}
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="expertise-content black-color"
                data-aos="fade-left"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <span>About Us</span>
                <h3 style={{wordBreak:'keep-all'}}>
                  {data.main.aboutUs_title ?? "주식회사 동우개발은 공동주택관리의 선도주자로 동행합니다"}
                  <EditButton type="main" item="aboutUs_title" text="제목" />
                </h3>
                <p style={{position:"relative"}}>
                  {data.main.aboutUs_content ?? "입주민의 주거 공간에서의 쾌적한 생활을 위해 항상 노력하고 있으며, 고객 여러분의 다양한 요구에 신속하고 성심껏 대응하여 만족을 드리고자 노력하고 있습니다. 함께하는 모든 순간을 소중히 여기며, 공동주택 관리의 전문가로서 항상 고객 여러분의 편의와 만족을 최우선에 두고 있습니다. 고객 여러분의 신뢰를 기반으로, 더 나은 주거환경을 만들기 위해 최선을 다하고 있습니다."}
                  <EditButton type="main" item="aboutUs_content" text="내용" />
                </p>

                <div className="row justify-content-center">
                  <div className="col-lg-6 col-sm-6" style={{marginTop: "30px"}}>
                    {/* <div className="expertise-inner-box">
                      <div className="icon">
                        <i className="ri-stack-line"></i>
                      </div> */}
                      <h4
                        style={{position:"relative"}}
                      >
                        {data.main.aboutUs_subtitle1 ?? "차별화된 관리"}
                        <EditButton type="main" item="aboutUs_subtitle1" text="부제목1" />
                      </h4>
                      
                      <p style={PR}>
                        {data.main.aboutUs_subContent1 ?? "철저한 시설 유지보수와 안전한 생활환경을 제공하고 최신 기술과 첨단 시스템을 활용하여 효율적이고 투명한 관리를 실현하고 있어, 입주민의 만족과 안전을 최우선으로 합니다."}
                        <EditButton type="main" item="aboutUs_subContent1" text="내용1" />
                      </p>
                    {/* </div> */}
                  </div>
                  <div className="col-lg-6 col-sm-6" style={{marginTop: "30px"}}>
                    {/* <div className="expertise-inner-box">
                      <div className="icon">
                        <i className="ri-stack-line"></i>
                      </div> */}
                      <h4
                        style={{position:"relative"}}
                      >
                        {data.main.aboutUs_subTitle2 ?? "정직한 관리"}
                        <EditButton type="main" item="aboutUs_subTitle2" text="부제목2" />
                      </h4>
                      
                      <p style={PR}>
                        {data.main.aboutUs_subContent2 ?? "항상 정직하고 투명한 관리를 원칙으로 삼아 입주민과의 신뢰를 최우선으로 생각하며, 솔직하고 공정한 서비스로 공동주택을 관리하고 있으며, 관리비의 투명성과 신속한 응대를 통해 할상 열린 소통을 유지하며, 입주민들의 의견을 존중하고 반영합니다."}
                        <EditButton type="main" item="aboutUs_subContent2" text="내용2" />
                      </p>
                    {/* </div> */}
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurExpertise;
