
import { connectDB } from "../../util/database.js"
import DepositBenner from "./DepositBenner.js"
import DepositDetail from "./DepositDetail.js"
import React from "react"

export const revalidate = 60;
export default async function depostidetail(){
    const dbYG = (await connectDB).db('jukgum');
    let result = await dbYG.collection('get').find({ type: '종류적금' }).toArray();

    result = result.map((a)=>{
        a._id = a._id.toString()
        return a
      })
      
    let resultFilter = Array.isArray(result)
    ? result
        .filter((item, index, array) =>
          array.findIndex((element) => element._id === item._id) === index
        )
        .map((item) => item._id.toString())
    : [];

 
    const resultFF =  resultFilter



    return(
        <div>
            <DepositBenner/>
            <DepositDetail result ={result} resultFF={resultFF}/>
        </div>
    )
}