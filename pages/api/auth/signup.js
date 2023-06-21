import { connectDB } from "../../../app/util/database.js";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  if (req.method === "POST") {

   
    if (req.body.id === "") {
        res.status(500).json({ message: "빈 문자열입니다." });
      } else try {
        
      const saltRounds = 10;
      const hash = await bcrypt.hash(req.body.password, saltRounds);
      req.body.password = hash;
      const db = (await connectDB).db('member');
      await db.collection('user_cred').insertOne(req.body);
      res.status(200).json('성공');
    } catch (error) {
      res.status(500).json({ message: '오류가 발생했습니다.' });
    }
  } else {
    res.status(405).json({ message: '허용되지 않은 메소드입니다.' });
  }
}