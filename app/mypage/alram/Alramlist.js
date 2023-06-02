'use client'
import { FaRegBell, FaRegUser, FaShoppingBasket } from "react-icons/fa";
import Image from 'next/image'
import cukmin from "./../../../public/cukmin.png"


export default function Alramlist(){
  return(
    <div>
            <div className="mypageTitleBox">
                <div className="mypageTitle">마이페이지</div>
                <div className="alramSubTitle">알림함</div>
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
                        내 적금 목록
                        </div>
                </div>
                <div>
                    <div className="alramListBoxBody">
                        <div className='alramListBox'>
                            <div className="alramListFlex">
                                <Image src={cukmin} alt={'국민은행'} width="50" height="50" className='alramImg'/>
                                <div className='alramList'>
                                        <div className='shopListContent'>
                                            <div className='alramContentTitle'>희망 예금</div>
                                            <div className='alramContentC'>예금 만기일이 30일 남았습니다!</div>
                                        </div>
                                </div>
                            </div>
                            <div className="alrambox" />
                            {/* 여기서부터 */}
                            <div className="alramListFlex1">
                                <Image src={cukmin} alt={'국민은행'} width="50" height="50" className='alramImg'/>
                                <div className='alramList'>
                                        <div className='shopListContent'>
                                            <div className='alramContentTitle'>희망 예금</div>
                                            <div className='alramContentC'>예금 만기일이 30일 남았습니다!</div>
                                        </div>
                                </div>
                            </div>
                            {/* 여기까지 map 돌리면 리스트 댐 */}
                            <div className="alrambox" />
                            <div className="alramListFlex1">
                                <Image src={cukmin} alt={'국민은행'} width="50" height="50" className='alramImg'/>
                                <div className='alramList'>
                                        <div className='shopListContent'>
                                            <div className='alramContentTitle'>희망 예금</div>
                                            <div className='alramContentC'>예금 만기일이 30일 남았습니다!</div>
                                        </div>
                                </div>
                            </div>
                            {/* 이렇게 */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}