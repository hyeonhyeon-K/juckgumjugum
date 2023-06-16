"use client"

import React from "react"
import Link from "next/link"
// import Link from "next/link"

export default function Create(){
    return(
        <div className="createBody">
            <form>
                <div className="create1">
                    <div className="create1W">상품이름</div>
                    <input className="createInputTitle"></input>
                    <div className="createInputWB">상품 은행</div>
                    <input className="createInputBank"></input>
                    <div className="createInputWB">태그</div>
                    <input className="createInputTag"></input>
                    <input className="createInputTag"></input>
                    <input className="createInputTag"></input>
                </div>
                <div className="create2">
                    <div>상품내용</div>
                    <input className="createInputPoint1"></input>
                </div>
                <div className="create2">
                    <div>상품특징1</div>
                    <input className="createInputPoint2"></input>
                </div>
                <div className="create2">
                    <div>상품특징2</div>
                    <input className="createInputPoint3"></input>
                </div>
                <div className="create2">
                    <div>상품특징3</div>
                    <input className="createInputPoint4"></input>
                </div>
                
                <div className="create3">
                    <div className="createHigh" placeholder="%">최고 이자</div>
                    <input className="createInputHigh"></input>
                    <div className="createMonth">예치개월</div>
                    <input className="createInputMonth"></input>
                </div>
                <div className="memberCare">고객 주의사항</div>
                <input className="createInputCare"></input>
                <Link href={'/'}>
                    <button className="createButton">상품등록하기</button>
                </Link>
            </form>
        </div>
    )
}