"use client"
import { useRouter } from "next/navigation";

export default function Footer(){
    let router = useRouter()
    return(
        <footer>
          <div>
            <div className='footer'>
              <div id='footerFont' onClick={()=>{router.push('/') }}>홈</div>
              <div id='footerFont'>적금</div>
              <div id='footerFont' onClick={()=>{router.push('/deposit') }}>예금</div>
              <div id='footerFont' onClick={()=>{router.push('/') }}>소개</div>
            </div>
          </div>
        </footer>
    )
}