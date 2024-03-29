'use client'

import Image from "next/image"

import logo from '@/app/images/logo.png'

import { useDispatch, useSelector } from "react-redux"
import {handleBurger, handleLang, clearState} from '../GlobalRedux/Features/Popups/popupsSlice'

// logoUrl

export default function Header(props){

    const dispatch = useDispatch()
    const currentLang = useSelector((state) => state.langReducer.id)

    return(
        <header class='z-[40] w-full bg-black flex flex-row px-4 items-center mobile-s:h-[70px] justify-between fixed'>
            <Image src={logo} class='w-fit h-[20px]' alt=""></Image>
            <div class='flex flex-row gap-5'>
                <div class='flex flex-row gap-1 items-center relative' onClick={() => dispatch(handleLang())}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                    <div class='text-white mobile-s:w-[30px] object-cover mobile-s:h-[20px]'>{currentLang}</div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 text-white" onClick={() =>  {dispatch(handleBurger())}}>
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>
        </header>
    )
}