'use client'

import RegisterForm from "../Components/RegisterForm"
import Header from "../Components/Header"
import Link from "next/link"

export default function Registration(){
    return(
        <div class='min-h-svh flex flex-col bg-black p-4 font-Acrom_Light text-white'>
                <Link href='/' class='flex flex-row gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                    <p>на головну</p>
                </Link>
                <p class='text-center mt-5'>Register</p>
                <RegisterForm></RegisterForm>
        </div>
    )
}