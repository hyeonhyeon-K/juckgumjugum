import { connectDB } from "../../app/util/database.js";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { title, bank, content, tag, tag1, tag3, detail, detail2, detail3, high, long, care } = req.body;

    if (!title || title.length === 0) {
      return res.status(500).json({ message: "제목을 입력하세요." });
    } else if (title.length > 5) {
      return res.status(500).json({ message: "제목의 글자수를 지켜주세요." });
    } else if (!bank) {
      return res.status(500).json({ message: "은행을 선택하세요." });
    } else if (!content) {
      return res.status(500).json({ message: "내용을 입력하세요." });
    } else if (!tag || !tag1 || !tag3) {
      return res.status(500).json({ message: "태그를 입력하세요." });
    } else if (!detail || !detail2 || !detail3) {
      return res.status(500).json({ message: "내용을 입력하세요." });
    } else if (!high) {
      return res.status(500).json({ message: "내용을 입력하세요." });
    } else if (!long) {
      return res.status(500).json({ message: "내용을 입력하세요." });
    } else if (!care) {
      return res.status(500).json({ message: "내용을 입력하세요." });
    }

    try {
      const db = (await connectDB).db("jukgum");
      const result = await db.collection("get").insertOne(req.body);
      console.log(result);
      res.redirect(302, "/");
    } catch (error) {
      console.log("에러 발생:", error);
    }
  }
}