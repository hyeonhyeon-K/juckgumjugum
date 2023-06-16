export default function handler(a,b) {
    if(a.metod === 'GET'){
        return b.status(200).json('hello')
    }
  }