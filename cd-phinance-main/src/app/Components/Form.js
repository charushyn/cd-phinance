'use client'

import React from "react";
import FormInput from "../UI/FormInput";
import DefaultButton from "../UI/DefaultButton";

import { useRouter } from "next/navigation";

export default function Form(){
    const router = useRouter()
    const [values, setValues] = React.useState({
        name: "",
        surname: "",
        number: "",
    })

    const inputs = [
        {
            id: 0,
            name: "name",
            type: "text",
            placeholder: "Ваше ім‎я",
            label: 'Ваше ім‎я',
            errorMessage: 'Імя занадто коротке або довге! 2-16 Символів.',
            required: true,
            pattern: "^[а-яА-ЯІіa-zA-ZąćęłńóśźżĄĆĘŃÓŹŻŁ]{2,16}$",
        },
        {
            id: 1,
            name: "surname",
            type: "text",
            placeholder: "Ваше призвіще",
            label: 'Наприклад: Мельник',
            errorMessage: 'Призвіще занадто коротке або довге! 2-16 Символів.',
            required: true,
            pattern: "^[а-яА-ЯІі]{2,16}$",
        },
        {
            id: 2,
            name: "number",
            type: "tel",
            placeholder: "000-000-000",
            label: 'Введіть номер телефону',
            errorMessage: 'Введіть вірний номер телефону.',
            pattern: "[0-9]{9}",
            static: '+48',
            required: true,
        },
    ]


    function onChange(e){
        setValues( { ...values, [e.target.name]: e.target.value})
    }

    console.log(values)


    return(
        <form class='flex flex-col px-4 font-Acrom_Light my-[80px]' onSubmit={(e) => {
            e.preventDefault()
            router ? router.push('/success') : ''
        }}>
            <p class='font-Acrom_Bold text-center'>Не знайшли потрібний розділ/маєте додаткові питання?</p>
            <p class='text-center'>Залишіть форму!</p>
            <div class='flex flex-col gap-8 mt-4'>
                {inputs.map((input) => {
                    return(
                        <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}></FormInput>
                    )
                })}
            </div>
            <DefaultButton type="submit" text='надіслати'></DefaultButton>
        </form>
    )
}