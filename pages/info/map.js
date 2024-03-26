

import React, {useState, useEffect} from "react";
import Navbar from "components/Layout/Navbar";
import PageBanner from "components/Common/PageBanner";
import Footer from "components/Layout/Footer/Footer";

import HowToGo from "components/info/HowToGo";
import KakaoMap from "components/info/KakaoMap";

import HeadMeta from "components/HeadMeta";

import useData from "context/data";
const Map = () => {
  const {data, fetch_data} = useData()

  const [fetchedData, setFetchedData] = useState(
    {
      map_locX: 37.668769,
      map_locY: 127.035654,
      address: `서울특별시 도봉구 시루봉로 234, 동우빌딩 2층
  지번: 방학동 622-33`,
      subway: `1호선 방학역 1번 출구 도보 14분`,
      bus: `방학2동주민센터 92m (지선 1128,1139,1167 일반 72-3)
  방학2동공영주차장 110m (지선 1128,1139,1167 일반 72-3)`,
    }

  )


  
  useEffect(()=>{
    if(!data.info.fetched) fetch_data("info")
  },[])

  useEffect(() => {
    if(data?.info?.fetched){
      setFetchedData({
        ...data.info
      })
    }
  },[data?.info])

  return(
    <>

      <HeadMeta
        title="오시는 길 - 동우개발"
        description="동우개발은 서울특별시 도봉구 시루봉로 234, 동우빌딩 2층에 위치해 있습니다. 오시는 길을 안내드립니다."
        url="https://xn--h49at0mlnhpml.kr/info/map"
      />
      <Navbar />

      <PageBanner title="오시는 길" subtitle="Location" homeText="회사소개" homeUrl="/info/greet" />

      <KakaoMap title="동우개발" locX={fetchedData.map_locX} locY={fetchedData.map_locY} />

      <HowToGo />

      <Footer />
    </>
  )
}

export default Map