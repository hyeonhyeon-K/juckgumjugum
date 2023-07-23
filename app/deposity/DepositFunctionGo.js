"use client"
import Image from 'next/image'
import React from "react"
import PropTypes from 'prop-types';
import Link from 'next/link'


export default function Homecard(props) {
  const {resultYG, resultGo} = props;

  return(
    <div className='depositBoxss'>
      {
      resultYG.slice(0, 3).map((a,i)=>(
        <div className="depositBox1" key={a}>
          <div className="depositBox2"></div>
          <div className="depositBody" >
          <div className="MainContentBox" />
          <div className="explaneSubTitle">
            <div className="productCard">
            <Link href={`detaily/${resultGo[i]}`} className='text-decoration2'>
            <div className="productHeader">
              <Image src={`/${a.bank}.png`} alt={'국민은행'} width="50" height="50" className="productImg" priority={true}/>
              <div className="productTitle">{a.title}</div>
            </div>
            <div className="productSub">
              <div className="productSubTitle">[{a.tag}]</div>
              <div className="productSubTitle1"> 내일 희망형 </div>
            </div>
            <div className="productSubMain">{a.content}</div>
            <div className="productSubMainSub">최고 연</div>
            <div className="productMainBox">
              <div className="productMain">
                <div className="productMainNum">{a.high}</div>
                <div className="productMainNumper">%</div>
              </div>
              <div className="productEx">
                <div className="productExNum">기본 2.45 %</div>
                <div className="productExM">({a.long}개월)</div>
              </div>
            </div>
            </Link>
          </div>
          </div>
          
          </div>
        </div>
      ))}
   </div>
    
  )
}

Homecard.propTypes = {
  resultYG: PropTypes.string.isRequired,
  resultGo: PropTypes.string.isRequired,
};