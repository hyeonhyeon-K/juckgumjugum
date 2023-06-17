"use client"
import Image from 'next/image'
import cukmin from "../../public/cukmin.png"
import React from "react"
import PropTypes from 'prop-types';
import Link from 'next/link'


export default function Homecard(props) {
  const {result, resultFF} = props;

  return(
    <div className='depositBoxss'>
      {
      result.map((a,i)=>(
        <div className="depositBox1" key={a}>
          <div className="depositBox2"></div>
          <div className="depositBody" >
          <div className="MainContentBox" />
          <div className="explaneSubTitle">
            <div className="productCard">
              
            <div className="productHeader">
              <Image src={cukmin} alt={'국민은행'} width="50" height="50" className="productImg"/>
              <Link href={`detail/${resultFF[i]}`} className='text-decoration'><div className="productTitle">{a.title}</div></Link>
            </div>
            <div className="productSub">
              <div className="productSubTitle">[목돈모으기]</div>
              <div className="productSubTitle1"> 내일 희망형 </div>
            </div>
            <div className="productSubMain">
              희망찬 내일을 위해 희망찬 미래를 위해 희망의 우리를 위해</div>
            <div className="productSubMainSub">최고 연</div>
            <div className="productMainBox">
              <div className="productMain">
                <div className="productMainNum">4.2</div>
                <div className="productMainNumper">%</div>
              </div>
              <div className="productEx">
                <div className="productExNum">기본 2.45 %</div>
                <div className="productExM">(24개월)</div>
              </div>
            </div>
            
          </div>
          </div>
          
          </div>
        </div>
      ))}
   </div>
    
  )
}

Homecard.propTypes = {
  result: PropTypes.string.isRequired,
  resultFF: PropTypes.string.isRequired,
};