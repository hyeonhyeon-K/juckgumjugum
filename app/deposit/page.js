import { connectDB } from "../util/database.js"
import DeositFunction from "./DepositFunction.js"
import DeositFunctionY from "./DepositFunctionY.js"
import DayDeposit from "./DayDeposit.js"
import DayDepositY from "./DayDepositY.js"
import Expalne from "./Explan.js";
// import Link from "next/link";
import React from "react"

export const revalidate = 60;

export default async function deposit(){

      // const dbY = (await connectDB).db('jukgum');
    // let resultY = await dbY.collection('get').find({ type: '정기적금' }).toArray();
    // resultY = resultY.map((a)=>{
    //     a._id = a._id.toString()
    //     return a
    //   })
    // const dbYG = (await connectDB).db('jukgum');
    // let resultYG = await dbYG.collection('get').find({ type: '종류적금' }).toArray();
    // resultYG = resultYG.map((a)=>{
    //     a._id = a._id.toString()
    //     return a
    //   })
    
  const db = (await connectDB).db('jukgum');

const resultPromises = Promise.all([ // 병렬로 데이터 비동기호출
  db.collection('get').find({ type: '정기적금' }).toArray(),
  db.collection('get').find({ type: '종류적금' }).toArray()
]);

const [resultY, resultYG] = await resultPromises;

const mappedResultY = resultY.map((a) => {
  a._id = a._id.toString();
  return a;
});

const mappedResultYG = resultYG.map((a) => {
  a._id = a._id.toString();
  return a;
});

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
                    <DeositFunction result={mappedResultY} resultFF={resultFF}/>
                </div>
            <DayDepositY/>
            <div className="depositBoxss">
                    <DeositFunctionY resultYG={mappedResultYG} resultGo={resultGo}/>
                </div>
        </div>
    )
}