"use client"

// import { FaAngleRight } from "react-icons/fa";
import Image from 'next/image'
import { useRouter } from "next/navigation";
import cukmin from "../public/cukmin.png"
import React from "react"
import Link from 'next/link';
// import { useGetUsersQuery } from '../redux/services/userApi';

export default function Home(result){
  // const { data, error, isLoading } = useGetUsersQuery();
  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }
  // const korCoNm = data.result.baseList[0].kor_co_nm;

  const data = result.result

  const datamap = data.map((a,i) => (
<div className="body" key={a}>
      <div className="MainContentBox" />
      <div className="subTitle">
        {/* 여기서부터 map */}
        <div onClick={()=>{router.push(`/detail/${data[i]._id}`) }}>
          {/* <div className="subTitleFont"> 예금 </div>
          <FaAngleRight className="subTitleIcon"/> */}
          <div className="card">
            <div className="body">
              <div className="MainContentBox" />
                <div className="subTitle">
                  <div className="productCard">
                  <div className="productHeader">
                    <Image src={cukmin} alt={'국민은행'} width="50" height="50" className="productImg"/>
                    <div className="productTitle">{data[i].title}</div>
                  </div>
                  <div className="productSub">
                    <div className="productSubTitle">[{data[i].tag1}]</div>
                    <div className="productSubTitle1"> 내일 희망형 </div>
                  </div>
                  <div className="productSubMain">{data[i].content}</div>
                  <div className="productSubMainSub">최고 연</div>
                  <div className="productMainBox">
                    <div className="productMain">
                      <div className="productMainNum">{data[i].high}</div>
                      <div className="productMainNumper">%</div>
                    </div>
                    <div className="productEx">
                      <div className="productExNum">기본 {data[i].high}%</div>
                      <div className="productExM">({data[i].long}개월)</div>
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
      <Link href={"/create"}>
        <button className='createButtonMain'>내 상품 등록</button>
      </Link>
    </>
    
  )
}