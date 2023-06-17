

import { connectDB } from "./util/database.js"
import { FaAngleRight } from "react-icons/fa";
import HomeCard from "./HomeCard.js"
import Benner from "./Benner.js"
import React from "react"
import Link from "next/link.js";

export default async function Home(){
  
  const db = (await connectDB).db('jukgum');
  let result = await db.collection('get').find().toArray();

  return(
    <div>
      <Benner></Benner>
      <div className="subtitleBox">
        <Link href={'./deposit'} className="text-decoration">
          <div className="subTitleFont"> 적금 </div>
          <FaAngleRight className="subTitleIcon"/>
        </Link>
      </div>
      <div className="mainBox">
        <HomeCard result={result}/>
      </div>
            
    </div>
  )
}