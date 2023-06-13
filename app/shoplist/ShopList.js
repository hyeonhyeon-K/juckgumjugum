'use client'

import Image from 'next/image'
import cukmin from "./../../public/cukmin.png"
import React from "react"

export default function DepositDetail(){
  return(
    <div className="shopListBoxBody">
            <div className='shopListBox'>
                <Image src={cukmin} alt={'국민은행'} width="65" height="65" className='shopListImg'/>
               
                <div className='shopList'>
                        <div className='shopListTag'>
                            <div className='shopListTagD'>tag</div>
                            <div className='shopListTagD1'>tag</div>
                            <div className='shopListTagD1'>tag</div>
                        </div>
                        <div className='shopListContent'>
                            <div className='shopListContentTitle'>희망 예금</div>
                            <div className='shopListContentC'>희망찬 내일을 위해 희망찬 미래를 위해 희망의 우리를 위해</div>
                            <a className='shopListContentNum'>4.2</a>
                            <div className='shopListContentExBox'>
                                <div className='shopListContentEx'>최고 연</div>
                                <div className='shopListContentPer'>%</div>
                            </div>
                            <div className='shopListContentExBox'>
                                <div className='shopListContentEx1'>기본 2.45%</div>
                                <div className='shopListContentEx1Ex'>(24개월)</div>
                            </div>
                        </div>
                </div>
            </div>
    </div>

    
  )
}