"use client"

// import { FaAngleRight } from "react-icons/fa";
import Image from 'next/image'
import { useRouter } from "next/navigation";
import React from "react"
import Link from 'next/link';
import PropTypes from 'prop-types';


export default function Home(props){
  // eslint-disable-next-line react/prop-types
  const {result, sessions} = props;


  const modifiedResult = result.map((item) => {
    if (item.bank === '우리은행') {
      return { ...item, cuk: '60' };
    } else {
      return { ...item, cuk: '50' };
    }
  });

  // const data = result.result
console.log(result)

  const datamap = modifiedResult.map((a,i) => (
<div className="body" key={a}>
      <div className="MainContentBox" />
      <div className="subTitle">
        {/* 여기서부터 map */}
        <div onClick={()=>{router.push(`/detail/${modifiedResult[i]._id}`) }}>
          {/* <div className="subTitleFont"> 예금 </div>
          <FaAngleRight className="subTitleIcon"/> */}
          <div className="card">
            <div className="body">
              <div className="MainContentBox" />
                <div className="subTitle">
                  <div className="productCard">
                  <div className="productHeader">
                    <Image src={`/${modifiedResult[i].bank}.png`} alt={`${modifiedResult[i].bank}`} width={`${modifiedResult[i].cuk}`} height={`${modifiedResult[i].cuk}`} className="productImg"/>
                    <div className="productTitle">{modifiedResult[i].title}</div>
                  </div>
                  <div className="productSub">
                    <div className="productSubTitle">[{modifiedResult[i].tag1}]</div>
                    <div className="productSubTitle1"> 내일 희망형 </div>
                  </div>
                  <div className="productSubMain">{modifiedResult[i].content}</div>
                  <div className="productSubMainSub">최고 연</div>
                  <div className="productMainBox">
                    <div className="productMain">
                      <div className="productMainNum">{modifiedResult[i].high}</div>
                      <div className="productMainNumper">%</div>
                    </div>
                    <div className="productEx">
                      <div className="productExNum">기본 {modifiedResult[i].high}%</div>
                      <div className="productExM">({modifiedResult[i].long}개월)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 아래는 예시 */}
      </div>
      
    </div>
  ))
  let router = useRouter()
  return(
     <>
      {datamap}
      {sessions ?  <Link href={'/create'}>
        <button className='createButtonMain'>내 상품 등록</button>
        </Link> : <div/>}
    </>
    
  )
}
Home.propTypes = {
  result: PropTypes.string.isRequired,
  resultFF: PropTypes.string.isRequired,
};