import { getServerSession } from "next-auth"
import { connectDB } from "../../app/util/database.js"
import { authOptions } from "./auth/[...nextauth].js"
// import { ObjectId } from "mongodb"

export default async function handler(req, res){
    if (req.method == 'DELETE'){

      let session = await getServerSession(req, res, authOptions)
      const userEmail = session.user.email
      const db = (await connectDB).db('jukgum')
      let findUser = await db.collection('get').findOne({ author :userEmail })
      if (findUser.author == session.user.email) {
        let result = await db.collection('get').deleteOne({ author :userEmail })
        console.log(result)
        return res.status(200).json('삭제완료')
      } else {
        return res.status(500).json('현재유저와 작성자 불일치')
      }
  
    }
  }