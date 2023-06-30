"use client"

import React, {useEffect, useState} from "react"



export default function Header(){
  const [alert, setAlert] = useState(true)
  useEffect(() => {
    const timer = setTimeout(()=>{setAlert(false)}, 2500);
    return ()=> {clearTimeout(timer)}
  }, []);


    return(
        <div>
            {
              alert === true ? (
                <div className="alramDiv">
                <div className="alramBody">
                    <div className="alramHeader">
                        <div className="alramTitle">알림</div>
                    </div>
                    <div className="alramContent">반가워요! 로그인 후 글을 <br/>작성해  보시겠어요?</div>
                </div>
            </div>
              ) : null
            }
            
        </div>
        
    )
}