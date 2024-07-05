import { Grid } from "@mui/material"
import styles from "./One.module.css"
import { useEffect, useState } from "react"

import {initial, start} from "hooks/useAni"
// import {motion, useAnimation} from "framer-motion"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

import useData from "context/data"
import EditButton from "components/admin/EditButton"
import { Image } from "mdi-material-ui"

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
      console.log(data.major)
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
        {fetchedData.two_text1}
        <EditButton type="major" item="two_text1" text="텍스트"  />
      </motion.h2>
      <motion.div {...initial(0,-50,0)} animate={{...start(0.5,0.4)}} className={styles.border} />
      <motion.h3 {...initial(0,50,0)} animate={{...start(1,1.0)}} style={{position:"relative", fontWeight:"normal"}}>
        {fetchedData.two_text2}
        <EditButton type="major" item="two_text2" text="텍스트"  />
      </motion.h3>
      <motion.div className={styles.image_container} ref={inViewRef} {...initial(0,0,50)} animate={ani1}>
        {console.log(fetchedData.two_imgUrl)}
        <img src={fetchedData.two_imgUrl} alt="시설 관리 서비스" style={{width: "100%"}}/>
        <EditButton type="major" item="two_imgUrl" text="이미지 삽입" mode="image" defaultImg="https://cdn.imweb.me/thumbnail/20220512/446fb2e11de64.jpg"/>
      </motion.div>
    </div>
  )
}

export default One