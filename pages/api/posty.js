import { connectDB } from "../../app/util/database.js"

export default async function handler(req, res) {
  if (req.method == 'POST') {
    if (req.body.title == '') {
      return res.status(500).json('제목을 입력하세요.');
    } else if (req.body.bank == '') {
      return res.status(500).json('은행을 선택하세요.');
    } else if (req.body.content == '') {
      return res.status(500).json('내용을 입력하세요.');
    } else if (req.body.tag == '' || req.body.tag1 == '' || req.body.tag3 == '') {
      return res.status(500).json('태그를 입력하세요.');
    }else if (req.body.detail == '' || req.body.detail2 == '' || req.body.detail3 == '') {
        return res.status(500).json('내용을 입력하세요.');
      }else if (req.body.high == '') {
        return res.status(500).json('내용을 입력하세요.');
      }else if (req.body.long == '') {
        return res.status(500).json('내용을 입력하세요.');
      }else if (req.body.care == '') {
        return res.status(500).json('내용을 입력하세요.');
      }
    
    try {
      let db = (await connectDB).db('yegum');
      let result = db.collection('yegum').insertOne(req.body);
      res.redirect(302, '/');
    } catch (error) {
      console.log('에러 발생:', error);
    }
  }
}