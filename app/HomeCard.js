"use client"

// import { FaAngleRight } from "react-icons/fa";
import Image from 'next/image'
import React from "react"
import Link from 'next/link';
import PropTypes from 'prop-types';
import styles from './component/HomeCard.module.css'



export default function Home(props){
  // eslint-disable-next-line react/prop-types
  const {result} = props;


  const modifiedResult = result.map((item) => {
    if (item.bank === '우리은행') {
      return { ...item, cuk: '60' };
    } else {
      return { ...item, cuk: '50' };
    }
  });

  // const data = result.result


  const datamap = modifiedResult.slice(0, 3).map((a,i) => (
    <div className={styles.body} key={i}>
      <div className={styles.subTitle}>
        {/* 여기서부터 map */}
        <Link href={`/detail/${modifiedResult[i]._id}`} className='text-decoration'>
          {/* <div className="subTitleFont"> 예금 </div>
          <FaAngleRight className="subTitleIcon"/> */}
          <div className={styles.card}>
            <div className={styles.body}>
                <div className={styles.subTitle}>
                  <div className={styles.productCard}>
                  <div className={styles.productHeader}>
                    <Image src={`/${modifiedResult[i].bank}.png`} alt={`${modifiedResult[i].bank}`} width={`${modifiedResult[i].cuk}`} height={`${modifiedResult[i].cuk}`} className={styles.productImg}/>
                    <div className={styles.productTitle}>{modifiedResult[i].title}</div>
                  </div>
                  <div className={styles.productSub}>
                    <div className={styles.productSubTitle}>[{modifiedResult[i].tag1}]</div>
                    <div className={styles.productSubTitle1}> 내일 희망형 </div>
                  </div>
                  <div className={styles.productSubMain}>{modifiedResult[i].content}</div>
                  <div className={styles.productSubMainSub}>최고 연</div>
                  <div className={styles.productMainBox}>
                    <div className={styles.productMain}>
                      <div className={styles.productMainNum}>{modifiedResult[i].high}</div>
                      <div className={styles.productMainNumper}>%</div>
                    </div>
                    <div className={styles.productEx}>
                      <div className={styles.productExNum}>기본 {modifiedResult[i].high}%</div>
                      <div className={styles.productExM}>({modifiedResult[i].long}개월)</div>
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
  result: PropTypes.array.isRequired,
  
};