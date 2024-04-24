import { Grid } from "@mui/material"
import styles from "./One.module.css"
import { useEffect, useState } from "react"

import {initial, start} from "hooks/useAni"
// import {motion, useAnimation} from "framer-motion"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

import useData from "context/data"
import EditButton from "components/admin/EditButton"
import Image from "next/image"

const One = () => {
  const {data, fetch_data} = useData()

  const [fetchedData, setFetchedData] = useState({
    text1:`(주)동우개발은 공동주택관리 업계를 선도하고 있습니다.
  고객 감동서비스를 경영이념으로 실천하며 선진화 된 경영관리 기법을 현장에 적용 고객의 자산가치 증대를 최우선의 목표로 하고 있습니다.`,
    text2:`고객의 부동산자산가치 극대화를 최우선 목표로 전문지식을 갖춘 부동산 전문가/관리 전문가가 함께
  고객에게 최적화된 부동산 자산관리PM(PropertyManagement)서비스를 제공하고 있습니다.`,
    imgUrl: `https://cdn.imweb.me/thumbnail/20220512/446fb2e11de64.jpg`,
  })

  useEffect(()=>{
    if(!data.major.fetched) fetch_data("major")
  },[])

  useEffect(() => {
    if(data?.major?.fetched){
      setFetchedData({
        ...data.major
      })
    }
  },[data?.major])


  const ani1 = useAnimation()

  const [inViewRef, inView] = useInView({ threshold: .3})


  if (inView) {ani1.start({...start(1,0.5)})}


  return(
    <div className={styles.main_container}>
      <motion.h2 {...initial(0,-50,0)} animate={{...start(0.5,0.2)}} style={{position:"relative", fontWeight:"normal"}}>
        {fetchedData.one_text1 ?? "(주)동우개발은 공동주택관리 업계를 선도하고 있습니다. 고객 감동서비스를 경영이념으로 실천하며 선진화 된 경영관리 기법을 현장에 적용 고객의 자산가치 증대를 최우선의 목표로 하고 있습니다."}
        <EditButton type="major" item="one_text1" text="텍스트"  />
      </motion.h2>
      <motion.div {...initial(0,-50,0)} animate={{...start(0.5,0.4)}} className={styles.border} />
      <motion.h3 {...initial(0,50,0)} animate={{...start(1,1.0)}} style={{position:"relative", fontWeight:"normal"}}>
        {fetchedData.one_text2 ?? "공동주택 토탈 관리 서비스는 건물시설관리, 인력관리, 회계관리, 경비보안, 조경, 미화, 위생관리 등 다양한 전문분야를 아우르는 복잡한 업무로써 축적된 경험과 기술력을 바탕으로 서비스를 지원하고 있습니다."}
        <EditButton type="major" item="one_text2" text="텍스트"  />
      </motion.h3>
      <motion.div className={styles.image_container} ref={inViewRef} {...initial(0,0,50)} animate={ani1}>
        <img src={fetchedData.one_imgUrl} alt="부동산자산관리" width={900} height={900}objectFit="contain" loading="lazy" />
        <EditButton type="major" item="one_imgUrl" text="이미지 삽입" mode="image" defaultImg="https://cdn.imweb.me/thumbnail/20220512/446fb2e11de64.jpg"/>
      </motion.div>
    </div>
  )
}

export default One