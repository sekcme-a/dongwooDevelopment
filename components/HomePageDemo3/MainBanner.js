import React from "react";
import Link from "next/link";
import EditButton from "components/admin/EditButton";
import useData from "context/data";
import Image from "next/image";

const MainBanner = () => {
  const {data} = useData()


  return (
    <>
      <div className="mbwra">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-12">
              <div className="mbwrapcon" style={{marginLeft: "10px"}}>
                <span
                  data-aos="fade-right"
                  data-aos-delay="50"
                  data-aos-duration="500"
                  data-aos-once="true"
                >
                  DongWoo Development
                 
                </span>
                <h1
                  data-aos="fade-right"
                  data-aos-delay="70"
                  data-aos-duration="700"
                  data-aos-once="true"
                  style={{wordBreak:'keep-all', whiteSpace:"pre-line", position:"relative"}}
                >
                  {data.main.mainBanner_title ?? `함께 동행하는,\n동우개발`}
                   <EditButton type="main" item="mainBanner_title" text="제목" />
                </h1>
                <p
                  data-aos="fade-right"
                  data-aos-delay="580"
                  data-aos-duration="800"
                  data-aos-once="true"
                >
                  {data.main.mainBanner_subtitle ?? 
                  "(주)동우개발은 공동주택을 전문으로 하는 관리회사입니다. 고객 여러분의 안전하고 편안한 주거환경을 지원하기 위해 최선을 다하고 있습니다. 전문적이고 친절한 운영진과 체계적인 시스템을 통해 건물 유지보수, 시설 관리, 안전 및 보안 서비스 등을 효율적으로 제공하고 있습니다."
                  }
                  <EditButton type="main" item="mainBanner_subtitle" text="부제목" />
                </p>

                <div
                  className="dev-banbutton"
                  data-aos="fade-right"
                  data-aos-delay="90"
                  data-aos-duration="900"
                  data-aos-once="true"
                >
                  <Link href="/info/overview">
                    <a className="dev_mainbutton">회사소개 보러가기</a>
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-left"
              data-aos-delay="50"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div
                className="dev-mbwrimg"
              >
                {/* 839*1080 */}
                <Image
                  src={data.main.mainBanner_bannerBg ?? "/images/main-banner/banner.png"} alt="동우개발 이미지" 
                  width={700}
                  height={900}
                  objectFit="contain"
                  quality={40}
                  loading="lazy"
                />
                <div
                  className="dev_bwshape"
                >
                  <Image
                    src="/images/main-banner/shape-1.png"
                    alt="패턴"
                    data-aos="fade-down"
                    data-aos-delay="80"
                    data-aos-duration="800"
                    data-aos-once="true"
                    width={100}
                    height={100}
                  />
              </div>
                <EditButton
                  type="main" item="mainBanner_bannerBg" text="배경이미지 삽입" mode="image" defaultImg="/images/main-banner/banner.png" 
                  style={{position:"absolute", top: 150, right: 100}}
                />
                <div
                  className="dev_bwshapetwo"
                >
                  
                  <Image
                    src="/images/main-banner/shape-2.png"
                    alt="패턴2"
                    data-aos="fade-up"
                    data-aos-delay="90"
                    data-aos-duration="900"
                    data-aos-once="true"
                    width={180}
                    height={100}
                  />

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
