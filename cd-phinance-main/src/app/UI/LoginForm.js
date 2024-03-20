'use client'

import React from "react";
import FormInput from "./FormInput";
import DefaultButton from "./DefaultButton";

import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginForm(){

    const [values, setValues] = React.useState({
        email: "",
        password: "",
    })

    const inputs = [
        {
            id: 0,
            name: "email",
            type: "email",
            placeholder: "example@mail.com",
            label: 'Введіть email',
            errorMessage: 'Введіть вірний email.',
            required: true,
        },
        {
            id: 1,
            name: "password",
            type: "password",
            placeholder: "password",
            label: 'Введіть password',
            errorMessage: 'Введіть пароль.',
            pattern: '[A-Za-z]+',
            required: true,
        },
    ]


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
                            <div class='flex flex-col gap-2' key={input.id}>
                                <label class='text-white'>{input.label}</label>
                                <input 
                                    class="w-fit h-fit p-4 bg-white " 
                                    onChange={onChange} 
                                    onBlur={handleFocus} 
                                    focused={focused.toString()} 
                                    name={input.name}
                                    placeholder={input.placeholder}
                                    pattern={input.pattern}
                                    type={input.type}
                                    required={input.required}
                                    ></input>
                                <span class='error'>{input.errorMessage}</span>
                            </div>
                    )
                })}
                <div class='flex flex-col w-full gap-10'>
                    <Link href={'/registration'} className=" text-white flex flex-row gap-2 underline">
                            <p class=''>Новий користувач?</p>
                    </Link>
                    <DefaultButton type="submit" text='login' theme='white'></DefaultButton>
                </div>
            </div>
        </form>
    )
}