import { connectDB } from "../util/database.js"
import DeositFunction from "./DepositFunction.js"
import DeositFunctionY from "./DepositFunctionY.js"
import DayDeposit from "./DayDeposit.js"
import DayDepositY from "./DayDepositY.js"
import Expalne from "./Explan.js";
// import Link from "next/link";
import React from "react"

export default async function deposit(){
    const dbY = (await connectDB).db('jukgum');
    let resultY = await dbY.collection('get').find({ type: '정기적금' }).toArray();
  
    const dbYG = (await connectDB).db('jukgum');
    let resultYG = await dbYG.collection('get').find({ type: '종류적금' }).toArray();
  

    let resultFilter = Array.isArray(resultY)
    ? resultY
        .filter((item, index, array) =>
          array.findIndex((element) => element._id === item._id) === index
        )
        .map((item) => item._id.toString())
    : [];

    let resultFilterGo = Array.isArray(resultYG)
    ? resultYG
        .filter((item, index, array) =>
          array.findIndex((element) => element._id === item._id) === index
        )
        .map((item) => item._id.toString())
    : [];

    const resultFF =  resultFilter
    const resultGo = resultFilterGo

    return(
        <div>
            <Expalne/>
            <DayDeposit/>
                <div className="depositBoxss">
                    <DeositFunction result={resultY} resultFF={resultFF}/>
                </div>
            <DayDepositY/>
            <div className="depositBoxss">
                    <DeositFunctionY resultYG={resultYG} resultGo={resultGo}/>
                </div>
        </div>
    )
}