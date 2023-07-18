import './globals.css'
// import { Inter } from 'next/font/google'
import { Providers } from "../redux/provider";
import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { getServerSession } from "next-auth"
import React from "react"
import Header from "./Header"
import SingInHeader from "./SingInHeader"
import { Analytics } from '@vercel/analytics/react';
import frame from '../public/Frame1.png'
import styles from './component/HomeCard.module.css'

export const metadata = {
  title: '적금저금',
  description: '적금과 예금을 공유해보세요!',
  keywords: ['적금', '예금', '적금저금'],
  creator: 'Jaehyeon Kim',
  generator: 'Next.js',
  applicationName: '적금저금',
  referrer: 'origin-when-cross-origin',
  authors: [{ name: 'Jaehyeon Kim' }, { name: 'Jaehyeon Kim', url: 'https://nextjs.org' }],
  colorScheme: 'white',
  publisher: 'Jaehyeon Kim',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  ogUrl: 'https://juckgum.com',
  ogType: 'website',
  ogTitle: '적금저금',
  ogDescription: '적금과 예금을 공유하고 은행 상품을 보세요!',
  ogImage: { frame },
  naverSiteVerification: 'b82e83b5369adc93c5ed599e3c629ddef2b50995.html',
  viewport: 'width=425px, initial-scale=0.8'
};


export default async function header({children}){
  let session =await getServerSession(authOptions)
  // console.log(session)

  return(
    <html lang="en">
    <body >
      <div className={styles.headerdiv}>
        { session ?<SingInHeader>
        </SingInHeader>  :<Header>
        </Header> }
          <Providers>{children} <Analytics/> </Providers>

      </div>
    {/* <Footer/> */}
    </body>
    </html>
  )
}
