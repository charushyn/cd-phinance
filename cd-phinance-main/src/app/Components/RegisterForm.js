'use client'

import React from "react";
import FormInput from "./FormInput";
import DefaultButton from "./DefaultButton";

import Link from "next/link";

export default function RegisterForm(){

    const [values, setValues] = React.useState({
        email: "",
        password: "",
        confirmPassword: "",
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
            errorMessage: 'Пароль повинен мати в собі: 8-20 символів, 1 спец., 1 цифру, 1 велику букву та 1 малу!',
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true,
        },
        {
            id: 2,
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirm Password",
            label: 'Cofirm Password',
            errorMessage: 'Password dont match!',
            pattern: values.password,
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
                                <span className='error'>{input.errorMessage}</span>
                            </div>
                    )
                })}
                <div class='flex flex-col w-full gap-10'>
                    <Link href={'/login'} className=" text-white flex flex-row gap-2 underline">
                            <p class=''>реєструвались раніше?</p>
                    </Link>
                    <DefaultButton type="submit" text='register' theme='white'></DefaultButton>
                </div>
            </div>
        </form>
    )
}