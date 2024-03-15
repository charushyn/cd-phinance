'use client'

import React from "react"

export default function FormInput(props){
    const [focused, setFocused] = React.useState(false)

    const {label, onChange, errorMessage, id, ...inputProps} = props

    const handleFocus = (e) => {
        setFocused(true)
    }

    return(
        <div class='flex flex-col gap-3'>
            <label class=''>{label}</label>
            <input class={props.static ? `w-full border-b-[1px] h-fit pb-1 border-black bg-white mobile-s:pl-[40px] relative mobile-l:text-xl mobile-l:py-6 mobile-l:pl-[63px]` : ` mobile-s:w-full h-fit py-2 border-b-[1px] border-black bg-white relative`} onChange={onChange} onBlur={handleFocus} focused={focused.toString()} {...inputProps}></input>
            {props.static ? <span class='relative mobile-s: bottom-[40.5px] left-2 w-fit mobile-l:text-xl mobile-l:bottom-[43px]'>{props.static}</span> : ''}
            <span class='error'>{errorMessage}</span>
        </div>
    )
}