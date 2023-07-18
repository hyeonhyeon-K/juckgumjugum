import React from "react"
import CreatePage from "./CreatePage"
export default function Create(){
    return(
        <div className="depositDiv">
            <div className="createBox">
                <div className="createTitle">상품등록</div>
                <div className="createContent">당신의 상품을 등록해 보세요!</div>
            </div>
            <CreatePage/>
        </div>
    )
}