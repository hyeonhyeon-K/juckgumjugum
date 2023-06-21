
import { connectDB } from "../../util/database.js"
import DepositBenner from "./DepositBenner.js"
import DepositDetail from "./DepositDetail.js"
import React from "react"


export default async function depostidetail(){
    const dbYG = (await connectDB).db('yegum');
    let resultYG = await dbYG.collection('yegum').find({ type: '종류예금' }).toArray();
  

    return(
        <div>
            <DepositBenner/>
            <DepositDetail resultYG ={resultYG}/>
        </div>
    )
}