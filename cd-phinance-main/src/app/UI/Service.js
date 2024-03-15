import React from "react"

import Link from "./Link"

export default function Service(props){
    const [active, setActive] = React.useState(false)

    return(
        <div class={`w-full px-4 flex flex-col font-Acrom_Light h-fit relative`} key={props.key} onClick={() => {setActive(!active)}}>
            <div class={`flex flex-row justify-between h-[70px] items-center`}>
                <img src={props.photo} class={`absolute ${active ? ' h-full' : 'h-[70px]'} object-cover object-center w-full top-0 bottom-0 left-0 right-0 brightness-[0.45] z-0`}></img>
                <p class={`text-white z-20 ${active ? ' opacity-0' : ''}`}>{props.title}</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={`w-6 h-6 text-white transition-all duration-200 ${active ? " rotate-180" : "rotate-0"}`}>
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
            <div class={`${active ? 'flex flex-col gap-4 pb-4' : 'hidden'}`}>
                <div class='z-20 text-white uppercase font-Acrom_Bold text-xl'>{props.title}</div>
                <div class='z-20 text-white'>{props.description}</div>
                <div class='flex justify-end'>
                    <Link text={'далі'} href='/'></Link>
                </div>
            </div>
        </div>
    )
}