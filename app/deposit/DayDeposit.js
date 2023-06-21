'use client'

import { FaAngleRight } from "react-icons/fa";
import React from "react"
import Link from "next/link";

export default function dayDeposit(){
    return(
        <div className="dayDepositBox">
            <Link href={'/deposit/depositdetail'} className="text-decoration">
                <div className="dayDeposit">정기적금</div>
                <FaAngleRight/>
            </Link>
        </div>
    )
}