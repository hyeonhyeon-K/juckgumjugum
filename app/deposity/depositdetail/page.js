
import { connectDB } from "../../util/database.js"
import DepositBenner from "./DepositBenner.js"
import DepositDetail from "./DepositDetail.js"
import React from "react"

export const revalidate = 60;
export default async function depostidetail(){
    const dbYG = (await connectDB).db('yegum');

const [result] = await Promise.all([
  dbYG.collection('yegum').find({ type: '정기예금' }).toArray()
]);

const mappedResult = result.map((a) => {
  a._id = a._id.toString();
  return a;
});
    return(
        <div className="depositDiv">
            <DepositBenner/>
            <DepositDetail result ={mappedResult}/>
        </div>
    )
}