"use client"

import React from "react"
// import Link from "next/link"
// import Link from "next/link"

export default function Create(){
    return(
        <div className="createBody">
            <form method ="POST" action ="/api/posty">
                <div className="create1">
                    <div className="create1W">상품이름</div>
                    <input className="createInputTitle" name="title"></input>
                    <div className="createInputWB" >상품 은행</div>
                    <input className="createInputBank" name="bank"></input>
                    <div className="createInputWB">태그</div>
                    <input className="createInputTag" name="tag"></input>
                    <input className="createInputTag " name="tag1"></input>
                    <input className="createInputTag" name="tag3"></input>
                </div>
                <div className="create2">
                    <div>적금종류</div>
                    <input className="createInputPoint1" name="type" placeholder="예) 정기적금"></input>
                </div>
                <div className="create2">
                    <div>상품내용</div>
                    <input className="createInputPoint1" name="content"></input>
                </div>
                <div className="create2">
                    <div>상품특징1</div>
                    <input className="createInputPoint2" name="detail"></input>
                </div>
                <div className="create2">
                    <div>상품특징2</div>
                    <input className="createInputPoint3" name="detail2"></input>
                </div>
                <div className="create2">
                    <div>상품특징3</div>
                    <input className="createInputPoint4" name="detail3"></input>
                </div>
                
                <div className="create3">
                    <div className="createHigh" placeholder="%">최고 이자</div>
                    <input className="createInputHigh" name="high"></input>
                    <div className="createMonth">예치개월</div>
                    <input className="createInputMonth"name="long"></input>
                </div>
                <div className="memberCare">고객 주의사항</div>
                <input className="createInputCare" name="care"></input>
                <div className="create2">
                    <div>상품링크</div>
                    <input className="createInputPoint1" name="link"></input>
                </div>
                    <button className="createButton" type="submit">상품등록하기</button>
            </form>
        </div>
    )
}