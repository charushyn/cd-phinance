'use client'

import LoginForm from "../UI/LoginForm"
import Header from "../UI/Header"
import Link from "next/link"

export default function Login(){
    return(
        <div class='min-h-svh flex flex-col bg-black p-4 font-Acrom_Light'>
                <Link href={'/'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                </Link>
                <p class='text-white text-center'>Registration</p>
            <LoginForm></LoginForm>
        </div>
    )
}