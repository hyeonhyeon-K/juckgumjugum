
import React from "react"
import Image from "next/image"
import axios from "axios";


export default async function detailehana(props){
    const utf8String = JSON.stringify(props) // UTF-8로 인코딩된 문자열
    const decodedString = decodeURIComponent(utf8String)

    const jsonObject = JSON.parse(decodedString); // 문자열로 바뀌
    const productName = jsonObject.params.id;

    const JUK_URL = `https://finlife.fss.or.kr/finlifeapi/savingProductsSearch.json?auth=${process.env.API_KEY}&topFinGrpNo=020000&pageNo=1&financeCd=%ED%95%98%EB%82%98`
    // API 호출!
    const api = await axios.get(JUK_URL);
    const bankProducts = api.data.result.baseList
    const bankProductOpt = api.data.result.optionList

    // 적금 목록과 option 합치는 함수
    function combine(base, options) {
        return options.map(option => {
          const baseObj = base.find(item => item.fin_prdt_cd === option.fin_prdt_cd);
          const combinedObj = baseObj ? { ...baseObj, ...option } : option;
          return combinedObj;
        });
      }
      // optionList를 baseList와 합친 optional 배열 생성

      const optional = combine(bankProducts, bankProductOpt);
      // 이름이 같은 항목 배열 생성
      const detailhana = optional.find(item => item.fin_prdt_nm === productName);

    return(
        <div>
            <div> 
        <div className="explanbody">
            <div className="expalnebox">
                <p id="explaneTitle">{detailhana.fin_prdt_nm}</p>
                <p id="explaneContent">{detailhana.mtrt_int}</p>
            </div>
        </div>
        <div className="deposit3dbox">
            <div className="deposit3dBox1"> 
            
                <div className="deposit3dImgbox">
                <Image src={`/${detailhana.kor_co_nm}.png`} alt={`${detailhana.kor_co_nm}.png`} priority={true} width="180" height="180" className='deposit3dimg'/>
                </div>
                <div className="deposit3dBox2">
                    <div className="d3d">
                        <button className="deposit3dButton">{detailhana.intr_rate_type_nm}</button>
                        <button className="deposit3dButton1">{detailhana.rsrv_type_nm}</button>
                        <button className="deposit3dButton1">{detailhana.fin_prdt_nm}</button>
                    </div>
                        <div className="d3dB">
                            <div className="d3dBT">{detailhana.fin_prdt_nm}</div>
                                <div className="d3dBTdT">{detailhana.intr_rate2}</div>
                                <div className="d3dBTd">
                                    <div className="d3dBTdT1">최고연</div>
                                    <div className="d3dBTdT2">%</div>
                                </div>
                            <div className="d3dBTI">
                                    <div>
                                        기본 2.45%
                                    </div>
                                    <div className="d3dBTID">({detailhana.save_trm}개월)</div>
                            </div>
                        </div>
                        <div className="d3dbD">
                            <div>{detailhana.mtrt_int}</div>
                        </div>
                </div>
            </div>
            <div>
             <ul className="deposit3dID">
                <div className="deposit3dIDT">상품특징</div>
                <li className="deposit3dIDC">{detailhana.join_way}</li>
                <li className="deposit3dIDC">{detailhana.mtrt_int}</li>
                <li className="deposit3dIDC">{detailhana.spcl_cnd}</li>
            </ul>
            </div>
            <p className="deposit3dII">{detailhana.etc_note}</p>
        </div>
        <div className="deposit3DBB">
            {/* <Link href={'/shoplist'}><button className="deposit3DB">장바구니</button></Link> */}
            {/* <Link href={`${filterTitle.link}`} className="text-decorationw"><button className="deposit3DB1">가입하기</button></Link> */}
            {/* <Link href={`${result.link}`} className="text-decorationw"><button className="deposit3DB1">은행 사이트</button></Link> */}
        </div>
        
    </div>
        </div>
    )
}