
import { connectDB } from "../../util/database.js"
import DepositBenner from "./DepositBenner.js"
import DepositDetail from "./DepositDetail.js"
import React from "react"

export const revalidate = 60;

export default async function depostidetail(){
    const dbYG = (await connectDB).db('yegum');
    let resultYG = await dbYG.collection('yegum').find({ type: '종류예금' }).toArray();
  
    resultYG = resultYG.map((a)=>{
        a._id = a._id.toString()
        return a
      })
    return(
        <div>
            <DepositBenner/>
            <DepositDetail resultYG ={resultYG}/>
        </div>
    )
}