'use client'

import LoginForm from "../Components/LoginForm"
import Link from "next/link"

import data from "../test";
import { usePathname } from 'next/navigation';

const LoginUI = 
  {
    'Login': LoginForm
  }

export default function Login(props){
    const currentPage = usePathname()
    console.log(data.pages[currentPage])

    return(
        <div class='min-h-svh flex flex-col  p-4 font-Acrom_Light '>
                <Link href='/' class='flex flex-row gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                    <p>на головну</p>
                </Link>
                <p class='text-center mt-5'>Login</p>
                {Object.values(data.pages[currentPage])[0].map((dataItemUI) => {
                    const props = Object.values(dataItemUI)[0]
                    const functionComponent = LoginUI[Object.keys(dataItemUI)[0]]
                    if(typeof LoginUI[Object.keys(dataItemUI)[0]] != 'undefined'){
                    return(functionComponent(props))
                    } else {
                    console.log('not a function')
                    }
                })}
        </div>
    )
}