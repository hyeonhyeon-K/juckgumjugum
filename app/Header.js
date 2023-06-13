"use client"

import { useRouter } from "next/navigation";
import React from "react"

export default function Header(){
    let router = useRouter()
    return(
        <header>
          <div className='headerbox'>
          <div className='title' onClick={()=>{router.push('/') }}>적금 저금 </div>
            <div className='login'>
              <div className='loginBox' onClick={()=>{router.push('/login') }}>로그인</div>
              <div className='loginBox'onClick={()=>{router.push('/signin') }}>회원가입</div>
            </div>
          </div> 
            <div className='headerMenu'>
              <div id='headerMenuBox' onClick={()=>{router.push('/') }}>홈</div>
              <div id='headerMenuBox' >적금</div>
              <div id='headerMenuBox' onClick={()=>{router.push('/deposit') }}>예금</div>
              <div id='headerMenuBox' onClick={()=>{router.push('/') }}>소개</div>  
                <div className='searchBox'>
                  <div id='headerMenuSearchBox'></div>
                </div>
            </div>
        </header>
    )
}