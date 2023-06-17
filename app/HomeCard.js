"use client"

// import { FaAngleRight } from "react-icons/fa";
import Image from 'next/image'
import { useRouter } from "next/navigation";
import cukmin from "../public/cukmin.png"
import React from "react"
import Link from 'next/link';
import PropTypes from 'prop-types';


export default function Home(props){
  // eslint-disable-next-line react/prop-types
  const {result, sessions} = props;

  // const data = result.result
console.log(result)

  const datamap = result.map((a,i) => (
<div className="body" key={a}>
      <div className="MainContentBox" />
      <div className="subTitle">
        {/* 여기서부터 map */}
        <div onClick={()=>{router.push(`/detail/${result[i]._id}`) }}>
          {/* <div className="subTitleFont"> 예금 </div>
          <FaAngleRight className="subTitleIcon"/> */}
          <div className="card">
            <div className="body">
              <div className="MainContentBox" />
                <div className="subTitle">
                  <div className="productCard">
                  <div className="productHeader">
                    <Image src={cukmin} alt={'국민은행'} width="50" height="50" className="productImg"/>
                    <div className="productTitle">{result[i].title}</div>
                  </div>
                  <div className="productSub">
                    <div className="productSubTitle">[{result[i].tag1}]</div>
                    <div className="productSubTitle1"> 내일 희망형 </div>
                  </div>
                  <div className="productSubMain">{result[i].content}</div>
                  <div className="productSubMainSub">최고 연</div>
                  <div className="productMainBox">
                    <div className="productMain">
                      <div className="productMainNum">{result[i].high}</div>
                      <div className="productMainNumper">%</div>
                    </div>
                    <div className="productEx">
                      <div className="productExNum">기본 {result[i].high}%</div>
                      <div className="productExM">({result[i].long}개월)</div>
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
      {sessions ?  <Link href={'/create'}> <button className='createButtonMain'>내 상품 등록</button></Link> : <div/>}
    </>
    
  )
}
Home.propTypes = {
  result: PropTypes.string.isRequired,
  resultFF: PropTypes.string.isRequired,
};