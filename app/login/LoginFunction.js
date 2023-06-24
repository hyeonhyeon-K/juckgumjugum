'use client'

import Link from "next/link";
import React from "react"
import {signIn} from "next-auth/react"
import { useSelector } from "react-redux"


export default function LoginFunction(){
    let a = useSelector((state) => state.user ) 
    console.log(a)
    return(
        <div className="headerdiv">
            <div className="loginbody">
                <div className="loginBox">
                    <div className="loginBenner"></div>
                    <div className="loginContentBox">
                        <Link href={'/'} className='links'><div id="loginTitle">적금 저금</div></Link>
                        <form  method ="post" action ="/api/auth/signin"  className="loginInputBox">
                            <input placeholder=" ID" name="email" type="id"></input>
                            <input placeholder=" PW" name="password" type="password"></input>
                            <button id="loginButton"  type="submit">로그인</button>
                        </form>
                        <div className="loginOption">
                            <Link href={'/'} className='links'><span >게스트 로그인</span></Link>
                            
                            <Link href={'/signin'} className='links'><span>회원가입</span></Link>
                            
                        </div>
                        <div className="loginSocial">
                            <div>구글</div>
                            <div>네이버</div>
                            <div>카카오</div>
                            <button  onClick={()=>{ signIn()}}>깃헙</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}