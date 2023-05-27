'use client'

import { FaAngleRight } from "react-icons/fa";
import HomeCardMap from "./HomeCardMap.js"

export default function Home(){
  return(
    <div className="body">
      <div className="MainContentBox" />
      <div className="subTitle">
        <div className="subTitleFont">정기적금</div>
        <FaAngleRight className="subTitleIcon"/>
        <div className="card">
        <HomeCardMap/>
        <HomeCardMap/><HomeCardMap/>
        </div>
        <div className="subTitleFont1">당좌예금</div>
        <FaAngleRight className="subTitleIcon"/>
        <div className="card">
        <HomeCardMap/>
        <HomeCardMap/><HomeCardMap/>
        </div>
      </div>
      
    </div>
  )
}