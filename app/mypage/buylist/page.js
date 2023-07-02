import { connectDB } from "../../util/database.js"
import BuyList from "./Buylist"
import React from "react"
import { getServerSession } from "next-auth";
import {authOptions} from '../../../pages/api/auth/[...nextauth].js'

export default async function Buylist(){
    const session = await getServerSession(authOptions)
    const userEmail = session.user.email
    const db = (await connectDB).db('jukgum');
    let result = await db.collection('get').find({ author : userEmail }).toArray();
    result = result.map((a)=>{
        a._id = a._id.toString()
        return a
      })
    return(
        <div>
            <BuyList result={result}/>
        </div>
    )
}