'use client'

import { useRouter } from "next/navigation";

export default function SigninFunction(){
    
    const router = useRouter()
    return(
        <div className="headerdiv">
            <div className="signinbox">
                <div className="signinFont">회원가입</div>
                <div className="signinDiv">
                    <form className="signinForm">
                        <div className="inputId">
                            <p>아이디</p>
                            <input></input>
                        </div>
                        <div className="inputEmail">
                            <p>이메일</p>
                            <input></input>
                        </div>
                        <div className="inputPw">
                            <p>비밀번호</p>
                            <input></input>
                        </div>
                        <div className="inputPwc">
                            <p>비밀번호 확인</p>
                            <input></input>
                        </div>
                        <div className="IN">
                            <p>본인인증</p>
                            <button></button>
                            <p>알림동의</p>
                            <button></button>
                        </div>
                        <button className="signinButton" onClick={()=>{router.push('/') }}>가입하기</button>
                    </form>
                </div>
            </div>
        </div>
    )
}