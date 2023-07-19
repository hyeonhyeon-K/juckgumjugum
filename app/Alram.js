"use client"

import React, {useEffect, useState} from "react"
// import styles from './component/'



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
                    <div className="alramContent">
                        <p>반가워요! 로그인 후 글을 작성해  보시겠어요? </p>
                    </div>
                </div>
            </div>
              ) : null
            }
            
        </div>
        
    )
}