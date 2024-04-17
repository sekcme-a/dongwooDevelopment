import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import useData from "context/data";
import EditButton from "components/admin/EditButton";

const PR = {position: 'relative'}

const OurServices = () => {
  const [windowWidth, setWindowWidth] = useState(null);
  const {data} = useData()

  const [list, setList] = useState([
    {
      text:"동우개발의 공동주택관리는 효율적이고 안정된 시스템으로 주민 만족도를 최우선으로 합니다.",
      title:"공동주택관리",
      url:"/management/housing"
    },
    {
      text:"동우개발의 빌딩종합관리는 첨단 기술과 전문 인력을 통해 건물 운영을 최적화하며 안전과 편의를 제공합니다.",
      title:"빌딩종합관리",
      url: "/management/building"
    },
    {
      text:"동우개발의 부동산자산관리는 전략적 투자 및 유지보수를 통해 안정적이고 수익성 높은 자산 운용을 목표로 합니다.",
      title:"PM",
      url:"/management/estate"
    },
    {
      text:"동우개발의 인사관리는 체계적이고 효율적인 직원 관리 시스템을 통해 역량 개발과 웰빙을 중시하여 조직의 성공을 지원합니다.",
      title:"인사관리",
      url: "/management/hrd"
    },
    {
      text:"동우개발의 회계관리는 정확하고 투명한 재무운용으로 안정적인 경영을 유지하며 투자자와의 신뢰를 고취합니다.",
      title:"회계관리",
      url: "/management/financial"
    },
    {
      text:"동우개발은 철저한 경비보안관리를 통해 기업 및 자산의 안전을 유지하며, 최신 기술과 전문 경비팀을 활용하여 효과적인 보안 시스템을 운영하고 있습니다.",
      title:"경비보안관리",
      url: "/management/security"
    }
  ])
  

  useEffect(() => {
    // Function to update window width
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Initial window width
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
// 991
  const icons = [
    "ri-cast-line",
    "ri-codepen-line",
    "ri-stack-line",
    "ri-compass-line",
    "ri-code-line",
    "ri-codepen-line",
  ]
  // ri-computer-line

  useEffect(() => {
    if(data?.main?.ourServices_list) setList(data.main.ourServices_list)

  },[data.main.ourServices_list])


  return (
    <>
        <div className="services-area bg-F9F5F4 pt-100 pb-75">
        <div className="container" style={PR}>
          <EditButton
            mode="arrOfObj_services"
            type="main" item="ourServices_list" text="내용을 입력해주세요."
          />
          <div className="section-title">
            <span>관리 분야</span>
            <h2>동우 개발의 관리 분야를 소개합니다.</h2>
          </div>

          <div className="row justify-content-center">
            {list.map((item, index) => (
              <div className="col-lg-4 col-md-6" key={index} >
                <div className="single-services-box" style={windowWidth>=992 ? {minHeight: "340px"} : {}}>
                  <div className="icon">
                    <i className={`${icons[index]}`}></i>
                  </div> 
                  <h3>
                    <Link href={item.url} >
                      <a>{item.title}</a>
                    </Link>
                  </h3>
                  <p style={{wordBreak:"keep-all"}}>
                    {item.text}
                  </p>
                  <Link href={item.url}>
                    <a className="services-btn">자세히 보기</a>
                  </Link>
                  <div className="back-icon">
                    <i className="ri-cast-line"></i>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
