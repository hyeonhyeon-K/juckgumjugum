
import { authOptions } from "../pages/api/auth/[...nextauth]"
import { getServerSession } from "next-auth"
import { connectDB } from "./util/database.js"
import { FaAngleRight } from "react-icons/fa";
import HomeCard from "./HomeCard.js"
import HomeCardY from "./HomeCardY.js"
import Benner from "./Benner.js"
import React from "react"
import Link from "next/link.js";



export const revalidate = 60;
export default async function Home(){
  
  const db = (await connectDB).db('jukgum');
  let result = await db.collection('get').find().toArray();

  const dbY = (await connectDB).db('yegum');
  let resultY = await dbY.collection('yegum').find().toArray();

  let sessions = await getServerSession(authOptions)

  

  return(
    <div>
      <Benner></Benner>
      <div>

      <div className="subtitleBox">
        <Link href={'./deposit'} className="text-decoration">
          <div className="subTitleFont"> 적금 </div>
          <FaAngleRight className="subTitleIcon"/>
        </Link>
      </div>
      <div className="mainBox">
        <HomeCard result={result}/>
      </div>
      

      <div className="subtitleBox">
        <Link href={'./deposity'} className="text-decoration">
          <div className="subTitleFont"> 예금 </div>
          <FaAngleRight className="subTitleIcon"/>
        </Link>
      </div>
      <div className="mainBox">
        <HomeCardY resultY={resultY}/>
      </div>

      {sessions ?  <div className='createy'>
        <Link href={'/create'} className="text-decoration">
        <button className='createButtonMain'>적금 등록</button></Link>
        <Link href={'/createye'} className="text-decoration">
        <button className='createButtonMain1'>예금 등록</button></Link>
        </div>
        : <div/>}
      </div>
    </div>
  )
}