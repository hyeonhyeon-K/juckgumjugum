'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from "react"
import PropTypes from 'prop-types';

export default function DepositDetail(props){
    const {result, resultFF} = props;

    
  return(
    <>
        {result.map((a,i)=>(
            <div className="depositdetailbox"  key={a}>
                <div className='depositdetailboxS'>
                    <Link href={`detail/${resultFF[i]}`} className='text-decoration'> 
                <div className='depositdetailboxS1'>
                <Image src={`/${a.bank}.png`} alt={'국민은행'} width="60" height="60" className='ddI'/>
                    <div className='ddInfTitle'>최고연</div>
                    <div className='ddbs2'>
                        <div className='ddInfNum'>{a.high}</div>
                        <div className='ddInfper'>%</div>
                    </div>
                </div>
                <div className='depositdetailcontent'>
                    <div className='ddcontentbuttonB'>
                        <button className='ddcontentTag'>{a.tag}</button>
                        <button className='ddcontentTag1'>{a.tag1}</button>
                        <button className='ddcontentTag1'>{a.tag3}</button>
                    </div>
                    <div>
                        <div className='ddcontentTitle'>{a.title}</div>
                        <div className='ddcontentC'>{a.content}</div>
                    </div>
                        <div className='ddcontentInfbox'>
                            <div>기본 2.45%</div>
                            <div className='ddcontentInfboxSub'>({a.long}개월)</div>
                        </div>
                </div>
                </Link>
                </div>
                <div className='depositdetailbuttonbox'>
                {/* <Link href={'/shoplist'} ><button id='depositdetailbuttonboxLink'>장바구니 추가</button></Link> */}
                <Link href={`${a.link}`} ><button id='depositdetailbuttonboxLink'>가입하기</button></Link>
                <Link href={'https://www.kbstar.com/'} ><button id='depositdetailbuttonboxLink'>은행사이트</button></Link>
                </div>
                </div>

        ))
           
}

</>
  )
}
DepositDetail.propTypes = {
    result: PropTypes.string.isRequired,
    resultFF: PropTypes.string.isRequired,
  };