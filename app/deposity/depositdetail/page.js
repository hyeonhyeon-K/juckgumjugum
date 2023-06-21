
import { connectDB } from "../../util/database.js"
import DepositBenner from "./DepositBenner.js"
import DepositDetail from "./DepositDetail.js"
import React from "react"


export default async function depostidetail(){
    const dbYG = (await connectDB).db('yegum');
    let result = await dbYG.collection('yegum').find({ type: '정기예금' }).toArray();

    return(
        <div>
            <DepositBenner/>
            <DepositDetail result ={result}/>
        </div>
    )
}