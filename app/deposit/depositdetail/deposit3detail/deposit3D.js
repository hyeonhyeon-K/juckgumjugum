'use client'
import React from "react"
import Image from "next/image"
import cukmin from "../../../../public/cukmin.png"
import Link from "next/link"

export default function deposit3dbox(){
  return(
    <div>
        <div className="explanbody">
            <div className="expalnebox">
                <p id="explaneTitle">희망 예금</p>
                <p id="explaneContent">
                기쁜 날마다, 고금리의 즐거움을 드립니다.  언제든지 찾을 수 있고 찾을 땐 언제나 높은 금리의 즐거움과 미래의 희망을 누릴 수 있는 정기 예금입니다.
                </p>
            </div>
        </div>
        <div className="deposit3dbox">
            <div className="deposit3dBox1">
                <div className="deposit3dImgbox">
                <Image src={cukmin} alt={'국민은행'} width="180" height="180" className='deposit3dimg'/>
                </div>
                <div className="deposit3dBox2">
                    <div className="d3d">
                        <button className="deposit3dButton">목돈 모으기</button>
                        <button className="deposit3dButton1">내일 희망형</button>
                        <button className="deposit3dButton1">보통예금</button>
                    </div>
                        <div className="d3dB">
                            <div className="d3dBT">희망예금</div>
                                <div className="d3dBTdT">4.2</div>
                                <div className="d3dBTd">
                                    <div className="d3dBTdT1">최고연</div>
                                    <div className="d3dBTdT2">%</div>
                                </div>
                            <div className="d3dBTI">
                                    <div>
                                        기본 2.45%
                                    </div>
                                    <div className="d3dBTID">(24개월)</div>
                            </div>
                        </div>
                        <div className="d3dbD">
                            <div>희망찬 내일을 위해 희망찬 미래를 위해 희망의 우리를 위해</div>
                        </div>
                </div>
            </div>
            <div>
             <ul className="deposit3dID">
                <div className="deposit3dIDT">상품특징</div>
                <li className="deposit3dIDC">높은 금리로 갈아탈 수 있는 옵션 보너스 제공</li>
                <li className="deposit3dIDC">입출금과 거치식 예금의 장점만을 모은 편리한 상품</li>
                <li className="deposit3dIDC">내집마련, 결혼, 출산 등 기쁜 날 해지 시 해당 기간별 고시 이율 적용</li>
            </ul>
            </div>
            <p className="deposit3dII">
            가입대상실명의 개인 또는 개인사업자예금종류정기예금가입기간1년제최저가입금액3백만원 이상 단, 인터넷뱅킹 및 스마트폰뱅킹은 최저 1만원 이상 (원단위)이자지급방법만기일시지급식 : 만기(후)해지시 이자를 지급
            </p>
        </div>
        <div className="deposit3DBB">
            <Link href={'/shoplist'}><button className="deposit3DB">장바구니</button></Link>
            <Link href={'/mypage/buylist'}><button className="deposit3DB1">가입하기</button></Link>
            <Link href={'https://www.kbstar.com/'}><button className="deposit3DB1">은행 사이트</button></Link>
        </div>
        
    </div>

    
  )
}