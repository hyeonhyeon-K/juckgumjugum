import { authOptions } from "../pages/api/auth/[...nextauth]"
import { getServerSession } from "next-auth"
import { connectDB } from "./util/database.js"
import { FaAngleRight } from "react-icons/fa";
import HomeCard from "./HomeCard.js"
import HomeCardY from "./HomeCardY.js"
import React from "react"
import Link from "next/link.js";
import Image from "next/image"
import frame1 from "../public/Frame 1.png"
// import axios from "axios";

export const revalidate = 60;


export default async function Home(){
  
  const db = (await connectDB).db('jukgum');
  let result = await db.collection('get').find().toArray();
  result = result.map((a)=>{
    a._id = a._id.toString()
    return a
  })
  const dbY = (await connectDB).db('yegum');
  let resultY = await dbY.collection('yegum').find().toArray();
  resultY = resultY.map((a)=>{
    a._id = a._id.toString()
    return a
  })
  let sessions = await getServerSession(authOptions)

  // const api = await axios.get('https://finlife.fss.or.kr/finlifeapi/savingProductsSearch.json?auth=855905c0fb40765d5f0ee1cf2746ce6c&topFinGrpNo=020000&pageNo=1');

  // const jukgum = api.data.result.baseList
  // console.log(jukgum)

  return(
    <div>
      <Image src={frame1} width={660} height={200} alt={'benner'}  loading="lazy" className="benner"/>
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
        <Link href={'/create'} prefetch={false} className="text-decoration">
        <button className='createButtonMain'>적금 등록</button></Link>
        <Link href={'/createye'}  prefetch={false} className="text-decoration">
        <button className='createButtonMain1'>예금 등록</button></Link>
        </div>
        : <div/>}
      </div>
    </div>
  )
}