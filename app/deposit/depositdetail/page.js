'use client'

import { FaAngleRight } from "react-icons/fa";
import DepositBenner from "./DepositBenner"
import DepositDetail from "./DepositDetail"

export default function depostidetail(){
    return(
        <div>
            <DepositBenner/>
            <DepositDetail/>
            <DepositDetail/>
            <DepositDetail/>
        </div>
    )
}