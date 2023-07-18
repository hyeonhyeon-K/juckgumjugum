import { authOptions } from "../pages/api/auth/[...nextauth]"
import { getServerSession } from "next-auth"
import { connectDB } from "./util/database.js"
import { FaAngleRight } from "react-icons/fa";
import HomeCard from "./HomeCard.js"
import HomeCardY from "./HomeCardY.js"
import React from "react"
import Link from "next/link.js";
import Image from "next/image"
import frame1 from "../public/Frame1.png"
import styles from "./component/HomeCard.module.css"

export const revalidate = 60;


export default async function Home(){
  
  const db = (await connectDB).db('jukgum');
  const dbY = (await connectDB).db('yegum');
  
  const [result, resultY] = await Promise.all([
    db.collection('get').find().toArray(),
    dbY.collection('yegum').find().toArray()
  ]);
  
  const mappedResult = result.map((a) => {
    a._id = a._id.toString();
    return a;
  });
  
  const mappedResultY = resultY.map((a) => {
    a._id = a._id.toString();
    return a;
  });
  
  let sessions = await getServerSession(authOptions)

  return(
    <div className={styles.homediv}>
      <Image src={frame1} width={660} height={200} alt={'benner'}  loading="lazy" className={styles.benner}/>
      <div>
      <div className={styles.subtitleBox}>
        <Link href={'./deposit'} className="text-decoration">
          <div className={styles.subTitleFont}> 적금 </div>
          <FaAngleRight className={styles.subTitleIcon}/>
        </Link>
      </div>
      <div className={styles.mainBox}>
        <HomeCard result={mappedResult}/>
      </div>
      

      <div className={styles.subtitleBox}>
        <Link href={'./deposity'} className="text-decoration">
          <div className={styles.subTitleFont}> 예금 </div>
          <FaAngleRight className={styles.subTitleIcon}/>
        </Link>
      </div>
      <div className={styles.mainBox}>
        <HomeCardY resultY={mappedResultY}/>
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