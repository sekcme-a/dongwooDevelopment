import EditButton from "components/admin/EditButton";
import useData from "context/data";
import React, {useState, useEffect} from "react";
import useScrollCount from "utils/useScrollCount";

const PR = {position:"relative"}

const ScrollCount = () => {
  const {data} = useData()

  const animatedItem = useScrollCount(data?.main?.scrollCount_count1,0,1)
  const animatedItem2 = useScrollCount(data?.main?.scrollCount_count2,0,1)
  const animatedItem3 = useScrollCount(data?.main?.scrollCount_count3,0,1)


  return (
    <>
      <div className="dev-scrollZone bg-three pt-100 pb-75">
        <div className="container">
          <div className="dev-serviceTitle">
            <span>관리 현황</span>
            <h2 style={{position:"relative", color:"black"}}>
              {console.log(data.main)}
              {data.main.scrollCount_title ?? "동우 개발의 관리 현황입니다."}
              <EditButton type="main" item="scrollCount_title" text="제목"/>
            </h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="dev-scroll-box">
                <div className="icon">
                  <i className="ri-building-2-line"></i>
                </div>
                <h3 {...animatedItem}/>
                <EditButton type="main" item="scrollCount_count1" text="숫자입력"/>
                <p style={PR}>
                  {data.main.scrollCount_text1 ?? "관리 단지"}
                  <EditButton type="main" item="scrollCount_text1" text="문구입력"/>
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="dev-scroll-box">
                <div className="icon">
                  <i className="ri-building-3-line"></i>
                </div>
                <h3 {...animatedItem2}/>
                <EditButton type="main" item="scrollCount_count2" text="숫자입력"/>
                <p style={PR}>
                  {data.main.scrollCount_text2 ?? "관리 세대"}
                  <EditButton type="main" item="scrollCount_text2" text="문구입력"/>
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="dev-scroll-box" >
                <div className="icon">
                  <i className="ri-global-line"></i>
                </div>
                <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                  <h3 {...animatedItem3}/>
                  <EditButton type="main" item="scrollCount_count3" text="숫자입력"/>
                  <h3 style={{fontSize: "23px"}}>m<sup>2</sup></h3>
                </div>
                <p style={PR}>
                  {data.main.scrollCount_text3 ?? "관리 면적"}
                  <EditButton type="main" item="scrollCount_text3" text="문구입력"/>
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default ScrollCount;
