import { useEffect, useState } from "react";
import useUserData from "context/userData"
import useData from "context/data";
import { useRouter } from "next/router";

import IdAndPassword from "components/admin/IdAndPassword";

const Login = () => {
  const {user, userData} = useUserData()
  const {setIsEditMode} = useData()
  const router = useRouter()

  useEffect(()=>{ 
    if(user && userData && (userData.roles.includes("development_super_admin")||userData.roles.includes("super_admin"))){
      setIsEditMode(true)
      router.push("/")
    }
  },[user, userData])
  
  return(
    <div style={{width:"100vw", height:"100vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
      <div style={{width:"300px"}}>
        <IdAndPassword style={{marginTop:"40px"}}/>
      </div>
    </div>
  )
}

export default Login