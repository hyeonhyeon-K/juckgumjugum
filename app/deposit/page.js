import { connectDB } from "../util/database.js"
import DeositFunction from "./DepositFunction.js"
import DayDeposit from "./DayDeposit.js"
import Expalne from "./Explan.js";
// import Link from "next/link";
import React from "react"

export default async function deposit(){
    const db = (await connectDB).db('jukgum');
    const result = await db.collection('get').find().toArray();
    console.log(typeof result)
    const resultFilter = result
    .filter((item, index, array) =>
      array.findIndex((element) => element._id === item._id) === index
    )
    .map((item) => item._id).map((item) => item.toString());

    const resultFF =  resultFilter


    return(
        <div>
            <Expalne/>
            <DayDeposit/>
                <div className="depositBoxss">
                    <DeositFunction result={result} resultFF={resultFF}/>
                </div>
            <DayDeposit/>
            <div className="depositBoxss">
                    <DeositFunction result={result} resultFF={resultFF}/>
                </div>
        </div>
    )
}