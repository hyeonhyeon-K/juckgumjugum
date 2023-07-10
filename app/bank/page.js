
import axios from "axios";
import React from "react"
import BankProduct from "./BankProduct"
import BankBenner from "./BankBenner"
export const revalidate = 60;
export default async function depostidetail(){

    // API 변수!
    const JUK_URL = `https://finlife.fss.or.kr/finlifeapi/savingProductsSearch.json?auth=${process.env.API_KEY}&topFinGrpNo=020000&pageNo=1&financeCd=%ED%95%98%EB%82%98`
    // API 호출!
    const api = await axios.get(JUK_URL);

    const bankProducts = api.data.result.baseList
    const bankProductOpt = api.data.result.optionList

    // 적금 목록과 option 합치는 함수
    function combine(base, options) {
        return options.map(option => {
          const baseObj = base.find(item => item.fin_prdt_cd === option.fin_prdt_cd);
          return { ...baseObj, ...option };
        });
      }
      // optionList를 baseList와 합친 optional 배열 생성
    const optional = combine(bankProducts, bankProductOpt);
      // 이름이 같은 항목만 남기는 배열 생성
    const filterTitle = optional.reduce((acc, obj) => {
    const isDuplicate = acc.some(item => item.fin_prdt_nm === obj.fin_prdt_nm);
    if (!isDuplicate) {
      acc.push(obj);
    }
        return acc;
    }, []);

    return(
        <div>
            <BankBenner/>
            <BankProduct filterTitle={filterTitle}/>
        </div>
    )
}