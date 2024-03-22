'use client'

import FAQBlock from "../Components/FAQBlock"
import { useInView } from "react-intersection-observer"
import { useSelector } from "react-redux"

export default function FAQ(props){
    const currentLang = useSelector((state) => state.langReducer.id)
    const blocks = props['blocks']
    const title = props['h1']
    const { ref: faqRef, inView: faqIsVisible } = useInView({triggerOnce: true})
    return(
        <div ref={faqRef} class='flex flex-col px-4 mt-[20px] gap-10'>
            <div class='flex flex-row justify-center relative items-center gap-3 h-[100px]'>
                <p class={`font-Acrom_Regular text-xl pb-4 relative ${faqIsVisible ? 'animateAnswer' : ''}`}>{title['secondString'][currentLang]}</p>
                <div class={`bg-black w-[1px] h-full absolute rotate-45 top-0 bottom-0 ${faqIsVisible ? 'animateHr' : ''}`}></div>
                <p class={`font-Acrom_Regular text-xl pt-4 relative ${faqIsVisible ? 'animateQuestion' : ''}`}>{title['firstString'][currentLang]}</p>
            </div>
            {blocks.map((item) => {
                return(
                    <FAQBlock title={item.title} photoUrl={item.photoUrl}></FAQBlock>
                )
            })}
        </div>
    )
}