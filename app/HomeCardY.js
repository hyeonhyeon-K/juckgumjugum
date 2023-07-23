"use client"

// import { FaAngleRight } from "react-icons/fa";
import Image from 'next/image'
import React from "react"
import Link from 'next/link';
import PropTypes from 'prop-types';


export default function Home(props){
  // eslint-disable-next-line react/prop-types
  const {resultY} = props;


  const modifiedResult = resultY.map((item) => {
    if (item.bank === '우리은행') {
      return { ...item, cuk: '60' };
    } else {
      return { ...item, cuk: '50' };
    }
  });

  // const data = resultY.resultY


  const datamap = modifiedResult.slice(0, 3).map((a,i) => (
    <div className="body" key={i}>
      <div className="subTitle">
        {/* 여기서부터 map */}
        <Link href={`/detaily/${modifiedResult[i]._id}`} className='text-decoration'>
          {/* <div className="subTitleFont"> 예금 </div>
          <FaAngleRight className="subTitleIcon"/> */}
          <div className="card">
            <div className="body">

                <div className="subTitle">
                  <div className="productCard">
                  <div className="productHeader">
                    <Image src={`/${modifiedResult[i].bank}.png`} alt={`${modifiedResult[i].bank}`} width={`${modifiedResult[i].cuk}`} height={`${modifiedResult[i].cuk}`} className="productImg"  priority={true}/>
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
        </Link>
        {/* 아래는 예시 */}
      </div>
      
    </div>
  ))
  return(
     <>
      {datamap}
    </>
    
  )
}
Home.propTypes = {
  resultY: PropTypes.array.isRequired,
};