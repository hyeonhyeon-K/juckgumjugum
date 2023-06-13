

import { connectDB } from "./util/database.js"
import HomeCard from "./HomeCard.js"
import Benner from "./Benner.js"
import React from "react"

export default async function Home(){
  
  const db = (await connectDB).db('jukgum');
  let result = await db.collection('post').find().toArray();
  
  return(
    <div>
      <Benner></Benner>
      <HomeCard result={result}/>
    </div>
  )
}