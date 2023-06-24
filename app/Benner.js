'use client'
import React from "react"
import Image from "next/image"
import frame1 from "../public/Frame 1.png"

export default function Benner(){
    
    return(
        <Image src={frame1} width={660} height={200} className="benner"/>
    )
}
