'use client'
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function LoginFunction(){
    const router = useRouter()
    return(
        <div className="headerdiv">
            <div className="loginbody">
                <div className="loginBox">
                    <div className="loginBenner"></div>
                    <div className="loginContentBox">
                        <Link href={'/'} className='links'><div id="loginTitle">적금 저금</div></Link>
                        <from className="loginInputBox">
                            <input placeholder=" ID"></input>
                            <input placeholder=" PW"></input>
                            <Link href={'/'} className='links'><button id="loginButton">로그인</button></Link>
                        </from>
                        
                        <div className="loginOption">
                            <Link href={'/'} className='links'><span >게스트 로그인</span></Link>
                            
                            <Link href={'/signin'} className='links'><span>회원가입</span></Link>
                            
                        </div>
                        <div className="loginSocial">
                            <div>구글</div>
                            <div>네이버</div>
                            <div>카카오</div>
                            <div>깃헙</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}