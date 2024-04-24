import useData from "context/data";
import React from "react";
import EditButton from "components/admin/EditButton";
import Image from "next/image";
const PR = {position:"relative"}

const WhyChooseUsStyle1 = () => {
  const {data} = useData()
  return (
    <>
      <div className="dev-ourZone pb-100">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-12">
              <div
                className="dev-over-con"
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <span>{`회사 개요 (사훈, 경영이념 )`}</span>
                <h3>
                  {data.info.overview_title ?? "동우개발의 사훈과 경영이념"}
                  <EditButton type="info" item="overview_title" text="제목" />
                </h3>
                <p style={PR}>
                  {data.info.overview_content ?? "동우개발의 사훈과 경영이념을 소개합니다."}
                  <EditButton type="info" item="overview_content" text="내용" />
                </p>

                <div className="overview-box">
                  <div className="icon">
                    <i className="ri-compass-3-line"></i>
                  </div>
                  <h4>
                    {data.info.overview_subtitle1 ?? "사훈"}
                    <EditButton type="info" item="overview_subtitle1" text="부제목1" />
                  </h4>
                  <p style={PR}>
                    {data.info.overview_subcontent1 ?? "신의를 지키며 성실하고 투명하게 업무를 수행하고, 봉사의 정신을 기반으로 모든 입주민들에게 안전하고 편안한 주거 환경을 제공하여, 더 나은 삶과 공동체의 번영을 위해 노력하겠습니다."}
                    <EditButton type="info" item="overview_subcontent1" text="내용1" />
                  </p>
                </div>

                <div className="overview-box">
                  <div className="icon">
                    <i className="flaticon-public-relations"></i>
                  </div>
                  <h4>
                    {data.info.overview_subtitle2 ?? "경영이념"}
                    <EditButton type="info" item="overview_subtitle2" text="부제목2" />
                  </h4>
                  <p style={PR}>
                    {data.info.overview_subcontent2 ?? "전문적이고 혁신적인 관리를 통한 입주민 자산가치 증대 시설 및 입주민등에 대한 철저한 서비스 강화 입주민의 재산보호와 쾌적한 주거환경 조성 자산가치 증대의 극대화를 위한 차별화된 관리방법 연구 및 개발 전문관리를 통한 체계적 운영관리 합리적인 경영과 투명한 공개관리"}
                    <EditButton type="info" item="overview_subcontent2" text="내용2" />
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="overviewImg"
                data-aos="fade-left"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <img src={data.info.overview_bgUrl ?? "https://firebasestorage.googleapis.com/v0/b/dongwoo-315ab.appspot.com/o/development%2Finfo%2Foverview_bgUrl?alt=media&token=61ed5a41-6a6f-45c6-bed1-4dcd99f38de7"} 
                alt="동우개발 오버뷰" 
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{width:"100%"}}
                  objectFit="contain"
                  loading="lazy"
                />
                <EditButton
                  mode="image"
                  type="info" item="overview_bgUrl" text="배경이미지 삽입 (1000*910)"
                  defaultImg="/images/info/overview.png"
                />
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUsStyle1;
