'use client'
import { FaRegBell, FaRegUser, FaShoppingBasket } from "react-icons/fa";
import Image from 'next/image'
import cukmin from "./../../../public/cukmin.png"


export default function Mypage(){
  return(
    <div>
            <div className="mypageTitleBox">
                <div className="mypageTitle">마이페이지</div>
                <div className="mypageSubTitle">내 적금 목록</div>
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
                <div>
                <div className="buyListBoxBody">
                    <div className='buyListBox'>
                        
                        <div className="buyListflex">
                        <Image src={cukmin} alt={'국민은행'} width="55" height="55" className='shopListImg'/>
                    
                        <div className='shopList'>
                                <div className='buyListTag'>
                                    <div className='shopListTagD'>tag</div>
                                    <div className='shopListTagD1'>tag</div>
                                    <div className='shopListTagD1'>tag</div>
                                </div>
                                <div className='shopListContent'>
                                    <div className='buyListContentTitle'>희망 예금</div>
                                    <div className='shopListContentC'>희망찬 내일을 위해 희망찬 미래를 위해 희망의 우리를 위해</div>
                                    <a className='shopListContentNum'>4.2</a>
                                    <div className='buylistContentExBox'>
                                        <div className='buyListContentEx'>최고연</div>
                                        <div className='buyListContentPer'>%</div>
                                    </div>
                                    <div className='buyContentExBox'>
                                        <div className='buyContentEx1'>기본 2.45%</div>
                                        <div className='buyContentEx1Ex'>(24개월)</div>
                                    </div>
                                </div>
                        </div>
                        </div>
                        {/* 여기서부터 아래 표시까지 map 걸면 댐 */}
                        <div className="buyListFlexBox"/>
                        <div className="buyListflex">
                        <Image src={cukmin} alt={'국민은행'} width="55" height="55" className='shopListImg'/>
                    
                        <div className='shopList'>
                                <div className='buyListTag'>
                                    <div className='shopListTagD'>tag</div>
                                    <div className='shopListTagD1'>tag</div>
                                    <div className='shopListTagD1'>tag</div>
                                </div>
                                <div className='shopListContent'>
                                    <div className='buyListContentTitle'>희망 예금</div>
                                    <div className='shopListContentC'>희망찬 내일을 위해 희망찬 미래를 위해 희망의 우리를 위해</div>
                                    <a className='shopListContentNum'>4.2</a>
                                    <div className='buylistContentExBox'>
                                        <div className='buyListContentEx'>최고연</div>
                                        <div className='buyListContentPer'>%</div>
                                    </div>
                                    <div className='buyContentExBox'>
                                        <div className='buyContentEx1'>기본 2.45%</div>
                                        <div className='buyContentEx1Ex'>(24개월)</div>
                                    </div>
                                </div>
                        </div>
                        </div>
                        {/* 여기까지 */}

                        <div className="buyListFlexBox"/>
                        <div className="buyListflex">
                        <Image src={cukmin} alt={'국민은행'} width="55" height="55" className='shopListImg'/>
                    
                        <div className='shopList'>
                                <div className='buyListTag'>
                                    <div className='shopListTagD'>tag</div>
                                    <div className='shopListTagD1'>tag</div>
                                    <div className='shopListTagD1'>tag</div>
                                </div>
                                <div className='shopListContent'>
                                    <div className='buyListContentTitle'>희망 예금</div>
                                    <div className='shopListContentC'>희망찬 내일을 위해 희망찬 미래를 위해 희망의 우리를 위해</div>
                                    <a className='shopListContentNum'>4.2</a>
                                    <div className='buylistContentExBox'>
                                        <div className='buyListContentEx'>최고연</div>
                                        <div className='buyListContentPer'>%</div>
                                    </div>
                                    <div className='buyContentExBox'>
                                        <div className='buyContentEx1'>기본 2.45%</div>
                                        <div className='buyContentEx1Ex'>(24개월)</div>
                                    </div>
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