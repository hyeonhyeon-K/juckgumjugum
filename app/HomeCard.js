'use client'

import { FaAngleRight } from "react-icons/fa";
import { useSelector } from "react-redux"
import HomeCardMap from "./HomeCardMap.js"

export default function Home(result){

  return(
    <div className="body">
      <div className="MainContentBox" />
      <div className="subTitle">
        <div className="subTitleFont"> {result.result[0].title} </div>
        <FaAngleRight className="subTitleIcon"/>
        <div className="card">
        <HomeCardMap/>
        <HomeCardMap/><HomeCardMap/>
        </div>
        <div className="subTitleFont1"> {result.result[0].title} </div>
        <FaAngleRight className="subTitleIcon"/>
        <div className="card">
        <HomeCardMap/>
        <HomeCardMap/><HomeCardMap/>
        </div>
      </div>
      
    </div>
  )
}