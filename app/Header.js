"use client"

import { useRouter } from "next/navigation";
import {signIn} from "next-auth/react"
// import { FaSearch } from "react-icons/fa";
import React from "react"
import Alram from "./Alram"
import styles from "./component/HomeCard.module.css"



export default function Header(){
  let router = useRouter()

 
    return(
        <header className={styles.headers}>
          <Alram/>
          <div className={styles.headerbox}>
          <h1 className={styles.title} onClick={()=>{router.push('/') }}>적금 저금 </h1>
            <div className={styles.login}>
              <div className={styles.loginbox}  onClick={()=>{ signIn()}}>로그인과 회원가입</div>
            </div>
          </div> 
            <div className={styles.headerMenu}>
              <div id={styles.headerMenuBox} onClick={()=>{router.push('/') }}>홈</div>
              <div id={styles.headerMenuBox} onClick={()=>{router.push('/deposit') }}>적금</div>
              <div id={styles.headerMenuBox} onClick={()=>{router.push('/deposity') }}>예금</div>
              <div id={styles.headerMenuBox} onClick={()=>{router.push('/bank') }}>은행적금</div>
              {/* <div id={styles.headerMenuBox} onClick={()=>{router.push('/') }}>소개</div>   */}
                {/* <div className='searchBox'>
                  <div id='headerMenuSearchBox'><FaSearch id="serchIcon"/></div>
                </div> */}
            </div>
        </header>
        
    )
}