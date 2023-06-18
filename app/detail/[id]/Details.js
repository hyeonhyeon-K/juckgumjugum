'use client'
import React from "react"
import Image from "next/image"
import Link from "next/link"


export default function details(result){
const bankLink = result.link

  return(
    <div>
        <div className="explanbody">
            <div className="expalnebox">
                <p id="explaneTitle">{result.title}</p>
                <p id="explaneContent">
                {result.content}
                </p>
            </div>
        </div>
        <div className="deposit3dbox">
            <div className="deposit3dBox1">
                <div className="deposit3dImgbox">
                <Image src={`/${result.bank}.png`} alt={'국민은행'} width="180" height="180" className='deposit3dimg'/>
                </div>
                <div className="deposit3dBox2">
                    <div className="d3d">
                        <button className="deposit3dButton">{result.tag}</button>
                        <button className="deposit3dButton1">{result.tag1}</button>
                        <button className="deposit3dButton1">{result.tag3}</button>
                    </div>
                        <div className="d3dB">
                            <div className="d3dBT">희망예금</div>
                                <div className="d3dBTdT">{result.high}</div>
                                <div className="d3dBTd">
                                    <div className="d3dBTdT1">최고연</div>
                                    <div className="d3dBTdT2">%</div>
                                </div>
                            <div className="d3dBTI">
                                    <div>
                                        기본 2.45%
                                    </div>
                                    <div className="d3dBTID">({result.long}개월)</div>
                            </div>
                        </div>
                        <div className="d3dbD">
                            <div>{result.content}</div>
                        </div>
                </div>
            </div>
            <div>
             <ul className="deposit3dID">
                <div className="deposit3dIDT">상품특징</div>
                <li className="deposit3dIDC">{result.detail}</li>
                <li className="deposit3dIDC">{result.detail2}</li>
                <li className="deposit3dIDC">{result.detail3}</li>
            </ul>
            </div>
            <p className="deposit3dII">
            {result.care}
            </p>
        </div>
        <div className="deposit3DBB">
            <Link href={'/shoplist'}><button className="deposit3DB">장바구니</button></Link>
            <Link href={'/mypage/buylist'}><button className="deposit3DB1">가입하기</button></Link>
            <Link href={`/${bankLink}`}><button className="deposit3DB1">은행 사이트</button></Link>
        </div>
        
    </div>

    
  )
}