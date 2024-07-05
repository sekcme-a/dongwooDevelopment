import styles from "components/management/Landscape.module.css"
import useScrollFadeIn from "hooks/useScrollFadeIn"
import { Grid } from "@mui/material"
import { useState, useEffect } from "react"

import {initial, start} from "hooks/useAni"

import {motion, useAnimation} from "framer-motion"
import { useInView } from "react-intersection-observer"

import AddReactionOutlinedIcon from '@mui/icons-material/AddReactionOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import SpeedIcon from '@mui/icons-material/Speed';

import EditButton from "components/admin/EditButton"
import useData from "context/data"

import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import { useMonitorSize } from "components/hooks/useMonitorSize"


const Security = () => {

  const {data,} = useData()
  const {monitorWidth} = useMonitorSize()
  const ani1 = useAnimation()
  const [inViewRef, inView] = useInView({ threshold: .2})
  const ani2 = useAnimation()
  const [inViewRef2, inView2] = useInView({threshold: .2})
  const ani2_1 = useAnimation()
  const ani3 = useAnimation()
  const [inViewRef3, inView3] = useInView({threshold: .2})
  const ani4 = useAnimation()
  const [inViewRef4, inView4] = useInView({threshold: .2})
  const ani5 = useAnimation()
  const [inViewRef5, inView5] = useInView(monitorWidth>900 ? {threshold: 0.2}: {threshold: 0.1})
  const ani6 = useAnimation()
  const [inViewRef6, inView6] = useInView({threshold: .2})
  const ani7_1 = useAnimation();  const ani7_2 = useAnimation();  const ani7_3 = useAnimation(); 
  const [inViewRef7, inView7] = useInView({threshold: .2})
  const [inViewRef8, inView8] = useInView({threshold: .2})

  if (inView) {ani1.start({...start(1,0)})}
  if (inView2) {ani2.start({...start(1,0.5)})}
  if (inView3) {ani3.start({...start(1,0)})}
  if (inView4) {ani4.start({...start(1,0)})}
  if (inView5) {ani5.start({...start(1,0)})}
  if (inView5) {ani6.start({...start(1,0.2)})}
  if (inView5) {ani7_1.start({...start(1,0.4)});ani7_2.start({...start(1,0.6)});ani7_3.start({...start(1,0.8)})}
  if (inView8) {ani8.start({...start(1,0)})}




  return(
    <div className={styles.main_container}>
      <motion.h6 {...initial(0,0,30)} animate={{...start(1,0)}} style={{position:"relative"}}>
        {data.management.landscape_text1}
        <EditButton type="management" item="landscape_text1" text="텍스트"  />
      </motion.h6>
      <div style={{display:"flex", justifyContent:"center"}}>
        <motion.img {...initial(0,0,30)} animate={ani2} ref={inViewRef2} src={data.management.landscape_imgUrl1} alt="조경,미화관리" style={{position:"relative"}}/>
      </div>
      <div style={{position:"relative"}}>
        <EditButton type="management" item="landscape_imgUrl1" text="이미지 삽입" mode="image" defaultImg="https://cdn.imweb.me/thumbnail/20210407/f36753181e009.png"/>
      </div>
      
      <motion.h6 {...initial(0,0,30)} animate={ani3} ref={inViewRef3}style={{position:"relative", marginTop:"80px"}}>
        {data.management.landscape_text2}
        <EditButton type="management" item="landscape_text2" text="텍스트"  />
      </motion.h6>
      <div style={{display:"flex", justifyContent:"center"}}>
        <motion.img {...initial(0,0,30)} animate={ani4} ref={inViewRef4} src={data.management.landscape_imgUrl2}  alt="동우개발의 조경미화관리"></motion.img>
      </div>
      <div style={{position:"relative"}}>
        <EditButton type="management" item="landscape_imgUrl2" text="이미지 삽입" mode="image" defaultImg="https://cdn.imweb.me/thumbnail/20210422/cd4ec2f5e5a20.png"/>
      </div>

      <motion.ul className={styles.list1_container} ref={inViewRef5} {...initial()} animate={ani5}>
        <EditButton type="management" item="landscape_list" text="내용" mode="arrOfObj_list"/>
        {data?.management?.landscape_list?.map((item, index) => (
          <li key={index}>
            <div className={styles.title_container}>
              <CheckRoundedIcon style={{color: "green"}}/>
              <h4>{item.title}</h4>
            </div>
            <p style={{whiteSpace:"pre-line"}}>{item.text}</p>
          </li>
        ))}
      </motion.ul>
    </div>
  )
}

export default Security




