

// import { useRouter } from "next/navigation";
import React from "react"

export default function SigninFunction(){
    
    // const router = useRouter()
    return(
        <div className="headerdiv">
            <div className="signinbox">
                <div className="signinFont">회원가입</div>
                <div className="signinDiv">
                    <form method ="post" action ="/api/auth/signup" className="signinForm">
                        <div className="inputId">
                            <p>아이디</p>
                            <input name="id" type="text"></input>
                        </div>
                        <div className="inputEmail">
                            <p>이메일</p>
                            <input name="email" type="text"></input>
                        </div>
                        <div className="inputPw">
                            <p>비밀번호</p>
                            <input name="password" type="password"></input>
                        </div>
                        <div className="inputPwc">
                            <p>비밀번호 확인</p>
                            <input name="SPW" type="password"></input>
                        </div>
                        <div className="IN">
                            <p>본인인증</p>
                            <button></button>
                            <p>알림동의</p>
                            <button></button>
                        </div>
                        <button type="submit" className="signinButton">가입하기</button>
                    </form>
                </div>
            </div>
        </div>
    )
}