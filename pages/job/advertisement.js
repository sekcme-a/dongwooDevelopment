

import React, {useState, useEffect} from "react";
import Navbar from "components/Layout/Navbar";
import PageBanner from "components/Common/PageBanner";
import Footer from "components/Layout/Footer/Footer";
import { CircularProgress, Grid } from "@mui/material"

import AdvertisementCompo from "components/job/Advertisement"

import useData from "context/data";

import HeadMeta from "components/HeadMeta";

const Advertisement = () => {

  const {thumbnailsList, fetch_thumbnails_list} = useData()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=> {
    const fetchData = async () => {
      if(thumbnailsList["advertisement"]) setIsLoading(false)
      else {
        await fetch_thumbnails_list("advertisement")
        setIsLoading(false)
      }
    }
    fetchData()
  },[])

  return(
    <>

      <HeadMeta
        title="채용공고 - 동우개발"
        description="동우개발의 채용공고입니다. (주)동우개발은 공동주택관리 분야를 선도하는 기업이 되겠습니다."
        url="https://xn--h49at0mlnhpml.kr/job/advertisement"
      />


      <Navbar />

      <PageBanner title="채용공고" subtitle="Job Advertisement" homeText="채용공고" homeUrl="/job/advertisement" />

      {isLoading ?
        <div style={{width:"100vw", marginTop:'100px',marginBottom:"100px",  display:"flex", justifyContent:"center"}}><CircularProgress /></div>
         : 
        <AdvertisementCompo list={thumbnailsList["advertisement"]}/>
        }

      <Footer />
    </>
  )
}

export default Advertisement