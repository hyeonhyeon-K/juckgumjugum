import { connectDB } from "../../util/database.js"
import BuyList from "./Buylist"
import React from "react"


export default async function Buylist(){
    const db = (await connectDB).db('jukgum');
    const result = await db.collection('get').find().toArray();
    return(
        <div>
            <BuyList result={result}/>
        </div>
    )
}