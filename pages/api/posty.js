import { connectDB } from "../../app/util/database.js"
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth].js"

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions)

  if (session) {
    req.body.author = session.user.email
  }
  if (req.method == 'POST') {

    try {
      let db = (await connectDB).db('yegum');
      let result = db.collection('yegum').insertOne(req.body);
      console.log(result)
      res.redirect(302, '/');
    } catch (error) {
      console.log('에러 발생:', error);
    }
  }
}