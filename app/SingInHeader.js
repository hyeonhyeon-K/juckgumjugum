"use client"

import { useRouter } from "next/navigation";
import React from "react"
import {signOut} from "next-auth/react"


export default async function Header(){
    let router = useRouter()
    const handleLogout = async () => {
      await signOut({ callbackUrl: "/" });
      router.push("/");
    };
  
    return(
        <header>
          <div className='headerbox'>
          <div className='title' onClick={()=>{router.push('/') }}>적금 저금 </div>
            <div className='login'>
              <div className='loginBox' onClick={()=>{router.push('/shoplist') }}>장바구니</div>
              <div className='loginBox'onClick={()=>{router.push('/mypage') }}>마이페이지</div>
              <div onClick={()=>{router.push('/') }}>
                <div className='loginBox'onClick={handleLogout}>로그아웃</div>
              </div>
            </div>
          </div> 
            <div className='headerMenu'>
              <div id='headerMenuBox' onClick={()=>{router.push('/') }}>홈</div>
              <div id='headerMenuBox' onClick={()=>{router.push('/deposit') }}>적금</div>
              {/* <div id='headerMenuBox' onClick={()=>{router.push('/') }}>소개</div> */}
                <div className='searchBox'>
                  <div id='headerMenuSearchBox'></div>
                </div>
            </div>
        </header>
    )
}