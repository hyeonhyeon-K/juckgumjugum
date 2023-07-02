"use client"

import { useRouter } from "next/navigation";
import {signIn} from "next-auth/react"
// import { FaSearch } from "react-icons/fa";
import React, {useEffect} from "react"
import Alram from "./Alram"



export default function Header(){
  let router = useRouter()
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position)
    });
  },[])
 
    return(
        <header>
          <Alram/>
          <div className='headerbox'>
          <div className='title' onClick={()=>{router.push('/') }}>적금 저금 </div>
            <div className='login'>
              <div className='loginBox'  onClick={()=>{ signIn()}}>로그인과 회원가입</div>
            </div>
          </div> 
            <div className='headerMenu'>
              <div id='headerMenuBox' onClick={()=>{router.push('/') }}>홈</div>
              <div id='headerMenuBox' onClick={()=>{router.push('/deposit') }}>적금</div>
              <div id='headerMenuBox' onClick={()=>{router.push('/deposity') }}>예금</div>
              {/* <div id='headerMenuBox' onClick={()=>{router.push('/') }}>소개</div>   */}
                {/* <div className='searchBox'>
                  <div id='headerMenuSearchBox'><FaSearch id="serchIcon"/></div>
                </div> */}
            </div>
        </header>
        
    )
}