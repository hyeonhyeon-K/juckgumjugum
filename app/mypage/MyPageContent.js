'use client'
import { FaRegBell, FaRegUser, FaShoppingBasket } from "react-icons/fa";

export default function Mypage(){
  return(
    <div>
            <div className="mypageTitleBox">
                <div className="mypageTitle">마이페이지</div>
                <div className="mypageSubTitle">회원정보 변경</div>
            </div>
            <div className="mypageContent">
                <div className="mypageSideBar">
                    <div className="mypageSidebarC">
                        <FaRegBell id="mypageIcon"/>
                            알림함 가기
                        </div>
                    <div className="mypageSidebarC">
                        <FaRegUser id="mypageIcon"/>
                            회원정보 변경
                        </div>
                    <div className="mypageSidebarC">
                        <FaShoppingBasket id="mypageIcon"/>
                            장바구니
                        </div>
                </div>
                <div className="mypageInputName">
                    <div className="mypageInputNameId">아이디</div>
                    <div className="mypageInputNameId1">이메일</div>
                    <div className="mypageInputNameId1">비밀번호</div>
                    <div className="mypageInputNameId1">비밀번호 확인</div>
                </div>
                <form className="mypageInput">
                    <input placeholder=" jukgeum"></input>
                    <input placeholder=" jukgeum@naver.com"></input>
                    <input placeholder=" ******"></input>
                    <input placeholder=" ******"></input>
                    <button>변경하기</button>
                </form>
            </div>
        </div>
  )
}