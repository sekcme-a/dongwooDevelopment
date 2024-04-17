import useData from "context/data";
import React from "react";
import EditButton from "components/admin/EditButton";
import Image from "next/image";

const Greet = () => {
  const PR = {position:"relative"}
  const {data} = useData()
  
  return (
    <>
      <div className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div
              className="col-lg-3 col-md-12"
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="about-image">
                <Image
                  src={data?.info?.greet_bgUrl ?? "https://firebasestorage.googleapis.com/v0/b/dongwoo-315ab.appspot.com/o/development%2Finfo%2Fgreet_bgUrl?alt=media&token=d19c87c4-cbfe-4772-a46d-0c9c8fd7f8dc"} alt="프로필 사진"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{width:'100%'}}
                  objectFit="contain"
                  loading="lazy"
                />
                <EditButton
                  mode="image"  
                  type="info" item="greet_bgUrl" text="배경이미지 삽입"
                  defaultImg="/images/info/greet.png"
                />
    
              </div>
            </div>

            <div
              className="col-lg-9 col-md-12"
              data-aos="fade-left"
              data-aos-delay="50"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="about-content">
                <span>인사말</span>
                <h3>
                  {data.info.greet_title ?? "안녕하십니까, 주식회사 동우개발 대표이사 안이재 입니다."}
                  <EditButton type="info" item="greet_title" text="제목" />
                </h3>
                <p style={{...PR, whiteSpace:"pre-line"}}>
                  {data.info.greet_content ?? `존경하는 주식회사 동우개발 고객 여러분, 안녕하세요.

주식회사 동우개발의 대표이사로서 여러분께 인사 드립니다. 먼저, 소중한 시간을 내어 저희 회사를 선택해 주셔서 감사드립니다.

주식회사 동우개발은 항상 안전하고 편리한 주거환경을 제공하기 위해 최선을 다하고 있습니다. 전문적이고 경험이 풍부한 직원들과 함께, 고객 여러분의 편의를 위해 최선을 다하고 있습니다.

우리는 항상 개선과 혁신을 추구하며, 여러분의 의견과 피드백을 존중하고 반영하고자 노력하고 있습니다. 주식회사 동우개발은 늘 믿음과 신뢰를 바탕으로 고객 여러분과 함께 성장해 나가고자 합니다.

앞으로도 주식회사 동우개발은 안전한 주거환경과 원활한 관리서비스를 제공하여 여러분의 만족을 도모할 것을 약속 드립니다. 언제든지 소통의 창구를 열어 두고, 어떠한 문제나 의견이 있으시면 언제든지 말씀해 주시기 바랍니다.

다시 한번, 저희 주식회사 동우개발을 선택해 주셔서 감사합니다. 앞으로도 보다 나은 서비스를 제공하기 위해 최선을 다하겠습니다.

감사합니다.`}
                  <EditButton type="info" item="greet_content" text="내용" />

                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-shape-2">
          <img src="/images/about/shape-2.png" alt="동우개발" />
        </div>
      </div>
    </>
  );
};

export default Greet;
