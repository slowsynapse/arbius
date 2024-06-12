"use client"
import React from "react"
import Image from "next/image"
import white_logo from '@/app/assets/images/generated_arbius_logo.png'
import showcase_1 from '@/app/assets/images/showcase_1.jpg'
import showcase_2 from '@/app/assets/images/showcase_2.jpg'
import showcase_3 from '@/app/assets/images/showcase_3.jpg'
import showcase_4 from '@/app/assets/images/showcase_4.jpg'
import showcase_5 from '@/app/assets/images/showcase_5.jpg'
import showcase_6 from '@/app/assets/images/showcase_6.jpg'
export default function Showcase(){
    const images=[showcase_1,showcase_2,showcase_3,showcase_4,showcase_5,showcase_6];
    return (
        <div className="bg-democratic-gradient py-16 relative">  
            <div>
                <p className=" absolute right-8 top-4 text-purple-text lato-bold text-right font-normal">Generated by Arbius Network</p>
            </div>
            <div className="CollaboratorsMarquee">
                <div className="MarqueeContainer">
                    {
                        images.map((image,index)=>{
                            return (
                                <div className="Item relative" key={index}>
                                    <div className="ImageItem"> 
                                        <Image src={image} className="rounded-xl" priority/>
                                    </div>
                                    <div className="w-[40px] h-[40px]  rounded-[50%] flex items-center justify-center absolute bottom-3 right-3">
                                        <Image src={white_logo} width={30} alt="arbius white" priority/>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="MarqueeContainer" aria-hidden="true">
                    {
                        images.map((image,index)=>{
                            return (
                                <div className="Item relative" key={index}>
                                    <div className="ImageItem"> 
                                        <Image src={image} className="rounded-xl" priority/>
                                    </div>
                                    <div className="w-[40px] h-[40px rounded-[50%] flex items-center justify-center absolute bottom-3 right-3">
                                        <Image src={white_logo}  width={30} alt="arbius white"/>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
   
}




