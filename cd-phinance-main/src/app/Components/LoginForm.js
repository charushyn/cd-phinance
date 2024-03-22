'use client'

import React from "react";
import FormInput from "./FormInput";
import DefaultButton from "./DefaultButton";

import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import Link from "next/link";



export default function LoginForm(props){

    console.log(props['inputs'])

    const currentLang = useSelector((state) => state.langReducer.id)
    const [values, setValues] = React.useState({
        email: "",
        password: "",
    })

    const inputs = props['inputs']


    function onChange(e){
        setValues( { ...values, [e.target.name]: e.target.value})
    }

    function handleFocus(e){
        setFocused(true)
    }

    return(
        <form class='flex flex-col items-center px-4 font-Acrom_Light' onSubmit={(e) => {
            e.preventDefault()
        }}>
            <div class='flex flex-col gap-4 mt-4'>
                {inputs.map((input) => {
                    const [focused, setFocused] = React.useState(false)
                    function handleFocus(e){
                        setFocused(true)
                    }
                    return(
                            <div class='flex flex-col gap-2' key={Math.random()}>
                                <label class=''>{input.label[currentLang]}</label>
                                <input 
                                    class="w-fit h-fit py-4 bg-white border-b-[1px] border-black" 
                                    onChange={onChange} 
                                    onBlur={handleFocus} 
                                    focused={focused.toString()} 
                                    name={input.name}
                                    placeholder={input.placeholder[currentLang]}
                                    pattern={input.pattern}
                                    type={input.type}
                                    required={input.required}
                                    ></input>
                                <span class='error'>{input.errorMessage[currentLang]}</span>
                            </div>
                    )
                })}
                <div class='flex flex-col w-full gap-10'>
                    <Link href={'/registration'} className="flex flex-row gap-2 underline">
                            <p class=''>Новий користувач?</p>
                    </Link>
                    <DefaultButton type="submit" text='login' theme=''></DefaultButton>
                </div>
            </div>
        </form>
    )
}