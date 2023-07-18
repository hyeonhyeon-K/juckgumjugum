
import { connectDB } from "../../util/database.js"
import DepositBenner from "./DepositBenner"
import DepositDetail from "./DepositDetail"
import React from "react"

export const revalidate = 60;
export default async function depostidetail(){
    const dbYG = (await connectDB).db('jukgum');

    const [result] = await Promise.all([
      dbYG.collection('get').find({ type: '정기적금' }).toArray()
    ]);
    
    const mappedResult = result.map((a) => {
      a._id = a._id.toString();
      return a;
    });
    
    const resultFilter = Array.isArray(mappedResult)
      ? mappedResult
          .filter((item, index, array) =>
            array.findIndex((element) => element._id === item._id) === index
          )
          .map((item) => item._id.toString())
      : [];
    
    const resultFF = resultFilter;



    return(
        <div className="depositDiv">
            <DepositBenner/>
            <DepositDetail result ={result} resultFF={resultFF}/>
        </div>
    )
}