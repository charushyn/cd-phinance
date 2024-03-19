'use client'

import { useDispatch, useSelector } from "react-redux"
import { setIsShowBurger } from "../GlobalRedux/Features/PopupBurger/popupBurgerSlice"

export default function PopupBurger(){


    const popupIsShow = useSelector((state) => state.popupBurgerReducer.isShow)
    const dispatch = useDispatch()

    console.log(popupIsShow)
    return(
        <div class={`w-full h-svh bg-[rgba(0,0,0,0.70)] ${popupIsShow ? '' : 'hidden'} z-[50] fixed`} onClick={() => dispatch(setIsShowBurger())}>
            <div className='h-fit flex flex-col gap-4 bg-[#D3BE5F] p-4' onClick={(e) => e.stopPropagation()}>
                <div class='flex flex-row justify-between'>
                    <p>top</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" onClick={() => {dispatch(setIsShowBurger())}}>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
                <div class='flex flex-row gap-1 items-center cursor-pointer'>
                    <p class='underline'>Some information</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                    </svg>
                </div>
            </div>
        </div>
    )
}