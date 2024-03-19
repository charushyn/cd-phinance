'use client'

import { useDispatch, useSelector } from "react-redux"
import { setIsShowLang } from "../GlobalRedux/Features/PopupLang/popupLangSlice"

export default function PopupLang(){

    const dispatch = useDispatch()
    const isShow = useSelector(state => state.popupLangReducer.isShow)
    return(
        <div class={`fixed flex flex-col z-[50] top-0 right-0 w-fit h-fit p-4 gap-4 bg-[#D3BE5F] ${isShow ? '' : 'hidden'}`}>
                <div class='flex flex-row justify-between gap-4'>
                    <p>Choose Language</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" onClick={() => {dispatch(setIsShowLang())}}>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
            <div class='flex flex-col gap-2'>
                <div class='flex flex-row gap-1'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/510px-Flag_of_Ukraine.svg.png" class='mobile-s:w-[30px] object-cover mobile-s:h-[20px] border-[1px]'></img>
                    <p>Ukrainian</p>
                </div>
                <div class='flex flex-row gap-1'>
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Flag_of_Poland.svg/640px-Flag_of_Poland.svg.png" class='mobile-s:w-[30px] object-cover mobile-s:h-[20px] border-[1px]'></img>
                    <p>Polski</p>
                </div>
                <div class='flex flex-row gap-1'>
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/800px-Flag_of_the_United_Kingdom.svg.png" class='mobile-s:w-[30px] object-cover mobile-s:h-[20px] border-[1px]'></img>
                    <p>English</p>
                </div>
            </div>
        </div>
    )
}