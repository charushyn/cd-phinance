'use client'

import Link from "next/link";
import { useInView, triggerOnce } from "react-intersection-observer";
import { useSelector } from "react-redux";

export default function FAQBlock(props){
    const currentLang = useSelector((state) => state.langReducer.id)
    const {ref: faqRef, inView: isBlockVisible } = useInView({triggerOnce: true})
    return(
        <div ref={faqRef} class={`flex flex-col h-fit gap-2 font-Acrom_Light opacity-0 ${isBlockVisible ? 'animateOpacityItem' : ''}`}>
            <div class='h-fit relative'>
                <img src={props.photoUrl} class=' object-cover w-full h-[300px]'></img>
                <Link class='flex flex-row w-fit h-fit px-4 py-2 gap-2 bg-white z-20 absolute bottom-0 right-0' href={'/'}>
                    <p class='uppercase font-Acrom_Regular'>читати</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                </Link>
            </div>
            <div class='font-Acrom_Bold'>
                {props.title[currentLang]}
            </div>
        </div>
    )
}