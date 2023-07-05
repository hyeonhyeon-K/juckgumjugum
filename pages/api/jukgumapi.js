
import axios from "axios";

// import { ObjectId } from "mongodb"

export default async function axioshandler(){
    axios.get('https://finlife.fss.or.kr/finlifeapi/savingProductsSearch.json?auth=855905c0fb40765d5f0ee1cf2746ce6c&topFinGrpNo=020000&pageNo=1')
    .then((response) => {
        console.log(response);
        const { data } = response;
        console.log(data);
      })
  }
  