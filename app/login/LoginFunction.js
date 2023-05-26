'use client'

export default function LoginFunction(){
    return(
        <div className="headerdiv">
            <div className="loginbody">
                <div className="loginBox">
                    <div className="loginBenner"></div>
                    <div className="loginContentBox">
                        <div id="loginTitle">적금 저금</div>
                        <from className="loginInputBox">
                            <input placeholder=" ID"></input>
                            <input placeholder=" PW"></input>
                            <button id="loginButton">로그인</button>
                        </from>
                        <div className="loginOption">
                            <span>게스트 로그인</span>
                            <span>회원가입</span>
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