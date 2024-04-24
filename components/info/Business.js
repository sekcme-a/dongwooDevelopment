import EditButton from "components/admin/EditButton";
import useData from "context/data";
import Image from "next/image";
import React from "react";

const PR = {position: "relative"}

const Business = () => {
  const {data} = useData()


  return (
    <>
      <div className="greetZone ptb-100">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-4 col-md-12" style={PR}>
              {/* 585*600 */}
                <img
                  src={data?.info?.business_bgUrl ?? "https://firebasestorage.googleapis.com/v0/b/dongwoo-315ab.appspot.com/o/development%2Finfo%2Fbusiness_bgUrl?alt=media&token=eed7d5ce-e2c4-42cd-878a-9f5c5fb9b43b"}
                  alt="management"
                  data-aos="fade-down"
                  data-aos-delay="50"
                  data-aos-duration="500"
                  data-aos-once="true"
                  width={586}
                  height={600}
                  loading="lazy"
                />
                <EditButton
                  mode="image"
                  type="info" item="business_bgUrl" text="배경이미지 삽입 (1170*1200)"
                  defaultImg="/images/info/business.png"
                />

            </div>

            <div
              className="col-lg-8 col-md-12"
              data-aos="fade-left"
              data-aos-delay="50"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="greetCon">
                <span>경영방침 | Management Policy</span>
                <h3>
                  {data.info.business_title ?? "지속 가능한 혁신을 통한 동우개발의 성장과 발전"}
                  <EditButton type="info" item="business_title" text="제목" />
                </h3>
                <p style={{whiteSpace:"pre-line", wordBreak:"keep-all", ...PR}}>
                  {data.info.business_content ?? `우리는 동우개발로서 지속 가능한 혁신을 통해 고객들에게 가치를 제공하고, 사회와 환경에 긍정적인 영향을 미치며 성장하고자 합니다.

우리의 비전은 세계적으로 인정받는 혁신 기업으로서, 글로벌 시장에서 지속적인 성장을 이루어내어 사회 발전에 기여하는 것입니다.

우리의 미션은 고객들에게 최상의 제품과 서비스를 제공하여 그들의 성공을 돕고, 동시에 지속 가능한 비즈니스 모델을 구축하여 환경과 사회에 긍정적인 영향을 미치는 것입니다.

1. 고객 중심: 고객의 만족을 최우선으로 하고, 그들의 니즈에 부응하는 제품과 서비스를 제공합니다.
2. 혁신과 창의성: 지속적인 혁신과 창의성을 통해 미래의 도전에 대응하며 새로운 가치를 창출합니다.
3. 윤리적 리더십: 윤리적인 행동과 책임감 있는 리더십을 바탕으로 사회적 책임을 다하고 지속가능한 경영을 실현합니다.

지속가능성과 혁신을 기반으로 한 전략적 투자와 파트너십을 통해 글로벌 시장에서의 경쟁력을 강화하고, 사회적 가치 창출에 집중하여 성장합니다. 우리는 지속 가능한 미래를 위해 지속적인 연구 및 개발에 투자하며, 고객과의 긴밀한 협력을 통해 더 나은 미래를 만들어 나갑니다.`}
                  <EditButton type="info" item="business_content" text="내용" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Business;
