import DeositFunction from "./DepositFunction"
import DayDeposit from "./DayDeposit.js"
import Expalne from "./Explan";

export default function deposit(){
    return(
        <div>
            <Expalne/>
            <DayDeposit/>
            <div className="depositBox1">
                <div className="depositBox2">
                    <DeositFunction />
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