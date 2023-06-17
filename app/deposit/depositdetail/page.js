
import { connectDB } from "../../util/database.js"
import DepositBenner from "./DepositBenner"
import DepositDetail from "./DepositDetail"
import React from "react"


export default async function depostidetail(){
    const db = (await connectDB).db('jukgum');
    const result = await db.collection('get').find().toArray();

    return(
        <div>
            <DepositBenner/>
            <DepositDetail result ={result}/>
        </div>
    )
}