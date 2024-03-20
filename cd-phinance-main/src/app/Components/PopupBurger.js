'use client'

import { useDispatch, useSelector } from "react-redux"
import {handleBurger, handleLang, clearState} from '../GlobalRedux/Features/Popups/popupsSlice'
import Link from "next/link"

export default function PopupBurger(){


    const popupIsShow = useSelector((state) => state.popupsReducer.isBurgerOpen)
    const dispatch = useDispatch()
    return(
        <div class={`w-full h-svh bg-[rgba(0,0,0,0.70)] ${popupIsShow ? '' : 'hidden'} z-[50] fixed`} onClick={() => dispatch(handleBurger())}>
            <div className='h-fit flex flex-col gap-4 bg-[#D3BE5F] p-4' onClick={(e) => e.stopPropagation()}>
                <div class='flex flex-row justify-between'>
                    <p>top</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" onClick={() => {dispatch(handleBurger())}}>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
                <Link href={'/login'} class='flex flex-row gap-1 items-center cursor-pointer' onClick={() => dispatch(clearState())}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    <p class='underline'>Login</p>
                </Link>
            </div>
        </div>
    )
}