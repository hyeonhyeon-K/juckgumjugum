import { connectDB } from "../util/database.js"
import DeositFunction from "./DepositFunction.js"
import DeositFunctionGo from "./DepositFunctionGo.js"
import DayDeposit from "./DayDeposit.js"
import DayDepositGo from "./DayDepositGo.js"
import Expalne from "./Explan.js";
// import axios from "axios"
import React from "react"

export const revalidate = 60;

export default async function deposit(){
    const dbY = (await connectDB).db('yegum');
    const dbYG = (await connectDB).db('yegum');
    
    const [resultY, resultYG] = await Promise.all([
      dbY.collection('yegum').find({ type: '정기예금' }).toArray(),
      dbYG.collection('yegum').find({ type: '종류예금' }).toArray()
    ]);
    
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

//     const api = await axios.get('https://finlife.fss.or.kr/finlifeapi/savingProductsSearch.json?auth=855905c0fb40765d5f0ee1cf2746ce6c&topFinGrpNo=020000&pageNo=1');
// console.log(api.data.result.baseList[0])  

    return(
        <div className="depositDiv">
            <Expalne/>
            <DayDeposit resultYG={mappedResultYG}/>
                <div className="depositBoxss">
                    <DeositFunction resultY={mappedResultY} resultFF={resultFF}/>
                </div>
            <DayDepositGo/>
            <div className="depositBoxss">
                    <DeositFunctionGo resultYG={mappedResultYG} resultGo={resultGo}/>
                </div>
        </div>
    )
}