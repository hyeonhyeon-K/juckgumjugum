import ShopList from "./ShopList"
import Link from 'next/link'
import React from "react"

export default function shopList(){
    return(
        <div className="depositDiv">
            <div className="shopListTitle">장바구니</div>
            <ShopList/>
            <Link href={'https://apiportal.kbfg.com/intro'}><button className="shopListButton">가입하기</button></Link>
        </div>
    )
}