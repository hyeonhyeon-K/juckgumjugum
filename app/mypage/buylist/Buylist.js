'use client'
import { FaShoppingBasket } from "react-icons/fa";
import Image from 'next/image'
import React from "react"
import {useRouter} from 'next/navigation'

export default function Mypage(result){
    const mypagemap = result.result
    const router = useRouter()

  return(
    <div>
            <div className="mypageTitleBox">
                <div className="mypageTitle">마이페이지</div>
                <div className="mypageSubTitle">내 적금 목록</div>
            </div>
            <div className="mypageContent">
                <div className="mypageSideBar">
                    {/* <div className="mypageSidebarC">
                        <FaRegBell id="mypageIcon"/>
                            알림함 가기
                        </div> */}
                    {/* <div className="mypageSidebarC">
                        <FaRegUser id="mypageIcon"/>
                            회원정보 변경
                        </div> */}
                    <div className="mypageSidebarC">
                        <FaShoppingBasket id="mypageIcon"/>
                        내 적금 목록
                        </div>
                </div>
                <div>
                <div className="buyListBoxBody">
                    <div className='buyListBox'>
                        
                        {/* 여기서부터 아래 표시까지 map 걸면 댐 */}

                        {
                            mypagemap.length === 0 ? <div className="buylistAlarm">등록한 적금,예금이 없습니다.</div>
                            :  mypagemap.map((a)=>(
                                <>
                                <div className="buyListFlexBox" key={a}/>
                                <div className="buyListflex">
                                <Image src={`/${a.bank}.png`} alt={'국민은행'} width="55" height="55" className='shopListImg'/>
                            
                                <div className='shopList'>
                                        <div className='buyListTag'>
                                            <div className='shopListTagD'>{a.tag}</div>
                                            <div className='shopListTagD1'>{a.tag1}</div>
                                            <div className='shopListTagD1'>{a.tag3}</div>
                                        </div>
                                        <div className='shopListContent'>
                                            <div className='buyListContentTitle'>{a.title}</div>
                                            <div className='shopListContentC'>{a.content}</div>
                                            <a className='shopListContentNum'>{a.high}</a>
                                            <div className='buylistContentExBox'>
                                                <div className='buyListContentEx'>최고연</div>
                                                <div className='buyListContentPer'>%</div>
                                            </div>
                                            <div className='buyContentExBox'>
                                                <div className='buyContentEx1'>기본 2.45%</div>
                                                <div className='buyContentEx1Ex'>({a.long}개월)</div>
                                            </div>
                                        </div>
                                </div>
                                <form className="buyListDeleteForm">
                                    <span onClick={()=>(
                                        fetch('/api/delete', {method : 'DELETE', _id: a._id}).then(()=>{
                                            router.refresh()
                                        }))}
                                        className="buyListDelete">삭제</span>
                                </form>
                                </div>
                                </>
                            ))
                        }
                       
                      
                     </div>
                </div>
                </div>
            </div>
        </div>
  )
}