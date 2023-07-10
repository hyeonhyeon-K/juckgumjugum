// import Image from 'next/image'
import Link from 'next/link'
import Image from 'next/image';
import React from "react"
import PropTypes from 'prop-types';

export default function BankProduct(props){
    const {filterTitle} = props;
  return(
    <>
        {
        filterTitle.map((a,i)=>(
            <div className="depositdetailboxapi"  key={i}>
                <div className='depositdetailboxS'>
                <Link href={`/datailhana/${a.fin_prdt_nm}`} className='text-decoration'>
                <div className='depositdetailboxS1'>
                <Image src={`/${a.kor_co_nm}.png`} alt={'국민은행'} width="60" height="60" className='ddI'/>
                    <div className='ddInfTitle'>최소 연</div>
                    <div className='ddbs2'>
                        <div className='ddInfNum'>{a.intr_rate2}</div>
                        <div className='ddInfper'>%</div>
                    </div>
                </div>
                <div className='depositdetailcontent'>
                    <div className='ddcontentbuttonB'>
                        <button className='ddcontentTag1'>{a.intr_rate_type_nm}</button>
                        <button className='ddcontentTag1'>{a.rsrv_type_nm}</button>
                    </div>
                    <div className='contentbox'>
                        <div className='ddcontentTitle'>{a.fin_prdt_nm}</div>
                        <div className='ddcontentC'>{a.mtrt_int}</div>
                    </div>
                        <div className='ddcontentInfbox'>
                            <div>최소 {a.intr_rate}%</div>
                            <div className='ddcontentInfboxSub'>({a.save_trm}개월)</div>
                        </div>
                        
                </div>
                </Link>
                </div>
                </div>

        ))
           
}

</>
  )
}
BankProduct.propTypes = {
    filterTitle: PropTypes.string.isRequired,
  };