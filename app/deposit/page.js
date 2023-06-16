import DeositFunction from "./DepositFunction"
import DayDeposit from "./DayDeposit.js"
import Expalne from "./Explan";
import Link from "next/link";
import React from "react"

export default function deposit(){
    return(
        <div>
            <Expalne/>
            <Link href={'/deposit/depositdetail/'} className='links'><DayDeposit/></Link>
            <div className="depositBox1">
                <div className="depositBox2">
                    <Link href={'/deposit/depositdetail/deposit3detail'} prefetch={false} id="deosit"><DeositFunction /></Link>
                    <DeositFunction />
                    <DeositFunction />
                </div>
            </div>
            <DayDeposit/>
            <div className="depositBox1">
                <div className="depositBox2">
                    <DeositFunction />
                    <DeositFunction />
                    <DeositFunction />
                </div>
            </div>
        </div>
    )
}