'use client'

import React from "react"

import ButtonLink from "./ButtonLink"

// title, description, link(to page with choosed service), photoUrl, iconUrl

export default function Service(props){
    const [active, setActive] = React.useState(false)

    console.log(props.photo)

    return(
        <div className={`w-full flex flex-col font-Acrom_Light h-fit`} key={props.key} onClick={() => {setActive(!active)}}>
            <div className={`serviceC relative ${active ? 'h-[400px]' : 'h-[70px] mobile-m:h-[90px]'} flex flex-col`}>
                <div className={` flex flex-row justify-between items-center px-4 uppercase h-[70px] mobile-m:h-[90px] relative`}>
                    <p className={`relative text-white ${active ? 'opacity-0' : ''}`}>{props.title}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`w-6 h-6 text-white transition-all duration-200 ${active ? 'rotate-180' : 'rotate-0'}`}>
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
                <div className={`info ${active ? '' : 'hidden'} h-fit p-4 flex flex-col gap-4`}>
                    <div className=' text-white uppercase font-Acrom_Bold text-xl relative'>{props.title}</div>
                    <div className=' text-white relative'>{props.description}</div>
                    <div className='flex justify-end'>
                        <ButtonLink text={'далі'} href='/login'></ButtonLink>
                    </div>
                </div>
                <style jsx>{
                        `
                        .serviceC {
                            background-image: url(${props.photo});
                            background-size: cover;
                            background-repeat: no-repeat;
                            background-position: center;
                            transition: height 0.8s ease;
                        }
                        .serviceC::before {    
                            content: "";
                            background-size: cover;
                            position: absolute;
                            top: 0px;
                            right: 0px;
                            bottom: 0px;
                            left: 0px;
                            background-color: rgba(0,0,0,0.60);
                        }
                        .info{
                            animation: fadeIn 2s;
                        }
                        `
                    }</style>
            </div>
        </div>
    )
}

//